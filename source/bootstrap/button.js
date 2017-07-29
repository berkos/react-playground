import React from 'react';

export default class Button extends React.Component {
  classify(key, value) {
    if(value[0] === '-') value = key + value;
    value =  value.split(' -').join(` ${key}-`)
    return `${key} ${value}`;
  }

  render() {
    const Tag = this.props.href ? 'a' : 'button';
    let className =  this.classify('btn', this.props.className);

    return <Tag {...this.props} className={className}>Google things</Tag>;
  }
}
