import React from 'react';
import moment from 'moment';
import scrollTo from 'animated-scroll-to';
import { useI18n } from 'slim-i18n';
import ArrowRightSvg from 'resources/svgs/full-arrow-right.component.svg';
import { Section, NavLink, Socials } from 'common/components';
import { NavigationSide } from './navigation-side.component';
import { ProductSide } from './product-side.component';
import styles from './dark-footer.scss';

export function DarkFooter(): JSX.Element {
    const i18n = useI18n();

    const [copyrightYears] = React.useState(() => {
        const needYear = '2018';
        const currentYear = moment().format('Y');

        if (currentYear === needYear) {
            return currentYear;
        }

        return needYear + ' - ' + currentYear;
    });

    return (
        <Section className={styles.footer}
                 contentClassName={styles.footerContent}
                 withLeftPadding
                 component="footer"
                 outerContent={<FooterBackground />}
        >
            <div className={styles.main}>
                <ProductSide />
                <NavigationSide />
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomLeft}>
                    <Socials titleMode
                             className={styles.bottomSocial}
                             linkClassName={styles.bottomSocialLink}
                    />
                    <span className={styles.bottomCopyright}>plark @ {copyrightYears}</span>
                </div>

                <div className={styles.bottomRight}>
                    <NavLink to="/privacy" className={styles.secondaryLink}>
                        {i18n.gettext('Privacy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.secondaryLink}>
                        {i18n.gettext('Terms')}
                    </NavLink>

                    <NavLink to="/sitemap" className={styles.secondaryLink}>
                        {i18n.gettext('Sitemap')}
                    </NavLink>
                </div>
            </div>
        </Section>
    );
}


function FooterBackground() {
    const onPressToTop = React.useCallback(() => {
        scrollTo(0);
    }, []);

    return <div className={styles.background}>
        <div className={styles.backgroundDark} />
        <img className={styles.backgroundImage}
             src="/img/FooterDecoration.png"
             alt="Plark non custodial wallet"
             title="plark cryptocurrency wallet"
        />

        <div className={styles.backgroundTop} onClick={onPressToTop}>
            <ArrowRightSvg className={styles.backgroundTopArrow} />
        </div>
    </div>;
}
