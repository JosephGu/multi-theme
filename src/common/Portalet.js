import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    paper: {
        width: 530,
        height: 400,
        margin: 5,
    }
}))

const Portalet = () => {
    const classes = useStyles()
    return <Paper onDrag={() => { console.log('draging') }} elevation={3} className={classes.paper}></Paper>
}

export default withTheme(Portalet);