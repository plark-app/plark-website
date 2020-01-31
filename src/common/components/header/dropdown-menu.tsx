import React, { MouseEvent } from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { __, TranslateFunction } from 'common/i18n';
import { Col } from 'reactstrap';
import { useI18n } from 'slim-i18n';
import { CSSTransition } from 'react-transition-group';
import { AppStoreLink, Section, Socials } from 'common/components';
import { DropdownMenuRightContent } from './dropdown-menu-right-content';
import styles from './header.scss';

export type DropdownMenuProps = {
    className?: string;
    opened: boolean;
    triggerClose?: () => void;
};


type MenuElement = {
    key: string;
    name: TranslateFunction;
};

const mainMenuElements: MenuElement[] = [{
    key: 'home',
    name: __('Home'),
}, {
    key: 'history',
    name: __('History'),
}, {
    key: 'features',
    name: __('Features'),
}, {
    key: 'credit-card',
    name: __('Credit card'),
}, {
    key: 'community',
    name: __('Community'),
}, {
    key: 'contacts',
    name: __('Contacts'),
}];

export function DropdownMenu(props: DropdownMenuProps): JSX.Element {
    const { className, opened, triggerClose } = props;
    const i18n = useI18n();

    const onClickMenuItem = React.useCallback((_event: MouseEvent<HTMLElement>) => {
        triggerClose && triggerClose();

        const key = (_event.currentTarget as HTMLElement).getAttribute('custom-scroll-to');

        if (key) {
            const scrollToElement = document.getElementById(key);
            if (scrollToElement) {
                _event.preventDefault();
                scrollTo(scrollToElement, {
                    maxDuration: 800,
                });
            }
        }
    }, []);

    if (!__isBrowser__) {
        return <div className={styles.dmDummy} />;
    }

    return (
        <CSSTransition in={opened} classNames={'mobile-menu'} timeout={{ enter: 500, exit: 300 }} unmountOnExit>
            <Section
                className={cn(styles.dm, className)}
                contentClassName={styles.dmContent}
                outerContent={<div className={styles.dmDarkSide} />}
            >
                <Col className={styles.dmNav} lg={5} sm={8}>
                    {mainMenuElements.map((elem: MenuElement, index: number) => (
                        <div className={styles.dmItem} key={elem.key}>
                            <a href={`/#${elem.key}`}
                               onClick={onClickMenuItem}
                               className={styles.dmItemLink}
                               custom-scroll-to={elem.key}
                            >
                                <span className={styles.dmItemIndex}>0{index + 1}</span>
                                <span className={styles.dmItemText}>{elem.name(i18n)}</span>
                            </a>
                        </div>
                    ))}


                    <AppStoreLink className={styles.dmNavDownload} />
                </Col>

                <DropdownMenuRightContent />

                <span className={styles.dmCopyright}>all rights reserved 2020 © plark</span>

                <Socials
                    titleMode
                    className={styles.dmSocial}
                />
            </Section>
        </CSSTransition>
    );
}
