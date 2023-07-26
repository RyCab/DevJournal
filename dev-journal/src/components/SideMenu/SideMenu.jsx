import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  sideMenu: {
    // float: 'left',
    height: '100vh',
    width: '99%',
    backgroundColor: 'rgba(0,0,11,255)',
    // backgroundColor: 'darkgray',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    transition: 'width 0.3s ease',
    // border:'2px solid red',
    borderRight:'1px solid white',
    borderTopRightRadius:'20px',
    borderBottomRightRadius:'20px',
  },
  sideMenuExpanded: {
    width: '99%',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: 'grey',
      width: '90%'
    },
    // border:'2px solid red',
    width: '65%',
  },
  icon: {
    marginRight: '10px',
    marginLeft: '10px',
    color: 'white',
    fontSize:'30px',
    // border:'2px solid red',
  },
  link1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '10px',
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: 'grey',
      width: '90%'
    },
    // border:'2px solid red',
    width: '65%',
    marginTop:'5vh',
  },
  icon1: {
    marginRight: '10px',
    marginLeft: '10px',
    color: 'white',
    // border:'2px solid red',
    fontSize:'30px',
  },
}));

export const SideMenu = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(true); //SET FALSE FOR MOVEABLE SIDE MENU

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(true); //SET FALSE FOR MOVEABLE SIDE MENU
  };

  return (
    <div
      className={`${classes.sideMenu} ${expanded ? classes.sideMenuExpanded : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <a href="/" className={classes.link1}>
        <HomeIcon className={classes.icon1}/>
        {expanded && <a> Home</a>}
      </a>
      <a href="#" className={classes.link}>
        <SettingsIcon className={classes.icon}/>
        {expanded && <a> Settings</a>}
      </a>
    <a href="/" className={classes.link}>
        <HomeIcon className={classes.icon}/>
        {expanded && <a> Home</a>}
      </a>
      <a href="#" className={classes.link}>
        <SettingsIcon className={classes.icon}/>
        {expanded && <a> Settings</a>}
      </a>
    <a href="/" className={classes.link}>
        <HomeIcon className={classes.icon}/>
        {expanded && <a> Home</a>}
      </a>
      <a href="#" className={classes.link}>
        <SettingsIcon className={classes.icon}/>
        {expanded && <a> Settings</a>}
      </a>
    </div>
  );
};
