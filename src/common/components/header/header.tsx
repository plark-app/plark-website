import React from 'react';
import cn from 'classnames';
import { Section, NavLink } from 'common/components';
import { useI18n } from 'slim-i18n';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import styles from './header.scss';

type HeaderProps = {
    isWhite?: boolean;
};

export default function Header(props: HeaderProps): JSX.Element {
    const { isWhite = false } = props;
    const i18n = useI18n();

    return (
        <header id="header" className={cn(styles.header, isWhite && styles.isWhite)}>
            <Section contentClassName={styles.headerSectionContent}>
                <NavLink to="/">
                    <PlarkLogo height={20} className={styles.headerLogo} />
                </NavLink>

                <nav className={styles.nav}>
                    <a href="https://community.plark.io/" className={styles.navUnit}>
                        {i18n.gettext('Community')}
                    </a>
                    <a href="/blog" className={styles.navUnit}>
                        {i18n.gettext('Blog')}
                    </a>
                </nav>
            </Section>
        </header>
    );
};
