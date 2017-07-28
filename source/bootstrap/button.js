import React from 'react';

export default class Button extends React.Component {
  render() {
    const Tag = this.props.href? 'a' : 'button';
    let className = 'btn btn-primary ' + this.props.className;

    return <Tag {...this.props} className={className}>Google things</Tag>;
  }
}
