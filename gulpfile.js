const gulp = require('gulp');
const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const mkdirp = require('mkdirp-sync');
const axios = require('axios');
const PotExtractor = require('./pot-extractor');
const dotenv = require('dotenv');
const PlarkFAQ = require('./plark-faq');

const config = dotenv.config();

const locoReadKey = _.get(config, 'parsed.LOCO_READ_KEY', 'S8z2_p1YMlMWX9owwJUGCCGF-fhjF1fF');
const locoWriteKey = _.get(config, 'parsed.LOCO_WRITE_KEY');
const locales = require('./config/locales.json');

gulp.task(
    'copy',
    copyTask({
        source: './resources/public/',
        destinations: ['./dest/client'],
        // pattern: '/*',
    }),
);

gulp.task('pot', PotExtractor.extract);

gulp.task('locales:import', async () => {
    mkdirp(path.resolve('./resources/locales'));
    const writeLocaleFile = (locale, translates) => {
        fs.writeFileSync(path.resolve(`./resources/locales/${locale}.json`), JSON.stringify(translates));
    };

    const extractLocale = (locale) => {
        const successLoad = (response) => {
            writeLocaleFile(locale, response.data);
        };

        const errorLoad = (error) => {
            console.log(`Locale ${locale} error!`);
            writeLocaleFile(locale, {});
        };

        axios
            .get(`https://localise.biz/api/export/locale/${locale}.json`, {
                params: {
                    index: 'text',
                    format: 'i18next3',
                    status: 'translated',
                    key: locoReadKey,
                },
            })
            .then(successLoad)
            .catch(errorLoad);
    };

    const codes = Object.keys(locales);
    codes.forEach(extractLocale);
});

gulp.task('locales:export', async () => {
    if (!locoWriteKey) {
        console.log('You have to set Localise KEY for https://localise.biz/');
        return;
    }

    const tagNew = 'To Translate';
    const tagAbsent = 'Deprecated';
    const requestBody = fs.readFileSync('build/messages.pot');
    const requestParams = {
        headers: {
            Authorization: `Loco ${locoWriteKey}`,
            'Content-Type': 'text/plain',
        },
        params: {
            'tag-new': tagNew,
            'tag-updated': tagNew,
            'tag-absent': tagAbsent,
            'untag-updated': tagAbsent,
            'untag-absent': tagNew,
        },
    };

    try {
        const resp = await axios.post('https://localise.biz/api/import/pot?async=1', requestBody, requestParams);
        console.log('Upload done: ', resp.status);
    } catch (error) {
        console.log(error.message);
    }
});

function copyTask(opts) {
    const { source, destination, destinations = [destination], pattern = '**/*' } = opts;

    return () => {
        let stream = gulp.src(source + pattern, { base: source });
        destinations.forEach((destination) => {
            stream = stream.pipe(gulp.dest(destination));
        });

        return stream;
    };
}

gulp.task('faq:import', async () => {
    const destPath = path.resolve('./src/common/pages/faq/faq-content');
    mkdirp(destPath);

    const contentPath = './plark-faq/faq';
    const files = fs.readdirSync(contentPath);

    const jsonFileList = [];

    for (let i = 0; i < files.length; i++) {
        const fileName = files[i];
        if (!fileName.endsWith('.md')) {
            return;
        }

        const content = fs.readFileSync(contentPath + '/' + fileName);
        const jsonFileName = fileName.replace('.md', '') + `.json`;
        fs.writeFileSync(path.resolve(destPath, jsonFileName), JSON.stringify(PlarkFAQ.parseFAQItem(content)));

        jsonFileList.push(jsonFileName);
    }

    fs.writeFileSync(
        path.resolve(destPath, 'index.js'),
        `export default [${jsonFileList.map((filename) => `require('./${filename}')`).join(',')}];`,
    );
});
