import React from 'react';

export type WithWindowSizeProps = {
    dimensions: {
        width: number;
        height: number;
    };
};


export type WithWindowState = {
    width: number;
    height: number;
};


export function withWindowSize<T extends WithWindowSizeProps>(
    component: React.ComponentType<T>,
): React.ComponentType<T> {
    return function (props: T & WithWindowSizeProps) {
        const dimensions = useDimensions();

        const newProps = {
            ...props,
            dimensions: dimensions,
        };

        return React.createElement<T>(component, newProps);
    };
}


export function useDimensions(): WithWindowState {
    const [dimension, setDimensions] = React.useState<WithWindowState>({ width: 0, height: 0 });

    const updateDimension = React.useCallback(() => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    React.useEffect(() => {
        if (!window) {
            return;
        }

        window.addEventListener('resize', updateDimension);

        return () => {
            window.removeEventListener('resize', updateDimension);
        };
    });

    return dimension;
}
