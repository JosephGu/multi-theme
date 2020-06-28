import React from 'react';
import Portalet from './Portalet';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    Portalets: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: 20
    }
}))

const Portalets = () => {
    const classes = useStyles();

    const portletList = [1, 2, 3, 4, 5]
    return <div className={classes.Portalets}>
        {
            portletList.map((portal) => {
                return <Portalet key={portal}>portal</Portalet>
            })
        }
    </div>
}

export default Portalets;