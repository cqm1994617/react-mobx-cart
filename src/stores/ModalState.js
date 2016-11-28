import { observable, computed } from 'mobx';
import AppState from './AppState';

class ModalState {
  @observable show = false;
  @observable text = '';
  index = 0;
  showModal = (i) => {
    this.show = true;
    this.index = i;
    this.text = AppState.todos[i];
  };
  hideModal = () => {
    this.show = false;
  };
  changeValue = (z) => {
    this.text = z;
  };
}

const newState = new ModalState();
export default newState;
