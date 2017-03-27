import React, {PropTypes} from 'react';
import {observer} from 'mobx-react';

@observer
export default class CartItem extends React.Component {

  static contextTypes = {
    store: PropTypes.object,
  };

  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const { data } = this.props;
    const { store } = this.context;

    return (
      <div className="cart-item">
        <label for={`check${data.id}`} className="cart-item-box c-select">
          <input
            id={`check${data.id}`}
            type="checkbox"
            checked={data.checked}
            onChange={() => store.onChecked(data.id)}
          />
        </label>
        <div className="cart-item-box c-name">{data.name}</div>
        <div className="cart-item-box c-price">¥{data.price}</div>
        <div className="cart-item-box c-buyNum">
          <div onClick={() => store.sub(data.id)}>-</div>
          <input
            value={data.buyNum}
          />
          <div onClick={() => store.add(data.id)}>+</div>
        </div>
        <div className="cart-item-box c-subTotal">¥{data.price * data.buyNum}</div>
        <div className="cart-item-box c-delete" onClick={() => store.removeItem(data.id)}>删除</div>
      </div>
    );
  }
}
