import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Section, Topic, StarRate, PartnerList } from 'common/components';
import userFeedbacks, { UserFeedback } from './feedbacks';
import styles from './feedback-section.scss';

type FeedbackSectionProps = {
    topic?: {
        title: string;
        description?: string;
        titleTag?: 'h1' | 'h2' | 'h3' | 'h4';
    }
};

export default React.memo(function FeedbackSection(props: FeedbackSectionProps): JSX.Element {

    const { topic } = props;

    const settings: Settings = {
        accessibility: false,
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        centerPadding: '50px',
    };

    return (
        <Section className={styles.section}>
            {topic ? <Topic
                isCenter
                className={styles.topic}
                titleText={topic.title}
                titleTag={topic.titleTag}
                descText={topic.description}
            /> : undefined}

            <div className={styles.phones}>
                <img src="/img/trade-screen.png" className={styles.phonesScene} />
                <img src="/img/trade-confirmation-screen.png" className={styles.phonesScene} />
            </div>


            <div className={styles.slider}>
                <Slider {...settings}>
                    {userFeedbacks.map((data: UserFeedback, i: number) => (
                        <div key={i}>
                            <FeedbackCard {...data} />
                        </div>
                    ))}
                </Slider>
            </div>

            <PartnerList className={styles.partners} />
        </Section>
    );
});


function FeedbackCard(props: UserFeedback) {
    return (
        <div className={styles.card}>
            <StarRate rate={props.rate} />
            <p className={styles.cardFeedback}>{props.feedback}</p>
            <h4 className={styles.cardUser}>{props.user}</h4>
        </div>
    );
}
