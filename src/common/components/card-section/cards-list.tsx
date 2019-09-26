import React from 'react';
import classnames from 'classnames';

import VisaSvg from 'resources/svgs/cards/visa.component.svg';
import MasterCardSvg from 'resources/svgs/cards/mastercard.component.svg';
import AmExpress from 'resources/svgs/cards/amexpress.component.svg';
import DinersClubSvg from '../resources/svgs/cards/dinersclub.component.svg';
import DiscoverSvg from 'resources/svgs/cards/discover.component.svg';
import JCBSvg from 'resources/svgs/cards/jcb.component.svg';
import UnionSvg from 'resources/svgs/cards/union.component.svg';

import styles from './card-list.scss';

type Card = {
    name: string;
    svg: React.ComponentType;
};

const cardsList: Card[] = [
    {
        name: 'visa',
        svg: VisaSvg,
    },
    {
        name: 'mastercard',
        svg: MasterCardSvg,
    },
    {
        name: 'American Express',
        svg: AmExpress,
    },
    {
        name: 'Card',
        svg: DinersClubSvg,
    },
    {
        name: 'Discover card',
        svg: DiscoverSvg,
    },
    {
        name: 'JCB Card',
        svg: JCBSvg,
    },
    {
        name: 'Union Card',
        svg: UnionSvg,
    },
];

type CardsListProps = {
    className?: string;
    itemClassName?: string;
};

export function CardsList(props: CardsListProps): JSX.Element {
    return (
        <ul className={classnames(styles.cardList, props.className)}>
            {cardsList.map((card: Card) => {
                return (
                    <li className={classnames(styles.cardListItem, props.itemClassName)} key={card.name}>
                        {React.createElement<any>(card.svg)}
                    </li>
                );
            })}
        </ul>
    );
}
