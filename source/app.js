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
          <Button className="-primary -success" href="http://www.google.com" target="_blank"/>
          <Button className="-danger -sm"/>
        </p>
        <Button className="-primary -md -block"/>
      </div>
    </div>;
  }
}
