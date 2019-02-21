import React from 'react';
import { compose } from 'recompose';
import { RouteComponentProps, withRouter } from 'react-router';

import { withTranslations, WithTranslationsProps } from 'slim-i18n';

import * as text from './no-match-text';
import styles from './no-match.scss';

type NoMatchProps = WithTranslationsProps & RouteComponentProps<object, any>;

class NoMatch extends React.Component<NoMatchProps> {
    public componentWillMount(): void {
        const { staticContext } = this.props;
        if (staticContext) {
            staticContext.statusCode = 404;
        }
    }

    public render(): JSX.Element {
        const { i18n } = this.props;
        return (
            <>
                <div className={styles.box}>{text.wentWrong(i18n)}</div>
            </>
        );
    }
}

export default compose<NoMatchProps, object>(
    withTranslations,
    withRouter,
)(NoMatch);
