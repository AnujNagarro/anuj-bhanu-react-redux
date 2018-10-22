// system imports
import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Store from './store';
ReactDOM.render(
      <Provider store={Store}>
         <HashRouter>
            <App />
         </HashRouter>
      </Provider>
       , document.getElementById('root'));
registerServiceWorker();
