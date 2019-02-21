import React from 'react';
import cn from 'classnames';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TranslateFunction } from 'common/i18n';
import { faApple, faGooglePlay, faChrome, faFirefox, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import UIButton from 'common/components/ui-button';
import { WithUIPopupMenu, UIPopupMenuItem, WithUIPopupMenuRenderProps } from 'common/components/ui-popup-menu';

import styles from './intro.scss';
import * as text from '../home.text';


type DropDownItem = {
    title: TranslateFunction;
    icon: IconDefinition;
    to: string;
};

const items: DropDownItem[] = [
    {
        title: text.download.apple,
        icon: faApple,
        to: 'https://apple.com',
    },
    {
        title: text.download.chrome,
        icon: faChrome,
        to: 'https://apple.com',
    },
    {
        title: text.download.firefox,
        icon: faFirefox,
        to: 'https://apple.com',
    },
];

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
                {items.map((item: any, index: number) => (
                    <UIPopupMenuItem key={index} component="a" href={item.to} target="_blank">
                        <FontAwesomeIcon icon={item.icon} className={styles.platformIcon} />
                        {item.title(i18n)}
                    </UIPopupMenuItem>
                ))}
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
                    <FontAwesomeIcon icon={faChevronDown} className={arrowClass} />
                </UIButton>
            </div>
        );
    };
}

type Props
    = WithTranslationsProps;

export default compose<WithTranslationsProps, any>(withTranslations)(PlatformDropDown);
