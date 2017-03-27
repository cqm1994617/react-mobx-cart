import {observable, useStrict, action, computed} from 'mobx';
import {data} from '../mock/data';

useStrict(true);

function findById(list, id) {
  return list.filter(z => z.id === id)[0];
}

const dataList = data.map((z) => {
  return {
    checked: true,
    ...z
  }
});

export default class AppState {

  @observable list = dataList;
  @observable checkedAll = true;

  @action removeItem = (id) => {
    this.list.forEach((item, i) => {
      if (item.id === id) {
        this.list.splice(i, 1);
      }
    });
  };

  @action add = (id) => {
    this.list.forEach(item => item.id === id && item.buyNum++);
  };

  @action sub = (id) => {
    this.list.forEach(item => (item.id === id && item.buyNum > 0) && item.buyNum--);
  };

  @action onChecked = (id) => {
    this.list.forEach(item => {
      if (item.id === id) {
        item.checked ? this.checkedAll = false : null;
        item.checked = !item.checked;
      }
    });
    !this.list.some((item) => item.checked === false) ? this.checkedAll = true : null;
  };

  @action onCheckedAll = () => {
    this.checkedAll = !this.checkedAll;
    this.checkedAll ? this.list.forEach(item => item.checked = true) : this.list.forEach(item => item.checked = false);
  };

  @computed get totalPrice() {
    let total = 0;
    this.list.forEach((item, i) => {
      if (item.checked) {
        total += this.list[i].buyNum * this.list[i].price;
      }
    });
    return total;
  }

}