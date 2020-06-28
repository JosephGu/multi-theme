import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core';
import { redTheme } from './theme/themeGenerator';
import Navigator from './common/Navigator';

import Header from './common/Header';
import Portalets from './common/Portalets';
import { CssBaseline } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  navigator: {
    flex: '0 0 256px',
  },
  content: {
    flex: '1',
  }
});

const App = ({ classes }) => {

  const [theme, setTheme] = useState(redTheme);


  return (
    <MuiThemeProvider theme={createMuiTheme(theme)} >
      <CssBaseline />
      <div className={classes.root}>
        <nav className={classes.navigator}>
          <Navigator />
        </nav>
        <div className={classes.content}>
          <Header onThemeChange={newTheme => setTheme(newTheme)} />
          <Portalets />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
