import React from 'react';
import { compose } from 'recompose';
import {
    NavLink as RouterNavLink,
    NavLinkProps as RouterNavLinkProps,
    RouteComponentProps,
    withRouter,
} from 'react-router-dom';
import { generateUrl } from 'common/utils/url';

type LocalePathMatch = {
    locale?: string;
};

const NavLinkComponent = (props: NavLinkProps): JSX.Element => {
    const { to, history, match, staticContext, location, title, ...otherProps } = props;

    return (
        <RouterNavLink
            to={generateUrl(to, match.params.locale)}
            title={title || (typeof otherProps.children === 'string' ? otherProps.children : undefined)}
            {...otherProps}
        />
    );
};

export type NavLinkOuterProps = RouterNavLinkProps;
export type NavLinkProps
    = RouteComponentProps<LocalePathMatch>
    & NavLinkOuterProps;

export default compose<NavLinkProps, NavLinkOuterProps>(withRouter)(NavLinkComponent);
