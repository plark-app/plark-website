import { Request, Response } from 'express';

export default function robotsTxt(_req: Request, res: Response) {

    let text = [
        'User-agent: *',
        '',
        'Sitemap: https://plark.io/sitemap.xml',
    ];

    res.setHeader('Content-Type', 'text/plain');
    res.send(text.join("\n"));
}