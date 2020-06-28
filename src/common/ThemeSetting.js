import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { orangeTheme, blueTheme, darkTheme } from '../theme/themeGenerator';
import { ColorLens } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    themeContainer: {

    },
}))

const ThemeSetting = ({ themeChange }) => {
    const classes = useStyles();
    const [themeOpen, setThemeOpen] = useState(false);
    return (
        <div className={classes.themeContainer}>
            <ColorLens color='main' onClick={() => setThemeOpen(true)} />
            <Dialog open={themeOpen} onClose={() => setThemeOpen(false)}>
                <DialogTitle id="simple-dialog-title">Theme Preference</DialogTitle>
                <div style={{ display: themeOpen ? 'block' : 'none' }} >
                    <Button onClick={() => themeChange(darkTheme)}>Dark</Button>
                    <Button onClick={() => themeChange(blueTheme)}>Blue</Button>
                    <Button onClick={() => themeChange(orangeTheme)}>Orange</Button>
                </div>
                <div>

                </div>
            </Dialog>

        </div>
    )
}

export default ThemeSetting;