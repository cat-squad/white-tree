import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import WhiteTree from './App';
import './index.css';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <WhiteTree />
  </MuiThemeProvider>,
  document.getElementById('root')
);
