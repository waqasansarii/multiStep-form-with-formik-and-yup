import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalData from '../froms/formOne'
import FormTwo from '../froms/formTwo'
import FormThree from '../froms/formThree'
import UserInfo from '../userInfo/userInfo'
import {allReset} from '../../globalState/createSlice'
import {useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Name', 'Email and Password', 'Number and Gender'];
}

function getStepContent(stepIndex:number,handleNext:() => void) {
  switch (stepIndex) {
    case 0:
    //   return 'What is an ad group anyways?';
        return <PersonalData nextFunc={handleNext} />;
    case 1:
      return <FormTwo nextFunc={handleNext} />;
    case 2:
      return <FormThree nextFunc={handleNext} />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontallyStepper() {

  const dispatch = useDispatch()

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const steps = getSteps();

  const handleNext = ():void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = ():void => {
    setActiveStep(0);
    dispatch(allReset(''))

  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}> */}
              <UserInfo />
              {/* All steps completed */}
              {/* </Typography> */}
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext)}</Typography>
            <div>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button> */}
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}