import React from 'react';
import { map } from 'lodash';
import cn from 'classnames';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';

import Icons from 'common/components/icons';

import InstallPlatformList, { Platform } from 'common/utils/install-platforms';
import UIButton from 'common/components/ui-button';
import { WithUIPopupMenu, UIPopupMenuItem, WithUIPopupMenuRenderProps } from 'common/components/ui-popup-menu';

import styles from './intro.scss';
import * as text from '../home.text';

class PlatformDropDown extends React.PureComponent<Props> {
    public render(): JSX.Element {
        return (
            <WithUIPopupMenu popupContent={this.__renderPopupContent()} placement="bottom">
                {this.__buttonRenderer}
            </WithUIPopupMenu>
        );
    }

    protected __renderPopupContent = () => {
        const { i18n } = this.props;

        return (
            <>
                {map(InstallPlatformList, (item: Platform, key: string) => {
                    const ItemIcon = item.icon;

                    return (
                        <UIPopupMenuItem key={key} component="a" href={item.url} target="_blank">
                            <ItemIcon className={styles.platformIcon} />
                            <span>{text.download[item.key](i18n)}</span>
                        </UIPopupMenuItem>
                    );
                })}
            </>
        );
    };

    protected __buttonRenderer = (popupProps: WithUIPopupMenuRenderProps) => {
        const { i18n } = this.props;

        const arrowClass = cn(styles.platformButtonIcon, popupProps.isOpen ? styles.iActive : undefined);

        return (
            <div ref={popupProps.ref}>
                <UIButton className={styles.platformButton}
                          onClick={popupProps.toggle}
                          mode={popupProps.isOpen ? 'contained' : 'outlined'}
                >
                    {text.platformTitle(i18n)}
                    <Icons.CaretDown className={arrowClass} />
                </UIButton>
            </div>
        );
    };
}

type Props
    = WithTranslationsProps;

export default compose<WithTranslationsProps, any>(withTranslations)(PlatformDropDown);
