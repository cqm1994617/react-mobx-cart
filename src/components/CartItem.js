import React, {PropTypes} from 'react';

export default class CartItem extends React.Component {

  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    return (
      <div className="cart-item">
        <div className="cart-item-box c-select">
          <input type="checkbox" />
        </div>
        <div className="cart-item-box c-name">{data.name}</div>
        <div className="cart-item-box c-price">¥{data.price}</div>
        <div className="cart-item-box c-buyNum">
          <button>-</button>
          <input />
          <button>+</button>
        </div>
        <div className="cart-item-box c-subTotal">¥{data.price * data.buyNum}</div>
        <div className="cart-item-box c-delete">删除</div>
      </div>
    );
  }
}
