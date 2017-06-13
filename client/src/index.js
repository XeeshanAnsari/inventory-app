import React from 'react';
import {Provider}  from 'react-redux';
import ReactDOM from 'react-dom';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import './index.css'
import App from './App'
import store from './store/store'

injectTapEventPlugin();


ReactDOM.render(
   <MuiThemeProvider>
      <Provider  store={store}>
          <App />
      </Provider> 
   </MuiThemeProvider>,  
  document.getElementById('root')
);
