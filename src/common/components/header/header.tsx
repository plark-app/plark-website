import React from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { compose } from 'recompose';
import { useI18n, withTranslations, WithTranslationsProps } from 'slim-i18n';
import PlatformList from 'common/utils/install-platforms';
import { NavLink, BurgerButton, withWindow, WithWindowProps, Row, Col } from 'common/components';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import styles from './header.scss';

type HeaderState = {
    openedMenu: boolean;
    scrolled: boolean;
};

type HeaderOuterProps = {
    isWhite?: boolean;
};

type HeaderInnerProps = HeaderOuterProps & WithTranslationsProps & WithWindowProps;

class Header extends React.Component<HeaderInnerProps, HeaderState> {
    public state: HeaderState = {
        openedMenu: false,
        scrolled: false,
    };

    public componentDidMount(): void {
        document.addEventListener('scroll', this._handleScroll);
    }

    public componentWillUnmount(): void {
        document.removeEventListener('scroll', this._handleScroll);
    }

    public render(): JSX.Element {
        const { isWhite, i18n, dimensions } = this.props;
        const { width } = dimensions;
        const { scrolled } = this.state;

        const headerClassName = cn(
            styles.header,
            isWhite && styles.isWhite,
            scrolled && styles.isScrolled,
        );

        const appstore = PlatformList.apple;

        return (
            <>
                <header id="header" className={headerClassName}>
                    <Row className={styles.headerSection}>
                        {width < 768 && this._renderMobileMenu()}
                        <NavLink to="/">
                            <PlarkLogo height={20} className={styles.headerLogo} />
                        </NavLink>

                        <Col className={styles.headerCenterLabel}>
                            {`An independent brand experience\nstudio based in Kiev`}
                        </Col>

                        <nav className={styles.headerNav}>
                            <a href={appstore.url} className={styles.headerAppstore}>
                                 Available on the App Store →
                            </a>
                        </nav>
                    </Row>
                </header>

                <nav className={styles.sidenav}>
                    <a href="https://t.me/PlarkWalletSupport" className={styles.sidenavUnit}>
                        {i18n.gettext('Support')}
                    </a>
                    <a href="/blog" className={styles.sidenavUnit}>
                        {i18n.gettext('Blog')}
                    </a>
                    <a href="https://community.plark.io" className={styles.sidenavUnit}>
                        {i18n.gettext('Community')}
                    </a>
                </nav>
            </>
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
    private _handleScroll = (): void => {
        if (typeof window !== undefined) {
            this.setState({
                scrolled: window.scrollY > 100,
            });
        }
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
