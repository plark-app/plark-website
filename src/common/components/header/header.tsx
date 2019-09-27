import React from 'react';
import ReactDOM from 'react-dom';

import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { compose } from 'recompose';
import { useI18n, withTranslations, WithTranslationsProps } from 'slim-i18n';

import { NavLink, StoreBadge } from 'common/components';
import BurgerButton from 'common/components/burger-button';
import withWindow, { WithWindowProps } from 'common/components/with-window';

import PlatformList from 'common/utils/install-platforms';

import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import styles from './header.scss';

type HeaderState = {
    openedMenu: boolean;
};

type HeaderOuterProps = {
    isWhite?: boolean;
};

type HeaderInnerProps = HeaderOuterProps & WithTranslationsProps & WithWindowProps;

class Header extends React.Component<HeaderInnerProps, HeaderState> {
    public state: HeaderState = {
        openedMenu: false,
    };
    public render(): JSX.Element {
        const { isWhite, i18n, dimensions } = this.props;
        const { width } = dimensions;
        return (
            <header id="header" className={cn(styles.header, isWhite && styles.isWhite)}>
                {width < 768 && this._renderMobileMenu()}
                <NavLink to="/">
                    <PlarkLogo height={20} className={styles.headerLogo} />
                </NavLink>
                <nav className={styles.headerNav}>
                    <a href="https://community.plark.io/" className={styles.headerNavUnit}>
                        {i18n.gettext('Community')}
                    </a>
                    <a href="/blog" className={styles.headerNavUnit}>
                        {i18n.gettext('Blog')}
                    </a>
                    <StoreBadge className={styles.headerNavBadge} platform={PlatformList.apple} height={35} />
                </nav>
            </header>
        );
    }

    private _renderMobileMenu = (): JSX.Element | null => {
        const { openedMenu } = this.state;
        return (
            <>
                <BurgerButton opened={openedMenu} className={styles.headerDropdownMenuBtn} onClick={this._toggleMenu} />
                <DropdownMenu opened={openedMenu} />
            </>
        );
    };

    private _toggleMenu = () => {
        this.setState({
            openedMenu: !this.state.openedMenu,
        });
    };
}

type DropdownMenuProps = {
    className?: string;
    opened: boolean;
};

function DropdownMenu({ className, opened }: DropdownMenuProps): JSX.Element | null {
    const i18n = useI18n();
    return ReactDOM.createPortal(
        <CSSTransition in={opened} classNames={'mobile-menu'} timeout={300} unmountOnExit>
            <nav className={cn(styles.headerDropdownMenu, className)}>
                <a href="https://community.plark.io/" className={styles.headerDropdownMenuItem}>
                    {i18n.gettext('Community')}
                </a>
                <a href="/blog" className={styles.headerDropdownMenuItem}>
                    {i18n.gettext('Blog')}
                </a>
            </nav>
        </CSSTransition>,
        document.body,
    );
}

export default compose<HeaderInnerProps, HeaderOuterProps>(
    withTranslations,
    withWindow,
)(Header);
