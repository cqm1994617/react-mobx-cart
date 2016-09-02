import React from 'react';
import { createStore } from 'redux';
import './style.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      b: 123
    }
  }

  clickme() {
    this.setState({
      b: 321,
    });
  }

  render() {
    return (
      <div>
        state的状态{this.state.b}
        <button onClick={() => this.clickme()}>点击我</button>
      </div>
    );
  }
}
