import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { locale, messages } from './translations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, GamePage, SettingsPage, LoginPage, LogoutPage } from './pages';
import { PrivateRoute } from './helper/security';

const App = (props) => {

  const isLoggedIn = () => true;

  return (
    <IntlProvider locale={locale()} messages={messages()}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={HomePage} />

          <Route exact path="/login/" component={LoginPage} />
          <Route exact path="/signup/" component={LoginPage} />
          <Route exact path="/logout/" component={LogoutPage} />

          <PrivateRoute path="/settings/*" component={SettingsPage} />
          <PrivateRoute exact path="/game/" component={GamePage} />

        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
