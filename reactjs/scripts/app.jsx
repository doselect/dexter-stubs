// Please do not delete or rename app.jsx , if you do please update in config.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Hello/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
