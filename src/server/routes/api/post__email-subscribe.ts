import express from 'express';
import { get } from 'lodash';
import Mailchimp from 'mailchimp-api-v3';
import logger from 'server/utils/logger';
import config from 'server/config';
import geoip from 'geoip-lite';

const CryptoJS = require('crypto-js');

const mailchimpApiKey = config.get<string>('app.mailchimpApiKey', undefined);
const listId = config.get<string>('app.mailchimpListID', undefined);

export default async (req: express.Request, res: express.Response) => {
    if (!mailchimpApiKey) {
        res.sendStatus(500);
        logger.error('No Mailchimp API Key');

        return;
    }

    if (!listId) {
        res.sendStatus(500);
        logger.error('No Mailchimp List ID');

        return;
    }

    const mailClient = new Mailchimp(mailchimpApiKey);
    const email = get(req.body, 'email');

    if (!email) {
        res.status(400).send({
            error: 'Email must be set',
        });

        return;
    }

    try {
        const subscriberHash = CryptoJS.MD5(email);
        logger.info('Subscribe Email: ' + email);

        const userData: any = {
            email_address: email,
            status: 'subscribed',
            tags: ['by-website'],
        };

        try {
            const location = geoip.lookup(req.ip);
            const [latitude, longitude] = location.ll;
            userData.location = { latitude, longitude };
        } catch (error) {
            logger.warn(`Can not find Location by IP ${req.ip}: ` + error.message);
        }

        await mailClient.put(`/lists/${listId}/members/${subscriberHash}`, userData);

        res.send({
            success: true,
        });
    } catch (error) {
        res.status(500).send({
            error: 'Something wrong',
        });

        logger.error(error.message);

        return;
    }
};
