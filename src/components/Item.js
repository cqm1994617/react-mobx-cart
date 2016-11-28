import React from 'react';
import ModalState from '../stores/ModalState';

export default class Item extends React.Component {

  static propTypes = {
    text: React.PropTypes.string,
  };

  static contextTypes = {
    appStore: React.PropTypes.object,
  };

  render() {
    const { text, id } = this.props;
    const { appStore } = this.context;
    return (
      <div className="item">
        <p>{id + 1}、{text}</p>
        <div>
          <button onClick={() => ModalState.showModal(id)}>编辑</button>
          <button onClick={() => appStore.removeTodo(id)}>删除</button>
        </div>
      </div>
    );
  }
}
