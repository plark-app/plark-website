import "babel-polyfill";

import createBrowserHistory from "history/createBrowserHistory";
import { requestIdleCallback } from "idle-callback";
import App from "common/app";
import I18N from "common/i18n";
import { render } from "./render";

(async () => {
  const rootElement = document.getElementById("app");
  // const currentPath = window.location.pathname;

  // handle i18n language init
  const i18nInstance = new I18N();
  await i18nInstance.setLanguage("en-us");

  // handle navigation change language
  const history = createBrowserHistory();

  i18nInstance.onLanguageChanged(() => {
    requestIdleCallback(() =>
      render({
        rootElement: rootElement,
        history: history,
        i18n: i18nInstance.getI18n(),
        AppComponent: App
      })
    );
  });

  render({
    rootElement: rootElement,
    history: history,
    i18n: i18nInstance.getI18n(),
    AppComponent: App
  });
})();
