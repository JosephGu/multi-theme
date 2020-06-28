import React, { useState } from 'react';
import { AppBar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SelectComp from './SelectCom';
import ThemeSetting from './ThemeSetting';

const styles = () => ({
  headerContainer: {
    height: 100,
    padding: '20px',
    display: 'flex',
    flexDirection: 'row'
  },
  filter: {
    flex: '1 0 auto',
  },
  themeSetting: {
    flex: '0 0 30px'
  }
});
const Header = ({ classes, onThemeChange }) => {
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
        <div className={classes.filter}>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
          <SelectComp value={frequency} onSelectChange={item => setFrequency(item)} dataSrc={frequencyDS}></SelectComp>
        </div>
        <ThemeSetting className={classes.themeSetting} themeChange={onThemeChange} />
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(Header);
