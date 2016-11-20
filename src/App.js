import React from 'react';
import { observer } from 'mobx-react';
import './style.scss';

@observer
export default class App extends React.Component {
  async componentWillMount() {

  }

  render() {
    return (<button onClick={this.onReset.bind(this)}>
      Seconds passed: {this.props.appState.timer}
    </button>);
  }
}
