import React from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {

    }
}))

const SearchBox = () => {
    const classes = useStyles();
    return (
        <FormControl className={classes.formControl}>
            <TextField label='Search User' ></TextField>
        </FormControl>
    )
}

export default SearchBox;