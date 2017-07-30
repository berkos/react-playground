import React from 'react';
import {classify} from './utils';
import Container from "./container";

export default class Jumbotron extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    const containerFluid = props.containerFluid;
    delete props.containerFluid;

    return <div {...props} className={classify('jumbotron', props.className)}>
      <Container fluid={containerFluid}/>
      {this.props.children}
      <Container/>
    </div>;
  }
}
