import React from 'react';
import cn from 'classnames';
import { useI18n } from 'slim-i18n';
import Topic from 'common/components/topic';
import * as text from './about-plark.text';

import styles from './about-plark.scss';

type FeatureProps = {
    index: number;
};

export default (props: FeatureProps) => {
    const i18n = useI18n();

    const data = text.featureList[props.index];

    return (
        <Topic className={cn(styles.featuresSideItem)}
               titleText={data.title(i18n)}
               descText={data.desc(i18n)}
               isSmall
               titleTag="h3"
        />
    );
};
