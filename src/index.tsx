import * as smoothscroll from 'smoothscroll-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import MainContextProvider from './providers/mainProvider'

smoothscroll.polyfill()

ReactDOM.render((
  <MainContextProvider>
    <App />
  </MainContextProvider>
), document.getElementById('app'));
