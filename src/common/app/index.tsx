import React from "react";
import Cookie from "js-cookie";
import Axios from "axios";
import { compose } from "recompose";
import { Location } from "history";
import { TransitionGroup } from "react-transition-group";
import { Switch, withRouter, Route, RouteComponentProps } from "react-router";

import { joinUrlWithLocation, normalizeLocalePath } from "common/utils/url";
import { getLocale, getLocaleByShotCode } from "common/utils/locale";
import Head from "common/utils/head";
import {
  MatchProps,
  RouteDescriptor,
  isDefaultLocalePath,
  isAnyLocalePath
} from "common/utils/router";
import { routes } from "common/routes";
import AsyncRoute from "common/components/async-route";

type AppProps = RouteComponentProps<MatchProps>;

class App extends React.Component<AppProps> {
  public componentDidMount(): void {
    this.__checkUserLocale();
  }

  public render(): JSX.Element {
    return (
      <TransitionGroup>
        <MainRouter {...this.props} />
      </TransitionGroup>
    );
  }

  private async __checkUserLocale(): Promise<void> {
    const { location, history } = this.props;

    if (isDefaultLocalePath(location)) {
      return history.replace(normalizeLocalePath(location.pathname));
    }

    const isLocaleSetInPath = isAnyLocalePath(location);
    const userLocale = Cookie.get("user-locale");
    if (userLocale && !isLocaleSetInPath) {
      const { code } = getLocale(userLocale);
      const newPath = joinUrlWithLocation(location.pathname, code);
      return history.replace(newPath);
    }

    try {
      const { data } = await Axios.get("https://ipinfo.io/json");
      const { code } = getLocaleByShotCode(data.country.toLowerCase());

      if (!isLocaleSetInPath) {
        const newPath = joinUrlWithLocation(location.pathname, code);
        history.replace(newPath);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default compose<AppProps, {}>(withRouter)(App);

type MainRouterState = {
  location: Location;
};

class MainRouter extends React.Component<AppProps, MainRouterState> {
  public constructor(props: AppProps) {
    super(props);
    const routerLocation: Location = { ...props.history.location };

    this.state = {
      location: routerLocation
    };
  }

  public componentWillReceiveProps(nextProps: AppProps): void {
    const { location: nextLocation } = nextProps;

    this.setState({ location: nextLocation });
  }

  public render(): JSX.Element {
    const location = this.state.location;

    return (
      <>
        <Switch location={location}>
          {routes.map(
            ({
              id,
              path,
              exact,
              load,
              head,
              getSeoConfig
            }: RouteDescriptor) => (
              <Route
                key={id}
                path={path}
                exact={exact}
                // tslint:disable-next-line:no-any
                render={(props: RouteComponentProps<object, any>) => (
                  <>
                    <Head getSeoConfig={getSeoConfig}>{head}</Head>
                    <AsyncRoute {...props} loadComponent={load} id={id} />
                  </>
                )}
              />
            )
          )}
        </Switch>
      </>
    );
  }
}
