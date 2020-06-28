import { red } from '@material-ui/core/colors';


export const redThemeConfig = {
    palette: {
        primary: {
            main: red[500],
        }
    },
    overrides: {
        MuiListItemText: {
            root: {
                color: red[500],
            }
        },
        MuiListItemIcon: {
            root: {
                color: red[500],
            }
        },
        MuiButton: {
            root: {
                color: red[500],
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#000'
            }
        },


    },
}