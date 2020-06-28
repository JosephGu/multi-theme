import { blueGrey } from '@material-ui/core/colors';

const backgroundFront = '#2c387e';
const backgroundBack = '#3f51b5';
const fontColorDark = 'rgba(255,255,255,0.85)';
const fontColorLight = 'rgba(255,255,255,0.45)';

export const blueThemeConfig = {
    palette: {
        primary: {
            main: blueGrey[500],
        },
        secondary: {
            main: backgroundBack,
        },
        text: {
            primary: fontColorDark,
            second: fontColorLight
        }
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                color: "#fff",
            }
        },
        MuiButton: {
            root: {
                color: "#fff",
            }
        },
        MuiDrawer: {
            root: {
                backgroundColor: backgroundFront
            }
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: backgroundFront
            },
            root: {
                backgroundColor: backgroundFront
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: backgroundFront
            }
        },
        MuiInputLabel: {
            root: {
                color: fontColorDark,
            }
        },
        MuiTextField: {
            root: {
                color: fontColorDark,
            }
        }
    },
}