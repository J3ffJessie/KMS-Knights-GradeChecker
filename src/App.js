import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const GradeCheck = () => {

  const classes = useStyles();
  const currentGrade= '';
  const gradeWanted='';

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField required id="standard-required" label="Your Current Grade % "  />
      <TextField required id="standard-required" label="The Grade You Want." /> 
    </form>
  );
};

export default GradeCheck;