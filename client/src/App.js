import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { locale, messages } from 'translations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeScreen, GameScreen, SettingsScreen, LoginScreen, LogoutScreen, SignupScreen } from 'screens';
import { PrivateRoute } from 'helpers/security';

const App = (props) => {

  return (
    <IntlProvider locale={locale()} messages={messages()}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={HomeScreen} />

          <Route exact path="/login/" component={LoginScreen} />
          <Route exact path="/signup/" component={SignupScreen} />
          <Route exact path="/logout/" component={LogoutScreen} />

          <PrivateRoute path="/settings/*" component={SettingsScreen} />
          <PrivateRoute exact path="/game/" component={GameScreen} />

        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
