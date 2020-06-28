import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { redTheme } from './theme/themeGenerator';
import Navigator from './common/Navigator';
import ThemeSetting from './common/ThemeSetting';

function App() {

  const [theme, setTheme] = useState(redTheme);


  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <nav>
        <Navigator />
      </nav>
      <div>
        <ThemeSetting themeChange={newTheme => setTheme(newTheme)} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
