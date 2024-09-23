import React from 'react';

import './App.css';

import logo from './icons/logo.svg';
import Test from './components/Test'

export default class App extends React.Component {
  render() {
    return (
      <div className="app" role="main">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
            Edit <code>src/app.tsx</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Test />
          </a>
        </header>
      </div>
    );
  }
}
