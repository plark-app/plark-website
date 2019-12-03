import React from 'react';

export type WithWindowProps = {
    dimensions: {
        width: number;
        height: number;
    };
};

export type WithWindowState = {
    width: number;
    height: number;
};

export function withWindow<T extends WithWindowProps>(
    component: React.ComponentType<T>,
): React.ComponentType<T> {
    return class extends React.Component<T & WithWindowProps, WithWindowState> {
        public componentDidMount(): void {
            if (typeof window !== undefined) {
                this.setState({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener('resize', this._handleResize);
        }

        public componentWillUnmount(): void {
            window.removeEventListener('resize', this._handleResize);
        }

        public render(): JSX.Element {
            return <>{React.createElement<T>(component, { ...this.props, dimensions: { ...this.state } })}</>;
        }

        private _handleResize = () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
    };
}
