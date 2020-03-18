import React from 'react';
import { useI18n } from 'slim-i18n';
import scrollTo from 'animated-scroll-to';
import ArrowRightSvg from 'resources/svgs/full-arrow-right.component.svg';
import { Section } from 'common/components';
import { NavigationSide } from './navigation-side.component';
import { ProductSide } from './product-side.component';
import styles from './dark-footer.scss';

export function DarkFooter(): JSX.Element {
    return (
        <Section
            withLeftPadding
            component="footer"
            className={styles.footer}
            contentClassName={styles.footerContent}
            outerContent={<div className={styles.backgroundDark} />}
        >
            <NavigationSide />
            <ProductSide />

            <FooterBackground />
        </Section>
    );
}


function FooterBackground() {
    const i18n = useI18n();

    const onPressToTop = React.useCallback(() => {
        scrollTo(0, {
            maxDuration: 700
        });
    }, []);

    return (
        <div className={styles.background}>
            <img className={styles.backgroundImage}
                 src="/img/FooterDecoration.png"
                 alt={i18n.gettext('Plark non custodial wallet')}
                 title={i18n.gettext('plark cryptocurrency wallet')}
            />

            <div className={styles.backgroundCover} />
            <div className={styles.backgroundWhiteCover} />

            <div className={styles.backgroundToTop} onClick={onPressToTop}>
                <ArrowRightSvg className={styles.backgroundToTopArrow} />
            </div>
        </div>
    );
}
