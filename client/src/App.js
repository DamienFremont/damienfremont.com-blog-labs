import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { locale, messages } from 'translations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeScreen, GameScreen, SettingsScreen, LoginScreen, LogoutScreen, SignupScreen } from 'screens';
import { PrivateRoute, PublicRoute } from 'helpers/auth';

const App = (props) => {

  return (
    <IntlProvider locale={locale()} messages={messages()}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={HomeScreen} />

          <PublicRoute path="/login/" component={LoginScreen} exact restricted={true} />
          <PublicRoute path="/signup/" component={SignupScreen} exact restricted={true} />
          <PrivateRoute path="/logout/" component={LogoutScreen} exact />

          <PrivateRoute path="/settings/*" component={SettingsScreen} />
          <PrivateRoute path="/game/" component={GameScreen} exact />

        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
