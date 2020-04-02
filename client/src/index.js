import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { IntlProvider } from 'react-intl';
import messages_fr from "./translations/fr.json";

const messages = {
  'fr': messages_fr
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App
        statusInterval={1} />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
