import React from 'react';
import cn from 'classnames';
import { Icons } from 'common/components';
import styles from './socials.scss';

interface ISocialsProps {
    titleMode?: boolean;
    className?: string;
    linkClassName?: string;
}

export function Socials(props: ISocialsProps): JSX.Element {
    const { titleMode = false, linkClassName } = props;

    return (
        <div className={cn(styles.social, titleMode && styles.isTitleMode, props.className)}>
            <a target={'_blank'} href="https://github.com/plark-app"
               className={cn(styles.socialItem, linkClassName)}>
                {titleMode ? 'Github' : <Icons.Github />}
            </a>

            <a target={'_blank'} href="https://t.me/PlarkWallet"
               className={cn(styles.socialItem, linkClassName)}>
                {titleMode ? 'Telegram' : <Icons.Telegram />}
            </a>

            <a target={'_blank'} href="https://twitter.com/PlarkWallet"
               className={cn(styles.socialItem, linkClassName)}>
                {titleMode ? 'twitter' : <Icons.Twitter />}
            </a>

            <a target={'_blank'} href="https://www.facebook.com/plark.io/"
               className={cn(styles.socialItem, linkClassName)}>
                {titleMode ? 'Facebook' : <Icons.Facebook />}
            </a>
        </div>
    );
}
