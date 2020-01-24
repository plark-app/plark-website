import React, { MouseEvent } from 'react';
import cn from 'classnames';
import scrollTo from 'animated-scroll-to';
import { __, TranslateFunction } from 'common/i18n';
import { useI18n } from 'slim-i18n';
import { CSSTransition } from 'react-transition-group';
import { Section } from 'common/components';
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
    key: 'history',
    name: __('History'),
}, {
    key: 'features',
    name: __('Features'),
}, {
    key: 'team',
    name: __('Team'),
}, {
    key: 'credit-card',
    name: __('Credit card'),
}, {
    key: 'security',
    name: __('Security'),
}, {
    key: 'testimonials',
    name: __('Testimonials'),
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

        const key = (_event.target as HTMLElement).getAttribute('custom-scroll-to');

        if (key) {
            const scrollToElement = document.getElementById(key);
            if (scrollToElement) {
                _event.preventDefault();
                scrollTo(scrollToElement);
            }
        }
    }, []);

    if (!__isBrowser__) {
        return <div className={styles.dropdownMenuDummy} />;
    }

    return (
        <CSSTransition in={opened} classNames={'mobile-menu'} timeout={{ enter: 500, exit: 300 }} unmountOnExit>
            <Section withLeftPadding
                     className={cn(styles.dropdownMenu, className)}
                     contentClassName={styles.dropdownMenuContent}
            >
                <nav className={styles.dropdownMenuNav}>
                    {mainMenuElements.map((elem: MenuElement) => (
                        <div className={styles.dropdownMenuItem} key={elem.key}>
                            <a href={`/#${elem.key}`} onClick={onClickMenuItem} custom-scroll-to={elem.key}>
                                {elem.name(i18n)}
                            </a>
                        </div>
                    ))}
                </nav>
            </Section>
        </CSSTransition>
    );
}
