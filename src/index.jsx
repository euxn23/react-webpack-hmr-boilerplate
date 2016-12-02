'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app-component';

// Assets
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./style.less');


ReactDOM.render(
  <App />,
  document.querySelector('#app')
);

if (module.hot) {
  module.hot.accept('./app-component', () => {
    const NextApp = require('./app-component').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('#app')
    );
  });
}
