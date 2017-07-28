import React from 'react';
import Button from './bootstrap/button';

export default class App extends React.Component {
  render() {
    return <div className="jumbotron jumbotron-fluid text-sm-center"
      style={{backgroundImage: 'url(img/nature.jpg)', color: 'white'}}>
      <div className="container">
        <h1>Build React.js User Interfaces</h1>
        <p>with Bootstrap and SASS</p>
        <p>
          <Button className="btn btn-primary btn-success" href="http://www.google.com" target="_blank"/>
          <Button className="btn-danger btn-sm"/>
        </p>
        <Button className="btn-primary btn-md btn-block"/>
      </div>
    </div>;
  }
}
