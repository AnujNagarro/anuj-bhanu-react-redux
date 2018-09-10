// system imports
import React from 'react';
import ReactDOM from 'react-dom';

// CSS imports
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App /> , document.getElementById('root'));
registerServiceWorker();
