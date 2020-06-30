import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { withStyles, Hidden } from '@material-ui/core';
import { lightTheme } from './theme/themeGenerator';
import Navigator from './common/Navigator';

import Header from './common/Header';
import Portalets from './common/Portalets';
import { CssBaseline } from '@material-ui/core';

const drawerWidth = '256px';

const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  navigator: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    "&:after": {
      background: 'linear-gradient(-45deg, rgba(147,26,222,0.83) 0%, rgba(28,206,234,0.82) 100%)'
    }
  },
  content: {
    flex: '1',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  }
});

const App = ({ classes }) => {

  const [theme, setTheme] = useState(lightTheme);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <MuiThemeProvider theme={createMuiTheme(theme)} >
      <CssBaseline />
      <div className={classes.root}>
        <nav className={classes.navigator}>
          <Hidden smUp implementation="js">
            <Navigator PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle} />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator PaperProps={{ style: { width: drawerWidth } }} />
          </Hidden>
        </nav>
        <div className={classes.content}>
          <Header onThemeChange={newTheme => setTheme(newTheme)} onDrawerToggle={handleDrawerToggle} />
          <Portalets />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
