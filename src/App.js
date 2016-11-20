import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import './main.scss';

@observer
export default class App extends React.Component {

  static propTypes = {
    appState: PropTypes.object,
  };

  render() {
    const { appState } = this.props;
    return (
      <div>
        <p>{appState.timer}</p>
        <button onClick={() => appState.addTimer()}>增加</button>
        <button onClick={() => appState.subTimer()}>减少</button>
      </div>
    );
  }
}
