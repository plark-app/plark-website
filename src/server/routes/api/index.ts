import express from 'express';
import bodyParser from 'body-parser';
import post_EmailSubscribe from './post__email-subscribe';
import post_LeaveFeedback from './post__leave-feedback';
import post_Feedback from './post__feedback';

export default function createApiRouter(): express.Router {
    const apiRouter = express.Router();

    apiRouter.use(bodyParser.json());
    apiRouter.post('/email-subscribe', post_EmailSubscribe);
    apiRouter.post('/leave-feedback', post_LeaveFeedback);
    apiRouter.post('/feedback', post_Feedback);

    return apiRouter;
}
