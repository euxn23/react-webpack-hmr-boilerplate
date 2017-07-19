'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app-component';

// Assets
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('./style.less');


const render = Component => ReactDOM.render(<Component />, document.querySelector('#app'));

render(App);

if (module.hot) {
  module.hot.accept('./app-component', () => {
    require('./app-component');
    render(App);
  });
}
