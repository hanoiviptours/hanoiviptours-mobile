import React from 'react';
import { Text, View } from 'react-native';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import { Colors } from '../../theme/Variables';

type Step = {
  label: string;
  component: React.ReactNode;
};

type Props = {
  steps: Step[];
  activeStep?: number;
};
const progressStepsStyle = {
  activeStepIconBorderColor: Colors.primaryColor,
  activeLabelColor: Colors.primaryColor,
  activeStepNumColor: 'black',
  activeStepIconColor: Colors.white,
  completedStepIconColor: Colors.primaryColor,
  completedProgressBarColor: Colors.primaryColor,
  completedCheckColor: Colors.white,
  labelFontSize: 13,
  activeLabelFontSize: 15,
};
const Stepper = ({ steps, activeStep }: Props) => {
  return (
    <ProgressSteps activeStep={activeStep} {...progressStepsStyle}>
      {steps.map((step, index) => (
        <ProgressStep removeBtnRow key={index} label={step.label}>
          {step.component}
        </ProgressStep>
      ))}
    </ProgressSteps>
  );
};

Stepper.defaultProps = {
  activeStep: 0,
};
export default Stepper;
