import React from 'react';
import { Section, Topic, UIButton, JoinLink } from '../';
import styles from './community-section.scss';

import Slider, { Settings } from 'react-slick';

const list: any[] = [{
    title: 'Can I create a private community on Plark?',
    content:
        'You can make your community private so the content would only be accessible to logged in ' +
        'users. Additionally, you can make the registration by invitation, so only invited members ' +
        'can sign up...',
}, {
    title: 'Trible GDPR Complance Statement',
    content:
        'You can make your community private so the content would only be accessible to logged in ' +
        'users. Additionally, you can make the registration by invitation, so only invited members ' +
        'can sign up...',
}, {
    title: 'Transparency is trust',
    content:
        'Plark is open-source and free of charge. We welcome clear-minded people to use our code or ' +
        'contribute to the project.',
}, {
    title: 'Transparency is trust',
    content:
        'Plark is open-source and free of charge. We welcome clear-minded people to use our code or ' +
        'contribute to the project.',
}];


function CommunityTopic(props: any) {
    return <div className={styles.card}>
        <div>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <p className={styles.cardContent}>{props.content}</p>
        </div>

        <div className={styles.cardBottom}>
            <span className={styles.cardTiming}>Update 33 minutes ago</span>

            <UIButton isSmall color="primary" mode="outlined">
                Join discussion →
            </UIButton>
        </div>
    </div>;
}


export default React.memo(function CommunitySection() {
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
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        centerPadding: '50px',
    };

    return (
        <Section>
            <Topic
                isCenter
                titleText="Luckless dictator? Penny-worth Bitcoin? Happy loner?"
                descText={
                    'Who are you without a tight-knit community? Never, remember, never underestimate the ' +
                    'power of same-minded people — it’s a machine of war.'
                }
            />

            <div className={styles.slider}>
                <Slider {...settings}>
                    {list.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <CommunityTopic {...item} />
                            </div>
                        );
                    })}
                </Slider>
            </div>

            <div className={styles.bottom}>
                <p className={styles.bottomText}>
                    We know it. That’s why we want people to gather around the conviction
                    “Plark is my crypto wallet.” Talk, discuss, solve — we bet, you will find like-minded
                    fellows. Join it or die bookless!
                </p>

                <JoinLink href="https://community.plark.io" target="_blank">
                    Join discussion
                </JoinLink>
            </div>

        </Section>
    );
});
