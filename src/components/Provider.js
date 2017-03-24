import React, {PropTypes} from 'react';

export default class Provider extends React.Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
  };

  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}