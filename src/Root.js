import React from 'react';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';

export default class Root extends React.Component {
  render() {
    return (
      <div>
        <Provider store = {store}>
            <App />
        </Provider>
      </div>
    )
  }
}
