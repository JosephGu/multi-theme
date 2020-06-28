import React from 'react';
import Portalet from './Portalet';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Portalets: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 20,
        backgroundColor: theme.palette.secondary.main,
        flex: '1 0 auto',
    }
}))

const Portalets = () => {
    const classes = useStyles();

    const portletList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return <div className={classes.Portalets}>
        {
            portletList.map((portal) => {
                return <Portalet key={portal}>portal</Portalet>
            })
        }
    </div>
}

export default Portalets;