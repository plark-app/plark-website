import React from 'react';
import cn from 'classnames';

import VisaSvg from 'resources/svgs/cards/visa.component.svg';
import MasterCardSvg from 'resources/svgs/cards/mastercard.component.svg';

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
    }
];

type CardsListProps = {
    className?: string;
    itemClassName?: string;
};

export function CardsList(props: CardsListProps): JSX.Element {
    return (
        <ul className={cn(styles.cardList, props.className)}>
            {cardsList.map((card: Card) => {
                return (
                    <li className={cn(styles.cardListItem, props.itemClassName)} key={card.name}>
                        {React.createElement<any>(card.svg)}
                    </li>
                );
            })}
        </ul>
    );
}
