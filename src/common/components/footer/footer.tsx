import React from 'react';
import { useI18n } from 'slim-i18n';

import { __, TranslateFunction } from 'common/i18n';
import PlatformList from 'common/utils/install-platforms';
import { Section, StoreBadge, NavLink } from 'common/components';
import { Socials } from 'common/components';

import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import FooterColumn from './footer-column.component';

import styles from './footer.scss';

interface IFooterLink {
    to: string;
    text: TranslateFunction;
    additional?: JSX.Element;
    source?: 'external';
}

interface IFooterColumn {
    title: TranslateFunction;
    links: IFooterLink[];
    columnType?: 'get_in_touch';
}

const footerColumns: IFooterColumn[] = [
    {
        title: __('Product'),
        links: [
            {
                to: '/ios-wallet',
                text: __('Plark for iOS'),
            },
            {
                to: '/android-wallet',
                text: __('Plark for Android'),
                additional: <span style={{ fontSize: 10 }}>(coming soon)</span>,
            },
            {
                to: '/bitcoin-wallet',
                text: __('Plark for Bitcoin'),
            },
            {
                to: '/mobile-wallet',
                text: __('Mobile Wallet'),
            },
        ],
    },
    {
        title: __('Company'),
        links: [
            {
                to: '/about-us',
                text: __('About us'),
            },
            {
                to: '/contact-us',
                text: __('Contact-us'),
            },
            // {
            //     to: '/carriers',
            //     text: __('Carriers'),
            // },
        ],
    },
    {
        title: __('Learn'),
        links: [
            {
                to: 'https://community.plark.io',
                text: __('Community'),
                source: 'external',
            },
            {
                to: '/blog',
                text: __('Blog'),
            },
            {
                to: '/faq',
                text: __('FAQs'),
            },
        ],
    },
    {
        title: __('Social'),
        links: [
            {
                to: 'https://t.me/PlarkWallet',
                text: __('Telegram'),
                source: 'external',
            },
            {
                to: 'https://www.facebook.com/plark.io/',
                text: __('Facebook'),
                source: 'external',
            },
            {
                to: 'https://twitter.com/PlarkWallet',
                text: __('Twitter'),
                source: 'external',
            },
            {
                to: 'https://www.reddit.com/r/plark',
                text: __('Reddit'),
                source: 'external',
            },
            {
                to: 'https://github.com/plark-app',
                text: __('GitHub'),
                source: 'external',
            },
            {
                to: 'https://www.producthunt.com/posts/plark-crypto-wallet',
                text: __('Product Hunt'),
                source: 'external',
            },
        ],
    },
    {
        title: __('Get in touch'),
        links: [
            {
                to: 'mailto:hi@plark.io',
                text: __('hi@plark.io'),
                source: 'external',
            },
        ],
        columnType: 'get_in_touch',
    },
];

export default function Footer(): JSX.Element {
    const i18n = useI18n();
    return (
        <footer>
            <Section className={styles.footer} contentClassName={styles.footerContent}>
                <div className={styles.footerMain}>
                    {footerColumns.map((column: IFooterColumn, i: number) => {
                        return (
                            <FooterColumn
                                title={column.title(i18n)}
                                key={i}
                                opened={column.columnType === 'get_in_touch'}
                            >
                                <>
                                    <ColumnLinks links={column.links} />
                                    {column.columnType === 'get_in_touch' && <Socials />}
                                </>
                            </FooterColumn>
                        );
                    })}
                </div>

                <div className={styles.footerSecond}>
                    <PlarkLogo height={25} className={styles.footerLogo} />
                    <div>
                        <StoreBadge className={styles.footerBadge} platform={PlatformList.apple} height={40} />
                    </div>
                </div>
            </Section>

            <Section className={styles.bottomBar} contentClassName={styles.bottomBarContent}>
                <nav className={styles.bottomBarNav}>
                    <span className={styles.navLink}>Plark @ 2019</span>
                    <NavLink to="/privacy" className={styles.navLink}>
                        {i18n.gettext('Privacy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.navLink}>
                        {i18n.gettext('Terms')}
                    </NavLink>

                    <a href="/sitemap" className={styles.navLink}>
                        Sitemap
                    </a>
                </nav>

                <nav className={styles.bottomBarNav}>
                    <NavLink to="/" className={styles.navLink}>
                        English (United States)
                    </NavLink>
                </nav>
            </Section>
        </footer>
    );
}

type ColumnLinksProps = {
    links: IFooterLink[];
};

function ColumnLinks({ links }: ColumnLinksProps): JSX.Element {
    const i18n = useI18n();
    return (
        <>
            {links.map((link: IFooterLink, i: number) => {
                if (link.source === 'external') {
                    return (
                        <a key={i} href={link.to} className={styles.navLink} target={'_blank'}>
                            {link.text(i18n)}
                            {link.additional && link.additional}
                        </a>
                    );
                }
                return (
                    <NavLink key={i} to={link.to} className={styles.navLink}>
                        {link.text(i18n)}
                    </NavLink>
                );
            })}
        </>
    );
}
