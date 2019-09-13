import express from 'express';
import _ from 'lodash';
import logger from 'server/utils/logger';
import config from 'server/config';
import Telegraf from 'telegraf';

const telegramBotToken = config.get<string>('app.telegramBotToken', undefined);
const telegramChatId = config.get<string>('app.telegramChatID', undefined);

export default async (req: express.Request, res: express.Response) => {
    const { feedbackData = {}, title, deviceId, appVersion, buildNumber, deviceBrand, country } = req.body;

    logger.info(
        `Message from: ${country} by ${appVersion} (${buildNumber}) / ${deviceId} / ${deviceBrand}`,
    );

    if (!telegramBotToken) {
        res.sendStatus(204);
        logger.error('No Telegram bot Token');

        return;
    }

    if (!telegramChatId) {
        res.sendStatus(204);
        logger.error('No Telegram Chat ID');

        return;
    }

    const telegraf = new Telegraf(telegramBotToken);

    try {
        let message = [
            `<b>Plark Wallet – ${title || 'Feedback'}</b>`,

            `<b>DeviceID:</b> ${deviceId}`,
            `<b>Device:</b> ${deviceBrand}`,
            `<b>App Version:</b> ${appVersion} (${buildNumber})`,
            `<b>Country:</b> ${country}`,
        ];

        if (_.keys(feedbackData).length < 1) {
            message.push('', '<i>No feedback 😨</i>');
        } else {
            _.forEach(feedbackData, (row) => {
                let textValue = Array.isArray(row.value)
                    ? row.value.join(', ')
                    : row.value;

                if (typeof textValue === 'undefined' || textValue.length === 0) {
                    textValue = '–';
                }

                message.push('', `<b>${row.title}</b>`, textValue);
            });
        }

        await telegraf.telegram.sendMessage(
            telegramChatId,
            message.join('\n'),
            { parse_mode: 'HTML' },
        );

        logger.info(`Message sent to Chat`);
    } catch (error) {
        logger.error(error.message);
    }

    res.sendStatus(204);
};
