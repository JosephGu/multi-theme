import { blue } from '@material-ui/core/colors';

export const blueThemeConfig = {
    palette: {
        primary: {
            main: blue[500],
        }
    },
    overrides: {
        MuiListItemText: {
            root: {
                color: blue[500],
            }
        },
        MuiListItemIcon: {
            root: {
                color: blue[500],
            }
        },
        MuiButton: {
            root: {
                color: blue[500],
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#000'
            }

        }
    },
}