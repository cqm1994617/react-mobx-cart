import React, {PropTypes} from 'react';

export default class CartItem extends React.Component {

  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <div>{data.name}</div>
      </div>
    );
  }
}