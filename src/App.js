import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import './main.scss';
import DevTools from 'mobx-react-devtools';

@observer
export default class App extends React.Component {

  static propTypes = {
    appState: PropTypes.object,
  };

  render() {
    const { appState } = this.props;
    return (
      <div>
        <DevTools />
        
      </div>
    );
  }
}
