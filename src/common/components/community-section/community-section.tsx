import React from 'react';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import cn from 'classnames';
import { Section } from 'common/components';
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

export const CommunitySection = React.memo(function CommunitySection(props: CommonSection) {
    const i18n = useI18n();

    return (
        <Section id={props.id} withLeftPadding flexContent>
            <Col className={styles.left} xs={3} lg={3}>
                <ArrowRightSvg className={styles.leftArrow} />
            </Col>

            <Col className={styles.right} lg={{ size: 6, offset: 1 }}>
                <div className={styles.topic}>
                    <h2 className={styles.topicTitle}>
                        {i18n.gettext('Plark crypto community is just\ntwo clicks away from you.')}
                    </h2>
                    <p className={styles.topicDescription}>
                        {i18n.gettext('Join Plarkians to debate over the future of cryptocurrencies, get early access to new Plark features, find useful stuff, or just talk to a bunch of single-minded people.')}
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

                <a href="https://community.plark.io" target="_blank" className={cn(styles.link, 'arrow-link')}>
                    {i18n.gettext('Join discussion in community')}
                </a>
            </Col>
        </Section>
    );
});
