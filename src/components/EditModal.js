import React from 'react';
import ModalState from '../stores/ModalState';
import AppState from '../stores/AppState';
import { observer } from 'mobx-react';

@observer
export default class EditModal extends React.Component {

  submit() {
    AppState.editTodo(ModalState.index, ModalState.text);
    ModalState.hideModal();
  }

  render() {
    if (ModalState.show) {
      return (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-head">
              <h2>编辑</h2>
            </div>
            <div className="modal-main">
              <input
                type="text"
                onChange={(z) => ModalState.changeValue(z.target.value)}
                defaultValue={ModalState.text}
              />
            </div>
            <div className="modal-foot">
              <button className="cancel" onClick={() => ModalState.hideModal()}>取消</button>
              <button className="submit" onClick={() => this.submit()}>提交</button>
            </div>
          </div>
          <div className="overlay" onClick={ModalState.hideModal} />
        </div>
      );
    }
    return null;
  }
}
