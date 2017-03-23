import React from 'react';
import {observable, useStrict, action, computed, extendObservable} from 'mobx';
import {observer} from 'mobx-react';

//useStrict(true);

class MyState {
  @observable num1 = 0;
  @observable num2 = 100;

  @action addNum1 = () => {
    this.num1 ++;
  };
  @action addNum2 = () => {
    this.num2 ++;
  };
  @computed get total() {
    return this.num1 + this.num2;
  }
}

const newState = new MyState();

const AllNum = observer((props) => <div>num1 + num2 = {props.store.total}</div>);

const Main = observer((props) => (
  <div>
    <p>num1 = {props.store.num1}</p>
    <p>num2 = {props.store.num2}</p>
    <div>
      <button onClick={props.store.addNum1}>num1 + 1</button>
      <button onClick={props.store.addNum2}>num2 + 1</button>
    </div>
  </div>
));

@observer
export default class App extends React.Component {

  render() {
    return (
      <div>
        <Main store={newState} />
        <AllNum store={newState} />
      </div>
    );
  }
}
