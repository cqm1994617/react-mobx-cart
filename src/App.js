import React from 'react';
import { createStore } from 'redux';
import './style.scss';

/*
*reducer 规则。
*描述了action如何把state转变为下一个state
* */
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

//存放应用的状态
//API: {subscribe, dispatch, getState}
let store = createStore(counter);

//可以手动订阅更新，也可以事件绑定到视图层
store.subscribe(() => {
  console.log(store.getState());
});

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// {type: xxx}为action
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      b: 123
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        {this.state.b}
      </div>
    );
  }
}
