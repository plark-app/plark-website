import React from 'react';
import _ from 'lodash';
import cn from 'classnames';
import { Col, Row } from 'reactstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import PlatformList from 'common/utils/install-platforms';
import { NavLink, BurgerButton, withWindowSize, WithWindowSizeProps } from 'common/components';
import PlarkLogo from 'resources/svgs/plark-logo.component.svg';
import { DropdownMenu } from './dropdown-menu';
import styles from './header.scss';

type HeaderState = {
    openedMenu: boolean;
    scrolled: boolean;
    colorClass: string;
};

type HeaderOuterProps = {
    isWhite?: boolean;
    showLabel?: boolean;
};

type HeaderInnerProps
    = HeaderOuterProps
    & WithTranslationsProps
    & RouteComponentProps<any>
    & WithWindowSizeProps;

class Header extends React.Component<HeaderInnerProps, HeaderState> {
    public state: HeaderState = {
        openedMenu: false,
        scrolled: false,
        colorClass: styles.isWhite,
    };

    protected darkSections?: HTMLCollectionOf<Element>;
    protected historyListener?: () => void;

    public componentDidMount(): void {
        if (__isBrowser__) {
            this.historyListener = this.props.history.listen(this.__onChangeHistory);
            document.addEventListener('scroll', this._handleScroll);
            this.darkSections = document.getElementsByClassName('dark-section');
        }
    }

    public componentWillUnmount(): void {
        document.removeEventListener('scroll', this._handleScroll);
        if (this.historyListener) {
            this.historyListener();
            delete this.historyListener;
        }
    }

    public render(): JSX.Element {
        const { i18n } = this.props;
        const { scrolled, openedMenu } = this.state;

        const headerClassName = cn(
            styles.header,
            this.state.colorClass,
            scrolled && styles.isScrolled,
        );

        const sidenavClassName = cn(
            styles.sidenav,
            this.state.colorClass,
        );

        const appstore = PlatformList.apple;

        return (
            <>
                <header id="header" className={headerClassName}>
                    <div className={styles.headerSection}>
                        <Row className={styles.headerRow}>
                            <Col xs={5} lg={3} className={styles.headerLeft}>
                                <BurgerButton opened={openedMenu}
                                              className={styles.dropdownMenuBtn}
                                              onClick={this._toggleMenu}
                                />

                                <NavLink to="/">
                                    <PlarkLogo height={20} className={styles.headerLogo} />
                                </NavLink>
                            </Col>

                            <Col className={styles.headerCenterLabel} sm={2} md={4} lg={2}>
                                {i18n.gettext(`Ukrainian developing company\nwith Blockchain-based solutions`)}
                            </Col>

                            <Col className={styles.headerNav} xs={5} lg={3}>
                                <a href={appstore.url} className={cn(styles.headerAppstore, 'arrow-link')} rel="nofollow">
                                     Available on App Store
                                </a>
                            </Col>
                        </Row>

                        <DropdownMenu opened={openedMenu} triggerClose={this._toggleMenu} />
                    </div>
                </header>

                <nav className={sidenavClassName}>
                    <a href="https://community.plark.io" className={styles.sidenavUnit}>
                        {i18n.gettext('Community')}
                    </a>
                    <a href="https://plark.io/blog" className={styles.sidenavUnit}>
                        {i18n.gettext('Blog')}
                    </a>
                    <a href="https://t.me/PlarkWalletSupport" className={styles.sidenavUnit}>
                        {i18n.gettext('Support')}
                    </a>
                </nav>
            </>
        );
    }

    private __onChangeHistory = (): void => {
        this.setState({
            colorClass: styles.isWhite,
        });

        delete this.darkSections;
        this.darkSections = document.getElementsByClassName('dark-section');
    };

    private _toggleMenu = () => {
        this.setState({
            openedMenu: !this.state.openedMenu,
        });
    };

    private _handleScroll = (): void => {
        if (typeof window === undefined) {
            return;
        }

        this.setState({
            scrolled: window.scrollY > 100,
        });

        if (this.darkSections && this.darkSections.length >= 1) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            let newColorClass: string = styles.isWhite;

            const offset = 100;
            _.forEach(this.darkSections, (el: any) => {
                const top = el.offsetTop;
                const height = el.clientHeight;

                if (scrollTop + offset >= top && scrollTop - offset <= top + height) {
                    if (el.classList.contains('dark-section')) {
                        newColorClass = styles.isBlack;
                    } else {
                        newColorClass = styles.isWhite;
                    }
                }
            });

            this.setState({ colorClass: newColorClass });
        }
    };
}


export default compose<HeaderInnerProps, HeaderOuterProps>(
    withTranslations,
    withRouter,
    withWindowSize,
)(Header);
