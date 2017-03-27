import React, {PropTypes} from 'react';
import CartItem from './CartItem';
import {observer} from 'mobx-react';

@observer
export default class Main extends React.Component {

  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const {store} = this.context;
    return (
      <div className="main">
        {store.list.map((z, i) => <CartItem data={z} key={i}/>)}
      </div>
    );
  }
}
