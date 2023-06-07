import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Row, Col, Container } from 'react-bootstrap';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import StepContent from '@mui/material/StepContent';
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
// import 'react-youtube/dist/ReactYouTube.css';


const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 12, // Adjust the width to increase/decrease the circle size
    height: 12, // Adjust the height to increase/decrease the circle size
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    flexDirection: 'column', // Set the direction to column
    top: 0, // Adjust the top position as needed
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(to right, rgb(144, 238, 144), rgb(0, 128, 0))`, // Update the gradient direction
      backgroundColor: 'transparent', // Set the background color to transparent
      width: 5, // Adjust the width of the line as needed
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(to right, rgb(144, 238, 144), rgb(0, 128, 0))`, // Update the gradient direction
      backgroundColor: 'transparent', // Set the background color to transparent
      width: 5, // Adjust the width of the line as needed
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    width: 5, // Adjust the width of the line as needed
    border: 0,
    borderRadius: 1,
    // marginTop: 5, // Add spacing between the steps
    // marginBottom: 5, // Add spacing between the steps
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: `linear-gradient(to bottom, rgb(144, 238, 144), rgb(0, 128, 0))`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: `linear-gradient(to bottom, rgb(144, 238, 144), rgb(0, 128, 0))`,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ArticleIcon />,
    2: <OndemandVideoIcon />,
    3: <ChatIcon />,
    4: <VideoCallIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};





export default function Stepperr() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const steps = [
    {
      label: 'Documentation',
      text: `
    <Row>
    <h2 style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}>Documentation</h2> 
    <a href="https://www.health.state.mn.us/people/immunize/hcp/admim.pdf" onClick={handleOpen}>Click here for the document</a>
    </Row>
  `,
      icon: 1,
    },
    {
      label: 'Reference Video',
      text: `
    <Row>
    <h2 style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}>Reference Video</h2> 
    <a href="https://www.youtube.com/watch?v=YoEWudfhtsk" onClick={handleOpen}>Click here to watch the video</a>
    </Row>
  `,
      icon: 2,
    },
    {
      label: 'Chat',
      text: 'This is the chat step. Start a chat <a href="https://example.com/chat" target="_blank">here</a>.',
      icon: 3,
    },
    {
      label: 'Expert Call',
      text: 'This is the expert call step. Schedule a call <a href="https://example.com/call" target="_blank">here</a>.',
      icon: 4,
    },
  ];



  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    const completedCount = Object.keys(completed).length;
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const newCompleted = { ...completed };
    delete newCompleted[activeStep - 1];
    setCompleted(newCompleted);
  };

  const handleStep = (step) => () => {
    const newCompleted = {};
    for (let i = 0; i < step; i++) {
      newCompleted[i] = true;
    }
    delete newCompleted[step];
    setCompleted(newCompleted);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  // const buttonClasses = useStyles();

  return (
    <Box sx={{ width: '100%', alignSelf: "center" }} className="mx-4 px-4" >
      <Row>
        <h1
          className="text-center p-4"
          style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}
        >
          References
        </h1>
      </Row>
      <Row style={{ alignItems: "center" }}>
        <Stepper activeStep={activeStep} connector={<ColorlibConnector />} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label} completed={completed[index]}>
              <StepLabel StepIconComponent={ColorlibStepIcon} onClick={handleStep(index)}>
                {step.label}
              </StepLabel>
              <StepContent>

                <Typography dangerouslySetInnerHTML={{ __html: steps[activeStep].text }} />


                <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                  <div >

                    {/* <Button
                    variant="outlined"
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      startIcon={<ArrowBackIcon/>}
                    >
                      Previous Reference
                    </Button> */}
                    <Button
                      variant="outlined"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                      startIcon={<ArrowForwardIcon />}
                      style={{ fontWeight: "bold" }}
                    >
                      {index === steps.length - 1 ? 'Help' : 'Need more guidance'}
                    </Button>
                    <Button startIcon={<SentimentSatisfiedAltIcon />} onClick={completedSteps} sx={{ mt: 1, mr: 1, '&:hover': { color: '#388e3c' } }} style={{ fontWeight: "bold" }} variant="outlined" color="success">
                      I'm Satisfied
                    </Button>
                  </div>
                </Box>

              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Row>
      {/* <Row>
        <Stack direction="row" spacing={2}>
          <Box
            sx={{
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
              height: '300px', // Set your desired height here
            }}
          >
            <Typography dangerouslySetInnerHTML={{ __html: steps[activeStep].text }} />
            <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
              <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                {activeStep !== 0 && 'Previous Reference'}
              </Button>
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                {activeStep !== steps.length - 1 && 'Need more guidance'}
              </Button>
              <Button onClick={completedSteps} sx={{ backgroundColor: '#4caf50', color: '#fff', '&:hover': { backgroundColor: '#45a049' } }}>
                I understood
              </Button>
            </Box>

          </Box>

        </Stack>
      </Row> */}
    </Box>
  );
}