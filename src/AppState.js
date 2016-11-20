import { observable} from 'mobx';

export default class AppState {
  @observable timer = 0;
  addTimer() {
    this.timer ++;
  }
  subTimer() {
    this.timer --;
  }
}
