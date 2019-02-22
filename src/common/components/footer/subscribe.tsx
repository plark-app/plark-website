import React, { ChangeEvent, FormEvent } from 'react';
import { compose } from 'recompose';
import { withTranslations, WithTranslationsProps } from 'slim-i18n';
import UIButton from 'common/components/ui-button';
import styles from './footer.scss';

class Subscribe extends React.PureComponent<WithTranslationsProps> {
    public state: any = {
        email: '',
    };

    public render(): JSX.Element {
        const { i18n } = this.props;

        return (
            <form onSubmit={this.__handleFormSubmit} className={styles.subscribe}>
                <h4 className={styles.subscribeTitle}>
                    {i18n.gettext('Stay smart. Subscribe to our newsletter.')}
                </h4>

                <div className={styles.subscribeForm}>
                    <input value={this.state.email} onChange={this.__handleValue} className={styles.subscribeInput} />
                    <UIButton color="primary">{i18n.gettext('Subscribe')}</UIButton>
                </div>
            </form>
        );
    }

    private __handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    private __handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
    };
}

export default compose<WithTranslationsProps, any>(withTranslations)(Subscribe);
