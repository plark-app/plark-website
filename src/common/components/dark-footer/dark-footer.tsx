import React from 'react';
import moment from 'moment';
import scrollTo from 'animated-scroll-to';
import { Col, Row } from 'reactstrap';
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
        <Section
            withLeftPadding
            component="footer"
            className={styles.footer}
            contentClassName={styles.footerContent}
            outerContent={<FooterBackground />}
        >
            <NavigationSide />
            <ProductSide />

            <Row className={styles.bottom}>
                <Col className={styles.bottomLeft} lg={4}>
                    <Socials titleMode
                             className={styles.bottomSocial}
                             linkClassName={styles.bottomSocialLink}
                    />
                    <span className={styles.bottomCopyright} style={{ display: 'none' }}>
                        plark @ {copyrightYears}
                    </span>
                </Col>

                <Col className={styles.bottomRight} lg={{ size: 4, offset: 1 }}>
                    <NavLink to="/privacy" className={styles.secondaryLink}>
                        {i18n.gettext('Privacy')}
                    </NavLink>

                    <NavLink to="/terms" className={styles.secondaryLink}>
                        {i18n.gettext('Terms')}
                    </NavLink>

                    <NavLink to="/sitemap" className={styles.secondaryLink}>
                        {i18n.gettext('Sitemap')}
                    </NavLink>
                </Col>
            </Row>
        </Section>
    );
}


function FooterBackground() {
    const onPressToTop = React.useCallback(() => {
        scrollTo(0);
    }, []);

    return <div />;

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
