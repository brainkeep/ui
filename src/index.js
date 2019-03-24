import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './app/store';
import App from './app/App';

render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline/>
      <App/>
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);