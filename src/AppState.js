import { observable, computed } from 'mobx';

export default class AppState {
  @observable value = 0;
  addValue() {
    this.value ++;
  }
  subValue() {
    this.value --;
  }
  @computed get getValue() {
    return this.value * 10;
  }
  getTheValue() {
    return this.value * 10;
  }
}
