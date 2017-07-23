'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './app-component';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style/app.less';


const render = Component => ReactDOM.render(<Component />, document.querySelector('#app'));

render(App);

if (module.hot) {
  module.hot.accept('./app-component', () => {
    require('./app-component');
    render(App);
  });
}
