import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2>React-Webpack-HMR Boilerplate</h2>
          <ul>
            <li>React</li>
            <li>Webpack</li>
            <li className="boilerplate-red">
              Hot Module Replacement <i className="fa fa-fire" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
