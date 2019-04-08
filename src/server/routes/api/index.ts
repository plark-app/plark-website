import express from 'express';
import bodyParser from 'body-parser';
import emailSubscribe from './email-subscribe';

export default function createApiRouter(): express.Router {
    const apiRouter = express.Router();

    apiRouter.use(bodyParser.json());
    apiRouter.post('/email-subscribe', emailSubscribe);

    return apiRouter;
}
