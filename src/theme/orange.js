import { orange } from '@material-ui/core/colors';

export const orangeThemeConfig = {
    palette: {
        primary: {
            main: orange[500],
        }
    },
    overrides: {
        MuiListItemText: {
            root: {
                color: orange[500],
            }
        },
        MuiListItemIcon: {
            root: {
                color: orange[500],
            }
        },
        MuiIcon: {
            root: {
                color: orange[500],
            }
        },
        MuiSvgIcon: {
            root: {
                color: orange[500],
            }
        },
        MuiButton: {
            root: {
                color: orange[500],
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: 'red'
            }
        }
    },
}