import React from 'react';
import Button from './bootstrap/button';
import Jumbotron from './bootstrap/jumbotron';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './appsource.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {click: 0, labels: []};
  }

  onClick(e) {
    let labels = this.state.labels.concat([this.state.click]);
    this.setState({click: this.state.click + 1, labels: labels});
  }

  render() {
    let buttons = this.state.labels.map((value, i) => {
      return <Button key={value}>{value}</Button>;
    });

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

      <ReactCSSTransitionGroup transitionName="app" transitionAppear={true} transitionAppearTimeout={200}
        transitionEnterTimeout={5000} transitionLeaveTimeout={500}>
        {buttons}
      </ReactCSSTransitionGroup>
    </Jumbotron></ReactCSSTransitionGroup>;
  }
}
