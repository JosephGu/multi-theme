const backgroundFront = '#141414';
const backgroundBack = '#000'
const fontColorDark = 'rgba(255,255,255,0.85)'
const fontColorLight = 'rgba(255,255,255,0.45)'

export const darkThemeConfig = {
    palette: {
        primary: {
            main: fontColorDark,
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
        MuiSvgIcon: {
            root: {
                color: fontColorDark
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