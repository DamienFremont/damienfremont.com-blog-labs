import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamePage from 'pages/GamePage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ExitPage from 'pages/ExitPage';

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login/" component={LoginPage} />
        <Route exact path="/game/" component={GamePage} />
        <Route exact path="/exit/" component={ExitPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
