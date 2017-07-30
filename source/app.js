import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {click: 0};
  }

  onClick(e) {
    this.setState({click: this.state.click + 1});
    console.log(this);
  }

  render() {
    return <ReactCSSTransitionGroup transitionName="app" transitionAppear={true} transitionAppearTimeout={200}
      transitionEnterTimeout={100} transitionLeaveTimeout={300}><Jumbotron className="-fluid text-sm-center custom"
      containerFluid={true}>
      <h1>Build React.js User Interfaces</h1>
      <p>with Bootstrap and SASS</p>
      <p>
        <Button className="-primary -success" href="http://www.google.com" target="_blank"
          label="Discover things"></Button>
        <Button className="-danger -sm" label="Discover things2"></Button>
      </p>
      <Button onClick={this.onClick} className="-primary -md -block">{this.state.click}</Button>
    </Jumbotron></ReactCSSTransitionGroup>;
  }
}
