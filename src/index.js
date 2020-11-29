import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route exact to="/calculator" component={App} />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);
