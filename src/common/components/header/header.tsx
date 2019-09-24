import React from 'react';
import cn from 'classnames';
import { useI18n, ITranslationsAdapter, withTranslations } from 'slim-i18n';

import { NavLink, StoreBadge } from 'common/components';
import BurgerButton from 'common/components/burger-button';

import PlatformList from 'common/utils/install-platforms';

import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import styles from './header.scss';

type DropdownMenuProps = {
    className?: string;
};

function DropdownMenu({ className }: DropdownMenuProps): JSX.Element | null {
    const i18n = useI18n();
    return (
        <nav className={cn(styles.dropdownMenu, className)}>
            <a href="https://community.plark.io/" className={styles.dropdownMenuItem}>
                {i18n.gettext('Community')}
            </a>
            <a href="/blog" className={styles.dropdownMenuItem}>
                {i18n.gettext('Blog')}
            </a>
        </nav>
    );
}

type HeaderProps = {
    isWhite?: boolean;
    i18n: ITranslationsAdapter;
};

type HeaderState = {
    openedMenu: boolean;
    windowWidth: number;
};

class Header extends React.Component<HeaderProps, HeaderState> {
    public state: HeaderState = {
        openedMenu: false,
        windowWidth: 1000,
    };

    public componentDidMount(): void {
        this.setState({
            windowWidth: window.innerWidth,
        });
        window.addEventListener('resize', this._resizeHandler);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('resize', this._resizeHandler);
    }

    public render(): JSX.Element {
        const { isWhite, i18n } = this.props;
        return (
            <header id="header" className={cn(styles.header, isWhite && styles.isWhite)}>
                {this._renderMobileMenu()}
                <NavLink to="/">
                    <PlarkLogo height={20} className={styles.headerLogo} />
                </NavLink>
                <nav className={styles.nav}>
                    <a href="https://community.plark.io/" className={styles.navUnit}>
                        {i18n.gettext('Community')}
                    </a>
                    <a href="/blog" className={styles.navUnit}>
                        {i18n.gettext('Blog')}
                    </a>
                    <StoreBadge className={styles.navBadge} platform={PlatformList.apple} height={35} />
                </nav>
            </header>
        );
    }

    private _renderMobileMenu = (): JSX.Element | null => {
        const { windowWidth, openedMenu } = this.state;

        if (windowWidth < 540) {
            return (
                <>
                    <BurgerButton className={styles.dropdownMenuBtn} onClick={this._toggleMenu} />
                    {openedMenu && <DropdownMenu className={cn({ [styles.isOpened]: openedMenu })} />}
                </>
            );
        }
        return null;
    };

    private _resizeHandler = () => {
        if (typeof window !== undefined) {
            this.setState({
                windowWidth: window.innerWidth,
            });
        }
    };

    private _toggleMenu = () => {
        this.setState({
            openedMenu: !this.state.openedMenu,
        });
    };
}

export default withTranslations(Header);
