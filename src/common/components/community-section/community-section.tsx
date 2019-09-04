import React from 'react';
import { Section, UIButton } from '../';
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


export default React.memo(function CommunitySection() {
    const settings: Settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 1,
        cssEase: 'linear',
        centerPadding: '50px',
    };

    return (
        <Section>

            <Slider {...settings}>
                {list.map((item: any, index: number) => {
                    return (
                        <div key={index}>
                            <div className={styles.card}>
                                <div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardContent}>{item.content}</p>
                                </div>

                                <div className={styles.cardBottom}>
                                    <span className={styles.cardTiming}>Update 33 minutes ago</span>

                                    <UIButton isSmall  color="primary" mode="outlined">
                                        Join discussion →
                                    </UIButton>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>

        </Section>
    );
});
