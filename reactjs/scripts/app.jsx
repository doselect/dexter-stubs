// Good luck!
import React from 'react';
import ReactDOM from 'react-dom';

import { Hello } from './hello.jsx';

class App extends React.Component {

  render() {
    return (
      <div className="App">
      	<Hello/>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));