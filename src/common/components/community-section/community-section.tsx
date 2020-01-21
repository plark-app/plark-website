import React from 'react';
import { useI18n } from 'slim-i18n';
import { Section, JoinLink } from 'common/components';
import ArrowRightSvg from 'resources/svgs/full-arrow-right.component.svg';
import styles from './community-section.scss';

type CommunityPlatform = {
    url: string;
    image: string;
    alt: string;
    title: string;
};

const communityPlatforms: CommunityPlatform[] = [{
    url: 'https://community.plark.io',
    image: '/img/community/Flarum.svg',
    alt: 'Flarum',
    title: 'Flarum',
}, {
    url: 'https://www.reddit.com/r/plark/',
    image: '/img/community/Reddit.svg',
    alt: 'Reddit',
    title: 'Reddit',
}, {
    url: 'https://www.producthunt.com/posts/plark-crypto-wallet',
    image: '/img/community/ProductHunt.svg',
    alt: 'ProductHunt',
    title: 'ProductHunt',
}];

export const CommunitySection = React.memo(function CommunitySection() {
    const i18n = useI18n();

    return (
        <Section className={styles.section} withLeftPadding flexContent>
            <div className={styles.left}>
                <ArrowRightSvg className={styles.leftArrow} />
            </div>

            <div className={styles.right}>
                <div className={styles.topic}>
                    <h2 className={styles.topicTitle}>
                        {i18n.gettext('Who are you without a tight-knit community?')}
                    </h2>
                    <p className={styles.topicDescription}>
                        {i18n.gettext(
                            'Never, remember, never underestimate the power of same-minded people — it’s a machine of war.  We know it. That’s why we want people to gather around the conviction “Plark is my crypto wallet.” Talk, discuss, solve — we bet, you will find like-minded fellows.\nJoin it or die bookless!',
                        )}
                    </p>
                </div>

                <div className={styles.platforms}>
                    {communityPlatforms.map((plt: CommunityPlatform, index: number) => (
                        <a href={plt.url}
                           target="_blank"
                           key={index}
                           title={plt.title}
                           className={styles.platformsItem}
                        >
                            <img src={plt.image}
                                 title={plt.title}
                                 alt={plt.alt}
                                 className={styles.platformsItemImage}
                            />
                        </a>
                    ))}
                </div>

                <JoinLink href="https://community.plark.io" target="_blank">
                    {i18n.gettext('Join discussion in community')}
                </JoinLink>
            </div>
        </Section>
    );
});
