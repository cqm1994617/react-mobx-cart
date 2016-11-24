import React from 'react';

export default class Item extends React.Component {

  static propTypes = {
    text: React.PropTypes.string,
  };

  static contextTypes = {
    appStore: React.PropTypes.object,
  }

  render() {
    console.log(this.context);
    return (
      <div className="item" onClick="">{this.props.text}</div>
    );
  }
}
