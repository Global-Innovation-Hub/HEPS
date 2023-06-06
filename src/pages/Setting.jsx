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
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Box from '@mui/material/Box';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from 'react-modal';

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
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(to bottom, rgb(144, 238, 144), rgb(0, 128, 0))`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient(to bottom, rgb(144, 238, 144), rgb(0, 128, 0))`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
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

const steps = [
  {
    label: 'Documentation',
    text: "<Row>\
    <h1 style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}>Documentation</h1> \
    </Row> ",
    icon: 1,
  },
  {
    label: 'Reference Video',
    text: "<Row>\
    <h1 style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}>Reference Video</h1> \
    </Row> ",
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

Modal.setAppElement('#root');

export default function Stepperr() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    const completedCount = Object.keys(completed).length;
    return (
      <div>
        <button onClick={openModal}>Open Pop-up</button>

        <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Pop-up Modal">
          <h2>Pop-up Content</h2>
          <p>This is the content of the pop-up.</p>
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    );
  };

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
  
  return (
    <Box >
      <Row>
        <h1
          className="text-center p-4"
          style={{ color: '#083c59', fontWeight: '700', lineHeight: '1.2' }}
        >
          References
        </h1>
      </Row>
      <Row>
        <Col>
          <Stepper nonLinear activeStep={activeStep} connector={<ColorlibConnector />} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.label} completed={completed[index]}>
                <StepLabel StepIconComponent={ColorlibStepIcon} onClick={handleStep(index)}>
                  {step.label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Col>
      </Row>
      <Row>
        <Col>
          <Stack direction="row" spacing={2}>
            <Box
              sx={{
                width: '100%',
                height: '50vh',
                border: '1px solid #ccc',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
            >
              <Typography dangerouslySetInnerHTML={{ __html: steps[activeStep].text }}></Typography>
            </Box>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <React.Fragment>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                  {activeStep !== 0 && 'Previous Reference'}
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  {activeStep !== steps.length - 1 && 'Need more guidance'}
                </Button>
                <Button onClick={completedSteps}>I understood</Button>
              </Box>
            </React.Fragment>
          </div>
        </Col>
      </Row>
    </Box>
  );
}
