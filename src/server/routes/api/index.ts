import express from 'express';
import bodyParser from 'body-parser';
import emailSubscribe from './email-subscribe';
import leaveFeedback from './leave-feedback';

export default function createApiRouter(): express.Router {
    const apiRouter = express.Router();

    apiRouter.use(bodyParser.json());
    apiRouter.post('/email-subscribe', emailSubscribe);
    apiRouter.post('/leave-feedback', leaveFeedback);

    return apiRouter;
}
