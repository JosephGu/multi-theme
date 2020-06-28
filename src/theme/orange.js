import { orange,red } from '@material-ui/core/colors';

const backgroundFront = '#b23c17';
const backgroundBack = '#ff5722';
const fontColorDark = 'rgba(255,255,255,0.85)'
const fontColorLight = 'rgba(255,255,255,0.45)'

export const orangeThemeConfig = {
    palette: {
        primary: {
            main: orange[500],
        },
        secondary:{
            main: backgroundBack,
        },
        text:{
            primary:fontColorDark,
            second:fontColorLight
        }
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                color: fontColorDark,
            }
        },
        MuiButton: {
            root: {
                color: fontColorDark,
            }
        },
        MuiDrawer: {
            root: {
                backgroundColor:backgroundFront
            }
        },
        MuiAppBar:{
            colorPrimary:{
                backgroundColor: backgroundFront
            },
            root: {
                backgroundColor:backgroundFront
            }
        },
        MuiPaper:{
            root:{
                backgroundColor:backgroundFront
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