import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import { Container, RadioGroup } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';

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
    paddingTop: '100px',
  },
}));

const GradeCheck = () => {

  const classes = useStyles();

  const [currentGrade, setCurrentGrade] = useState('');
  const [gradeWanted, setGradeWanted] = useState('');
  const [gradeWeight, setGradeWeight] = useState('');
  const [finalGrade, setFinalGrade] = useState('');

  function calculateGrade(currentGrade, gradeWanted, gradeWeight) {
    let final = (gradeWanted -currentGrade*(100.0 - gradeWeight)/ 100.0 / (gradeWeight/ 100.0));
    setFinalGrade(final.toFixed(2));
  }

  const handleChange = (event) => {
    event.preventDefault();
  }

  return (
    <Container className={classes.root} display="flex">
    <form className={classes.form} noValidate autoComplete="off" justifyContent="center">
      <TextField required id="standard-required" label="Your Current Grade % " onChange= {(event) => setCurrentGrade(event.target.value)} />
      <TextField required id="standard-required" label="The Grade You Want." onChange = {(event) => setGradeWanted(event.target.value)} /> 

      <RadioGroup>

      </RadioGroup>
    </form>
    </Container>
  );
};

export default GradeCheck;