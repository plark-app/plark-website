import React from 'react';
import cn from 'classnames';
import { useI18n, ITranslationsAdapter, withTranslations } from 'slim-i18n';
import PlatformList from 'common/utils/install-platforms';
import { NavLink, StoreBadge } from 'common/components';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';

import styles from './header.scss';
import BurgerIcon from '../burger-icon/burger-icon';
import ReactDOM from 'react-dom';
import CloseButton from '../close-button/close-button';

type DropdownMenuProps = {
    className?: string;
};

function DropdownMenu({ className }: DropdownMenuProps): JSX.Element | null {
    const i18n = useI18n();
    return ReactDOM.createPortal(
        <nav className={cn(styles.dropdownMenu, className)}>
            <a href="https://community.plark.io/" className={styles.dropdownMenuItem}>
                {i18n.gettext('Community')}
            </a>
            <a href="/blog" className={styles.dropdownMenuItem}>
                {i18n.gettext('Blog')}
            </a>
        </nav>,
        document.body,
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
        const { openedMenu, windowWidth } = this.state;
        const renderMobileMenu = windowWidth < 540 && openedMenu;
        return (
            <header id="header" className={cn(styles.header, isWhite && styles.isWhite)}>
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
                    {renderMobileMenu ? (
                        <CloseButton className={styles.navMenuBtn} onClick={this._toggleMenu} />
                    ) : (
                        <BurgerIcon className={styles.navMenuBtn} onClick={this._toggleMenu} />
                    )}
                    {renderMobileMenu && <DropdownMenu />}
                </nav>
            </header>
        );
    }

    private _resizeHandler = () => {
        if (typeof window !== undefined) {
            this.setState({
                windowWidth: window.innerWidth,
            });
        }
    };

    private _toggleMenu = () => {
        console.log(this.state.openedMenu);
        this.setState({
            openedMenu: !this.state.openedMenu,
        });
    };
}

export default withTranslations(Header);
