import Stripe from 'stripe';
import * as process from 'process';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2022-11-15',
    appInfo: {
        name: 'Ignite Shop',
    },
});
