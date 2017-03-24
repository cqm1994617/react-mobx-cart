import React from 'react';
import AppState from './stores/AppState';
import Provider from './components/Provider';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {observer} from 'mobx-react';
import './main.scss';

const store = new AppState();

@observer
export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}
