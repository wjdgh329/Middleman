import React, { Component } from 'react';
import GraphContainer from '../containers/GraphContainer';
// mui theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../theme.js';

const App = () => (
  <MuiThemeProvider theme={theme}>
  <div id="main">
      <h1 className="middleman">
        <img alt="logo" src="../assets/middleman.png" width="150" height="150" />
      </h1><br/>
  </div>
    <div className="title">
      <div className="graph-container">
        <GraphContainer />
      </div>
    </div>
 </MuiThemeProvider>

);


export default App;
