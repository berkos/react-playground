import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';

export default class App extends React.Component {
  render() {
    return <Jumbotron className="-fluid text-sm-center"
      style={{backgroundImage: 'url(img/nature.jpg)', color: 'white'}}>
        <h1>Build React.js User Interfaces</h1>
        <p>with Bootstrap and SASS</p>
        <p>
          <Button className="-primary -success" href="http://www.google.com" target="_blank" disabled/>
          <Button className="-danger -sm" disabled/>
        </p>
        <Button className="-primary -md -block" disabled/>
    </Jumbotron>;
  }
}
