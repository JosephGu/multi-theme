import React, { useState } from 'react';
import { AppBar, IconButton, Hidden, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SelectComp from './SelectCom';
import ThemeSetting from './ThemeSetting';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBox from './SearchBox';

const styles = () => ({
  headerContainer: {
    padding: '0 20px',
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100px',
    alignItems: 'center'
  },
  filter: {
    flex: '1 0 auto',
  },
  themeSetting: {
    flex: '0 0 30px'
  },
  menuButton: {
    paddingTop: 30,
  },
  searchButton: {
    margin: '0 20px'
  },
  resetButton: {
    margin: '0 20px'
  }
});
const Header = ({ classes, onThemeChange, onDrawerToggle }) => {
  const [frequency, setFrequency] = useState('Daily');
  const frequencyDS = [
    { value: '', label: 'None' },
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
  ]
  return (
    <React.Fragment>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        className={classes.headerContainer}>
        <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.filter}>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SearchBox ></SearchBox>
          <Button className={classes.searchButton} variant="contained" color='primary'>Search</Button>
          <Button className={classes.resetButton} variant="contained" color='primary'>Reset</Button>
        </div>
        <ThemeSetting className={classes.themeSetting} themeChange={onThemeChange} />
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Header);
