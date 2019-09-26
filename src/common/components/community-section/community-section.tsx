import React from 'react';
import { Section, Topic, UIButton, JoinLink } from '../';
import styles from './community-section.scss';

import Slider, { Settings } from 'react-slick';
import { useI18n } from 'slim-i18n';

const list: any[] = [
    {
        title: 'Can I create a private community on Plark?',
        content:
            'You can make your community private so the content would only be accessible to logged in ' +
            'users. Additionally, you can make the registration by invitation, so only invited members ' +
            'can sign up...',
    },
    {
        title: 'Trible GDPR Complance Statement',
        content:
            'You can make your community private so the content would only be accessible to logged in ' +
            'users. Additionally, you can make the registration by invitation, so only invited members ' +
            'can sign up...',
    },
    {
        title: 'Transparency is trust',
        content:
            'Plark is open-source and free of charge. We welcome clear-minded people to use our code or ' +
            'contribute to the project.',
    },
    {
        title: 'Transparency is trust',
        content:
            'Plark is open-source and free of charge. We welcome clear-minded people to use our code or ' +
            'contribute to the project.',
    },
];

function CommunityTopic(props: any) {
    const i18n = useI18n();
    return (
        <div className={styles.card}>
            <div>
                <h3 className={styles.cardTitle}>{props.title}</h3>
                <p className={styles.cardContent}>{props.content}</p>
            </div>

            <div className={styles.cardBottom}>
                <span className={styles.cardTiming}>{i18n.gettext('Update 33 minutes ago')}</span>

                <UIButton
                    isSmall
                    color="primary"
                    mode="outlined"
                    component="a"
                    href="https://community.plark.io"
                    target="_blank"
                    title={props.title}
                    className={styles.cardButton}
                >
                    {i18n.gettext('Join discussion')}&nbsp;→
                </UIButton>
            </div>
        </div>
    );
}

export default React.memo(function CommunitySection() {
    const i18n = useI18n();

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
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        centerPadding: '20px',
    };

    return (
        <Section className={styles.section}>
            <Topic
                isCenter
                titleText={i18n.gettext('Luckless dictator? Penny-worth Bitcoin? Happy loner?')}
                descText={i18n.gettext(
                    'Who are you without a tight-knit community? Never, remember, never underestimate the power of same-minded people — it’s a machine of war.',
                )}
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
                    {i18n.gettext(
                        'We know it. That’s why we want people to gather around the conviction “Plark is my crypto wallet.” Talk, discuss, solve — we bet, you will find like-minded fellows. Join it or die bookless!',
                    )}
                </p>

                <JoinLink href="https://community.plark.io" target="_blank">
                    {i18n.gettext('Join discussion')}
                </JoinLink>
            </div>
        </Section>
    );
});
