import React from 'react';
import logo from './logo.svg';
import './App.css';
import StatusApi from './status-api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    };
  }

  componentDidMount() {
    StatusApi.get()
      .then(res => this.setState({ response: res.status }))
      .catch(err => this.setState({ response: "error" }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br />
            state: {this.state.response}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>

      </div>
    );
  }
}

export default App;
