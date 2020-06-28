import React from 'react';
import { withStyles } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const styles = ({
    formControl: {
        minWidth: 120,
        maxWidth: 200,
        margin: '0 20px',
    }
})

const SelectCom = ({ classes, dataSrc, value, onSelectChange }) => {
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="select-ag-label">Frequency</InputLabel>
            <Select value={value} onChange={e => onSelectChange(e.target.value)} labelId="select-ag-label">
                {
                    dataSrc.map((menuItem) => {
                        return <MenuItem value={menuItem.value}>{menuItem.label}</MenuItem>
                    })
                }             
            </Select>
        </FormControl>
    )
}
export default withStyles(styles)(SelectCom);