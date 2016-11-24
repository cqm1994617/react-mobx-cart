import React from 'react';
import { observer } from 'mobx-react';

import Item from './Item';

@observer
export default class Main extends React.Component {

  static propTypes = {
    appStore: React.PropTypes.object,
  };

  render() {
    return (
      <div>
        {this.props.appStore.todos.map(z => <Item text={z} />)}
      </div>
    );
  }
}
