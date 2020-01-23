import React from 'react';
import cn from 'classnames';
import Slider, { Settings } from 'react-slick';
import { Section, StarRate, TwoIPhones } from 'common/components';
import userFeedbacks, { UserFeedback } from './feedbacks';
import ArrowRightSvg from 'resources/svgs/full-arrow-right.component.svg';
import styles from './feedback-section.scss';

type FeedbackSectionProps = CommonSection & {};

export const FeedbackSection = React.memo(function FeedbackSection(props: FeedbackSectionProps): JSX.Element {
    const { id } = props;

    const sliderRef = React.useRef<Slider>();

    const settings: Settings = {
        className: styles.sliderBox,
        accessibility: false,
        dots: false,
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
            withLeftPadding
            id={id}
            className={styles.section}
            contentClassName={styles.sectionContent}
        >
            <div className={styles.phones}>
                <TwoIPhones className={styles.phonesImage} />
            </div>

            <div className={styles.slider}>
                <Slider {...settings} ref={sliderRef as any}>
                    {userFeedbacks.map((data: UserFeedback, i: number) => (
                        <div key={i}>
                            <FeedbackCard {...data} />
                        </div>
                    ))}
                </Slider>

                <a href="https://dl.plark.io/app/website-appstore" target="_blank"
                   className={cn(styles.appstoreLink, 'arrow-link')}>
                    <img src="/img/AppStore_Icon.svg"
                         className={styles.appstoreLinkImage}
                         alt="Plark at AppStore"
                         title=""
                    />
                    <span className={styles.appstoreLinkTitle}>view all appstore reviews</span>
                </a>

                <div className={styles.sliderNav}>
                    <div onClick={onPrev} className={cn(styles.sliderNavButton, styles.isNext)}>
                        <ArrowRightSvg className={styles.sliderNavButtonArrow} />
                    </div>
                    <div onClick={onNext} className={cn(styles.sliderNavButton, styles.isPrev)}>
                        <ArrowRightSvg className={styles.sliderNavButtonArrow} />
                    </div>
                </div>
            </div>
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
