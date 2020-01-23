import { Request, Response } from 'express';
import config from '../config';

export default function robotsTxt(_req: Request, res: Response) {

    const isTest = config.get('app.isTest', true);
    let text = ['User-agent: *'];

    if (isTest) {
        text.push('Disallow: /');
    } else {
        text.push('');
        text.push('Sitemap: https://plark.io/sitemap.xml');
        text.push('Host: https://plark.io');
    }

    res.setHeader('Content-Type', 'text/plain');
    res.send(text.join('\n'));
}
