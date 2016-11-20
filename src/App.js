import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import './main.scss';

@observer
export default class App extends React.Component {

  static propTypes = {
    appState: PropTypes.object,
  };

  render() {
    return (
      <div>123456</div>
    );
  }
}
