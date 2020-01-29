import React from 'react';
import {
    Footer,
    Header,
    StickIphone,
    IntroSection,
    BgTitleSection,
    SubscribeSection,
    ColumnsSection,
    OpenSourceSection,
    FeatureSection,
    FeedbackSection,
    DarkCardSection,
} from 'common/components';
import { useI18n } from 'slim-i18n';

export default function AndroidWallet(): JSX.Element {
    const i18n = useI18n();

    return (
        <>
            <Header isWhite />

            <StickIphone
                picture={{
                    src: '/img/interfaces/PlarkScreen-dashboard.png',
                    alt: 'multi cryptocurrency mobile wallet',
                    title: 'cryptocurrency mobile wallet',
                }}
            >
                <IntroSection
                    title={i18n.gettext('Crypto wallet made easy')}
                    subtitle={i18n.gettext('Just the friendliest crypto currency wallet you will use.')}
                />

                <BgTitleSection
                    title={i18n.gettext('Quick start')}
                    content={i18n.gettext(
                        'For real. No regular registration is needed. It will take you about 30 seconds to get in. No need to provide us with your name, phone number or even email. It’s all about maximizing user’s convenience and positive experience.',
                    )}
                />

                <BgTitleSection
                    title={i18n.gettext('No accounts')}
                    content={i18n.gettext(
                        'A few clicks and you are ready to go. Thanks to different blockchain nodes, that are the basis for Plark performance, we don’t need your personal data such as name, phone number, or email. Your sole key is a 12-word backup phrase.',
                    )}
                />
            </StickIphone>

            <ColumnsSection
                topic={{
                    titleTag: 'h2',
                    title: i18n.gettext('"Do we think Plark is the best crypto wallet for Android? Better you say."'),
                    description: i18n.gettext('— Plark Team'),
                }}
                texts={[
                    {
                        title: i18n.gettext('Privacy is important.'),
                        content: i18n.gettext(
                            'Plark fully encrypts all the high-priority information — transactions data, private keys, etc. All the essential things stored on your device and nobody has access to them, except you.',
                        ),
                    },
                    {
                        title: i18n.gettext('Portable exchange.'),
                        content: i18n.gettext(
                            'Now you can trade among Bitcoin, Ethereum, Litecoin, and Dash right in the application. We hold the most advantageous cross-rates, while continuously adding new cryptocurrencies, primarily the most popular and usable.',
                        ),
                    },
                    {
                        title: i18n.gettext('Crypto is simple.'),
                        content: i18n.gettext(
                            'Why do you need this all technical details, that don’t help you at all? We at Plark think the same way. That’s why you won’t find anything distracting.',
                        ),
                    },
                ]}
            />

            <DarkCardSection
                title={i18n.gettext('Buy and sell crypto with a credit card.')}
                description={i18n.gettext(
                    'Forget about an old-fashioned multi-step registration procedure. To make entry experience the smoothest, it could be, Plark allows you to buy and sell crypto with your credit or debit card directly through the app.',
                )}
            />

            <FeatureSection
                text={i18n.gettext(
                    'Our team thinks Plark is the best-looking Android crypto wallet. A lot of companies underestimate the power of kicky design. Well, we don’t. That’s why Plark for Android will be perfectly shaped like a jewel. You will get back to it every time to delight its simplicity and elegance.',
                )}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <FeatureSection
                isLtr
                text={i18n.gettext(
                    'The educational aspect is crucial. No matter if you are experienced one or not — there is always something new to learn. We’ve prepared Help Center and FAQ at your disposal, while our 24/7 Support is always open for you to ask or suggest.',
                )}
                image={{
                    src: '/img/trade-confirmation-screen.png',
                    alt: 'best mobile cryptocurrency wallet',
                    title: 'best mobile wallet for cryptocurrency',
                }}
            />

            <FeatureSection
                text={i18n.gettext(
                    'You may adjust the transaction speed through setting up the mining fee size. It allows you to proceed with transaction faster or slower by paying more or less, according to your current needs.',
                )}
                image={{
                    src: '/img/trade-screen.png',
                    alt: 'best mobile wallet for cryptocurrency',
                    title: 'mobile wallet for cryptocurrency',
                }}
            />

            <OpenSourceSection
                title={i18n.gettext('Fully open-source')}
                description={i18n.gettext(
                    'Visit Plark’s page at GitHub since our project is completely open-source. We truly believe there are clear-minded people all around, so don’t hesitate to use our groundwork to make the world better.',
                )}
            />

            <FeedbackSection />

            <SubscribeSection />
            <Footer />
        </>
    );
}
