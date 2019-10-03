// Please do not delete or rename index.jsx , if you do please update in config.js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';

const Root = () => {
  return (
    <div className="App">
      <App />
    </div>
  );
}
ReactDOM.render(<Root />, document.getElementById('app'));
