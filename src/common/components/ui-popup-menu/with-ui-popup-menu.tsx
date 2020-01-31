import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { compose } from 'recompose';
import { CSSTransition } from 'react-transition-group';
import { toggable, ToggableState, ToggableHandlers } from '../../utils/toggable';
import { UIPopupMenu } from './ui-popup-menu';

export type WithUIPopupMenuProps = {
    className?: string;
    popupContent: React.ReactNode;
    children: (props: WithUIPopupMenuRenderProps) => React.ReactNode;
    placement?: 'top' | 'bottom' | 'right' | 'left';
    style?: CSSProperties;
};

export type WithUIPopupMenuRenderProps = {
    isOpen: boolean;
    toggle: () => void;
    // tslint:disable-next-line:no-any
    ref: React.RefObject<any>;
};

export type WithUIPopupMenuState = {
    position: CSSProperties;
};

export const enum Constants {
    TransitionDuration = 300,
    ArrowSize = 5,
}

type ComponentProps
    = WithUIPopupMenuProps
    & ToggableState
    & ToggableHandlers;

export const WithUIPopupMenu = compose<ComponentProps, WithUIPopupMenuProps>(toggable)(
    class extends React.Component<ComponentProps> {
        public state: WithUIPopupMenuState = {
            position: {},
        };

        // tslint:disable-next-line:no-any
        private _triggerRef: React.RefObject<any> = React.createRef();
        private _popupRef: React.RefObject<HTMLDivElement> = React.createRef();

        public componentWillUnmount(): void {
            document.removeEventListener('click', this._closePopupMenu);
        }

        public render(): JSX.Element {
            const { children, isOpen, className, popupContent, placement = 'bottom' } = this.props;
            const cssTransactionProps = {
                in: isOpen,
                timeout: Constants.TransitionDuration,
                mountOnEnter: true,
                unmountOnExit: true,
                classNames: 'popup-menu-animation',
                onEnter: this._calculatePopupPosition,
            };

            return (
                <>
                    {children({ toggle: this._toggle, ref: this._triggerRef, isOpen: isOpen })}

                    {/* tslint:disable-next-line:no-typeof-undefined */}
                    {typeof document !== 'undefined' && (
                        ReactDOM.createPortal(
                            <CSSTransition {...cssTransactionProps}>
                                <UIPopupMenu
                                    ref={this._popupRef}
                                    placement={placement}
                                    className={className}
                                    style={this.state.position}
                                >
                                    {popupContent}
                                </UIPopupMenu>
                            </CSSTransition>,
                            document.body,
                        )
                    )}
                </>
            );
        }

        private _toggle = () => {
            const { isOpen } = this.props;

            if (!isOpen) {
                this._openPopupMenu();
                document.addEventListener('click', this._closePopupMenu, { once: true, passive: true });
            } else {
                this._closePopupMenu();
                document.removeEventListener('click', this._closePopupMenu);
            }
        };

        private _openPopupMenu = () => this.props.setIsOpen(true);
        private _closePopupMenu = () => this.props.setIsOpen(false);

        // TODO: Add window resize handling
        private _calculatePopupPosition = (): void => {
            const { current: toggleTriggerEl } = this._triggerRef;
            const { current: popupEl } = this._popupRef;

            if (toggleTriggerEl === null || popupEl === null) {
                return;
            }

            const { placement = 'bottom' } = this.props;
            const {
                top: triggerTop,
                bottom: triggerBottom,
                left: triggerLeft,
                right: triggerRight,
                width: triggerWidth,
            } = toggleTriggerEl.getBoundingClientRect();

            const popupWidth = triggerRight - triggerLeft;
            const { height: popupHeight } = popupEl.getBoundingClientRect();

            switch (placement) {
                case 'top':
                    return this._updatePosition({
                        position: 'fixed',
                        width: popupWidth,
                        left: triggerLeft + triggerWidth,
                        top: triggerTop - popupHeight - Constants.ArrowSize,
                    });
                case 'bottom':
                    return this._updatePosition({
                        position: 'fixed',
                        width: popupWidth,
                        left: triggerRight - popupWidth,
                        top: triggerBottom + Constants.ArrowSize,
                    });
                default:
                    return;
            }
        };

        private _updatePosition = (position: CSSProperties) => {
            this.setState({ position });
        };
    },
);
