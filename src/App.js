import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import { Button, ButtonGroup, Container, RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      position:'relative',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '80px',
  },
  radio: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '25px',
    width: 'auto',
  },
  button: {
    borderRadius: '50px',
  },
}));

const GradeCheck = () => {

  const classes = useStyles();

  const [currentGrade, setCurrentGrade] = useState(0);
  const [gradeWanted, setGradeWanted] = useState(0);
  const [gradeWeight, setGradeWeight] = useState(0);
  const [finalGrade, setFinalGrade] = useState(0);

  // const handleChange = (event) => {
  //   event.preventDefault();
  // }

  function checkGrade() {

    let final=(gradeWanted-currentGrade * (100.0 - gradeWeight)/ 100.0)/(gradeWeight/ 100.0)
    
    // This code will keep the finalGrade from going past 100% needed on the next assignment.  Currently it is requested that the %
    // go above 100 so that students understand that they will need more than one assignment or test to raise their grade.
    // if(final > 100) {
    //   setFinalGrade(100)    
    // } else {
    //   setFinalGrade(Number(final.toFixed(2)));
    // }
    setFinalGrade(Number(final.toFixed(2)));
  };

  const handleSubmit = event => {
    event.preventDefault();
    checkGrade();
  }



  return (
    <Container className={classes.root} display="flex">
    <form className={classes.form} noValidate autoComplete="off" justifyContent="center">
      <TextField  required id="standard-required" label="Your Current Grade"  onChange= {(event) => setCurrentGrade(event.target.value)} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>
      }} />
      <TextField  required id="standard-required" label="The Grade You Want" onChange = {(event) => setGradeWanted(event.target.value)} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>
      }} /> 
      
      <RadioGroup className={classes.radio} >
      <FormControlLabel value="Test/Quiz" control={<Radio />} label="Test/Quiz" onClick={(event) => setGradeWeight('70')} />
      <FormControlLabel value="Classwork/Homework" control={<Radio />} label="Class/Homework" onClick={(event) => setGradeWeight('30')} />
      </RadioGroup>
    </form>

    <ButtonGroup className={classes.buttonGroup}>
    <Button className={classes.button} size="small" variant='contained' color='primary' onClick={handleSubmit}>Check Grade</Button>

    <Button className={classes.button} size="small" variant='contained' color='secondary'>Reset</Button>
    </ButtonGroup>

    <Box>
      <Typography variant='h3' component='h5' className={classes.form}>
        You Need To Score : {finalGrade}
      </Typography>
      
    </Box>
    </Container>
  );
};

export default GradeCheck;