import React, { Component } from 'react';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/styles/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Your <strong>ReactJS</strong> project is ready!
        <br />
          <br />
          ReactJS Version 16.9.0
        <br />
          <br />
          To get started, edit <code>scripts/app.jsx</code>.
      </p>
        <div className="App-helper">
          <h4>Please read below the instructions before starting your project.</h4>
          <ul>
            <li>Please specify file extension while importing files. Example </li>
            <ul>
              <li>
                <code>import MyComponent from './MyComponent<b>.jsx</b>';</code>
              </li>
              <li>
                <code>import './MyStyles<b>.css</b>';</code>
              </li>
            </ul>
            <li>Only <b>.css</b> files are supported for styling. (.less, .scss etc. are not supported)</li>
            <li>Importing files other than .js and .css are not supported</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
