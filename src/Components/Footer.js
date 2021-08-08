import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000',
    height: 'auto',
    width: 'auto',
  },
  title: {
    flexGrow: 1,
    color:'#a69540',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    fontSize:'1rem',
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -2px 0 0 #000, 2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000',
    fontFamily: 'Rye, cursive', 
  },
  link: {
    paddingLeft: '2px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant="p" className={classes.title}>
            Made for Students, in collaboration with Mrs. Jessie by Mr.Jessie
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}