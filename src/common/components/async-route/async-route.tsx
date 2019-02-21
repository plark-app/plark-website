import React from 'react';
import { StaticContext } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { RouteProgress, Spinner } from 'common/components/loaders';

export type AsyncRouteStaticContext = StaticContext & {
    components: Record<string, Promise<React.ComponentType> | React.ComponentType | undefined>;
};

export type AsyncRouteProps = RouteComponentProps<object, AsyncRouteStaticContext> & {
    id: string;
    loadComponent: () => Promise<React.ComponentType>;
};

export default class AsyncRoute extends React.Component<AsyncRouteProps> {
    public state: { component: React.ComponentType | null } = {
        component: null,
    };

    public componentWillMount(): void {
        const { id } = this.props;
        this._handleData(id);
    }

    public render(): JSX.Element {
        const { component: Component } = this.state;

        return (
            <>
                <RouteProgress in={Component === null} />
                <Spinner in={Component === null} />
                {this._renderComponent()}
            </>
        );
    }

    private _renderComponent(): JSX.Element | null {
        const { component: Component } = this.state;
        const { loadComponent, ...props } = this.props;
        if (Component === null) {
            return null;
        }

        return (
            <CSSTransition in={Component !== null} timeout={{ enter: 150, exit: 150 }} classNames="fade">
                <Component {...props} />
            </CSSTransition>
        );
    }

    private async _handleData(key: string): Promise<void> {
        const { staticContext, loadComponent } = this.props;

        if (__isBrowser__) {
            const {
                __initData: { components },
            } = window;

            if (components[key]) {
                // Browser init load
                const component = components[key];
                this.setState({ component });
                components[key] = null;
            } else {
                // Navigate
                const component = await loadComponent();
                this.setState({ component });
            }
        } else {
            if (staticContext === undefined) {
                return;
            }

            const { components } = staticContext;
            const component = components[key];
            if (component) {
                // Server final render
                this.setState({ component });
            } else {
                // Server first render
                components[key] = loadComponent();
            }
        }
    }
}
