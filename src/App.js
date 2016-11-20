import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
  onReset () {
    this.props.appState.resetTimer();
  }

  async componentWillMount() {
    await console.log(123);
  }

  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }
}
