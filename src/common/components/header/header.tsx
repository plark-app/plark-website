import React from 'react';
import cn from 'classnames';
import Section from 'common/components/section';
import NavLink from 'common/components/nav-link';
import StoreBadge, { BadgeContainer } from 'common/components/store-badge';
import PlatformList from 'common/utils/install-platforms';
import PlarkLogo from './plark-logo.component.svg';
import styles from './header.scss';

type HeaderProps = {
    isWhite?: boolean;
};

export default (props: HeaderProps) => {
    const { isWhite = false } = props;

    return (
        <header id="header" className={cn(styles.header, isWhite && styles.isWhite)}>
            <Section contentClassName={styles.headerSectionContent}>
                <NavLink to="/">
                    <PlarkLogo height={24} />
                </NavLink>

                <BadgeContainer inactive={!isWhite}>
                    <StoreBadge platform={PlatformList.apple} />
                    <StoreBadge platform={PlatformList.chrome} />
                </BadgeContainer>
            </Section>
        </header>
    );
};
