import { createMuiTheme } from '@material-ui/core/styles';
import { orangeThemeConfig } from './orange';
import { blueThemeConfig } from './blue';
import { darkThemeConfig } from './dark'

export const darkTheme = createMuiTheme(darkThemeConfig);

export const blueTheme = createMuiTheme(blueThemeConfig);

export const orangeTheme = createMuiTheme(orangeThemeConfig);
