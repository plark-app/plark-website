import { Request, Response } from 'express';

import logger from 'server/utils/logger';
import { getCache } from 'server/utils/memory-cache';
export default async function cacheMiddleware(req: Request, res: Response, next: () => void): Promise<void> {
    const { originalUrl: location } = req;

    const data = getCache(location);
    if (data === null) {
        logger.debug(`Cache miss: ${location}`);
        return next();
    }

    const { html, statusCode } = data;
    logger.debug(`Cache hit: ${location}`);
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');

    res.status(statusCode).write(html);
    res.end();
}
