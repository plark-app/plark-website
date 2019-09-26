import React from 'react';
import classnames from 'classnames';

import { Icons } from 'common/components';

import styles from './socials.scss';

interface ISocialsProps {
    className?: string;
}
export default function Socials(props: ISocialsProps): JSX.Element {
    return (
        <div className={classnames(styles.social, props.className)}>
            <a href="https://github.com/plark-app" className={styles.socialItem}>
                <Icons.Github />
            </a>
            <a href="https://t.me/PlarkWallet" className={styles.socialItem}>
                <Icons.Telegram />
            </a>
            <a href="https://twitter.com/PlarkWallet" className={styles.socialItem}>
                <Icons.Twitter />
            </a>
            <a href="https://www.facebook.com/plark.io/" className={styles.socialItem}>
                <Icons.Facebook />
            </a>
        </div>
    )
}
