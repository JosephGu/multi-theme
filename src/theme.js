import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue, red } from '@material-ui/core/colors';

export const redTheme = createMuiTheme({
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
        MuiButton: {
            root: {
                color: red[500],
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#000'
            }
        }

    },
});

export const blueTheme = createMuiTheme({
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
});

export const orangeTheme = createMuiTheme({
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
});
