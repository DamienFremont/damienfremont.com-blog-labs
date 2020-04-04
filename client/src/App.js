import React from 'react';
import './App.css';
import { IntlProvider } from 'react-intl';
import { usersLocale, translationsForUsersLocale } from './translations';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ExitPage from 'pages/ExitPage';
import GamePage from 'pages/GamePage';

const App = (props) => {

  return (
    <IntlProvider locale={usersLocale()} messages={translationsForUsersLocale()}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/login/" component={LoginPage} />
          <Route exact path="/game/" component={GamePage} />
          <Route exact path="/exit/" component={ExitPage} />
        </Switch>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
