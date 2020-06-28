import React from 'react';
import { Button } from '@material-ui/core';
import { orangeTheme, blueTheme, redTheme } from '../theme/themeGenerator';


const ThemeSetting = ({ themeChange }) => {
    return (
        <div style={{ float: 'right' }}>
            <Button onClick={() => themeChange(redTheme)}>Red</Button>
            <Button onClick={() => themeChange(blueTheme)}>Blue</Button>
            <Button onClick={() => themeChange(orangeTheme)}>Orange</Button>
        </div>
    )
}

export default ThemeSetting;