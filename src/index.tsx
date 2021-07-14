import * as smoothscroll from 'smoothscroll-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

smoothscroll.polyfill()

ReactDOM.render(<App />, document.getElementById('app'));
