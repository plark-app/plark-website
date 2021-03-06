import React from 'react';
import cn from 'classnames';
import Slider, { Settings } from 'react-slick';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { Section, StarRate, TwoIPhones } from 'common/components';
import userFeedbacks, { UserFeedback } from './feedbacks';
import ArrowRightSvg from 'resources/svgs/full-arrow-right.component.svg';
import styles from './feedback-section.scss';

type FeedbackSectionProps = CommonSection & {};

export const FeedbackSection = React.memo(function FeedbackSection(props: FeedbackSectionProps): JSX.Element {
    const { id } = props;

    const sliderRef = React.useRef<Slider>();
    const i18n = useI18n();

    const settings: Settings = {
        className: styles.sliderBox,
        accessibility: false,
        dots: false,
        fade: true,
        arrows: false,
        infinite: true,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 12000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        centerPadding: '20px',
    };

    const onNext = React.useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }, []);


    const onPrev = React.useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }, []);

    return (
        <Section
            flexContent
            id={id}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <Col className={styles.phones} sm={8} lg={{ size: 5, offset: 2 }}>
                <TwoIPhones className={styles.phonesImage} />
            </Col>

            <Col className={styles.slider} sm={8} lg={{ size: 4, offset: 1 }}>
                <Slider {...settings} ref={sliderRef as any}>
                    {userFeedbacks.map((data: UserFeedback, i: number) => (
                        <div key={i}>
                            <FeedbackCard {...data} />
                        </div>
                    ))}
                </Slider>

                <a href="https://apps.apple.com/ua/app/plark-crypto-wallet/id1455862890#see-all/reviews"
                   target="_blank"
                   className={cn(styles.appstoreLink, 'arrow-link')}
                >
                    <img src="/img/AppStore_Icon.svg"
                         className={styles.appstoreLinkImage}
                         alt={i18n.gettext('Plark at AppStore')}
                         title={i18n.gettext('View all AppStore reviews')}
                    />
                    <span className={styles.appstoreLinkTitle}>{i18n.gettext('view all appstore reviews')}</span>
                </a>

                <div className={styles.sliderNav}>
                    <div onClick={onPrev} className={cn(styles.sliderNavButton, styles.isNext)}>
                        <ArrowRightSvg className={styles.sliderNavButtonArrow} />
                    </div>
                    <div onClick={onNext} className={cn(styles.sliderNavButton, styles.isPrev)}>
                        <ArrowRightSvg className={styles.sliderNavButtonArrow} />
                    </div>
                </div>
            </Col>
        </Section>
    );
});

function FeedbackCard(props: UserFeedback) {
    return (
        <div className={styles.card}>
            <StarRate rate={props.rate} />
            <p className={styles.cardFeedback}>{props.feedback}</p>
            <h4 className={styles.cardAuthor}>{props.user}</h4>
        </div>
    );
}
