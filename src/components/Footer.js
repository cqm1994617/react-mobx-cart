import React from 'react';
import { observer } from 'mobx-react';
import AppState from '../stores/AppState';

@observer
export default class Footer extends React.Component {

  render() {
    return (
      <div className="foot">
        <p>总条数: {AppState.total}</p>
      </div>
    );
  }
}
