import {observable, useStrict, action, computed} from 'mobx';
import {data} from '../mock/data';

useStrict(true);

export default class AppState {

  @observable list = data;

  @action removeItem = (i) => {
    list.removeItem(i);
  }

}