import React from 'react';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import { useState } from 'react';
import { Button, ButtonGroup, Container, RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Box, Typography } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';

//Refactor the custom styling of elements to MUI standard in Documentation instead of tagging all the classNames
const useStyles = makeStyles((theme) => ({
  root: {
    color: '#a69540',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      position:'relative',
      color: '#a69540',
    },
    '& .MuiInputBase-root': {
      color: '#a69540',
      fontWeight: 'bolder'      
    },
    overflowX: 'hidden',
},
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '70px',
    color: '#a69540',
  },

  container: {
    height: '90vh',
  },
  input: {
    width: '75%',
    color: '#a69540',
    '& .Mui-focused': {
      color: '#a69540',
      fontWeight: 'bolder',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
  },
  typography: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '45px',
    color: '#a69540', 
  },
  typographyGrade: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '45px',
    color: '#a69540', 
    paddingBottom: '5px', 
  },
  radio: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '25px',
    paddingTop: '20px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '25px',
    width: 'auto',
  },

  //custom radio button styling
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16, 22, 26, .2), inset 0 -1px 0 rgba(16, 22, 26, .1)',
    backgroundColor: '#f5f8fa',
    backgroungImage: 'lineear-gradient(180deg, hsla(0, 0%, 100%, .8), hsla(0, 0%, 100%, 0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto #000',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '##a69540',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206, 217, 224, .5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#a69540',
    backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, 0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff, #fff 28%, transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#a69540',
    },
  },
  button: {
    backgroundColor: '#a69540',
    color: '#000',
    '&:hover': {
      backgroundColor: '#a69540',
      color: '#000',
    },
  },
}));

//creating the custom radio button style
function StyledRadio(props) {
  const classes = useStyles();

  return(
    <Radio
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
      />
  );
}


//This is the start of the actual component for the grade calculator

const GradeCheck = () => {

  const classes = useStyles();

  const [currentGrade, setCurrentGrade] = useState(0);
  const [gradeWanted, setGradeWanted] = useState(0);
  const [gradeWeight, setGradeWeight] = useState(0);
  const [finalGrade, setFinalGrade] = useState(0);


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
    <Container className={classes.container} display="flex">
    <form className={classes.form} noValidate autoComplete="off" justifyContent="center">
      <TextField className={classes.input}  required id="standard-required" label="Your Current Grade" onChange= {(event) => setCurrentGrade(event.target.value)} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>
      }} />
      <TextField className={classes.input}  required id="standard-required" label="The Grade You Want" onChange = {(event) => setGradeWanted(event.target.value)} InputProps={{
        endAdornment: <InputAdornment position="end">%</InputAdornment>
      }} /> 
      <Typography variant='h5' component='h5' className={classes.typography}>
        What is the next grade?
      </Typography>
      <RadioGroup className={classes.radio} >
      <FormControlLabel value="Test/Quiz" control={<StyledRadio />} label="Test/Quiz" onClick={(event) => setGradeWeight('70')} />
      <FormControlLabel value="Classwork/Homework" control={<StyledRadio />} label="Class/Homework" onClick={(event) => setGradeWeight('30')} />
      </RadioGroup>
    </form>

    <ButtonGroup className={classes.buttonGroup}>
    <Button classes={{
      root: classes.button,
      hover: classes.hover,}} size="small" variant='contained' onClick={handleSubmit}>Check Grade</Button>
    </ButtonGroup>

    <Box>
      <Typography variant='h5' component='h5' className={classes.typography}>
        You Need a:
      </Typography>
      <Typography variant='h4' component='h4' className={classes.typographyGrade}>
      {finalGrade}%
      </Typography>
      
    </Box>
    </Container>
  );
};

export default GradeCheck;