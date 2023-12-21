import React from 'react';
import { ProgressStep, ProgressSteps } from 'react-native-progress-steps';
import { Colors } from '../../theme/Variables';

type Step = {
  label: string;
  component: any;
};

type Props = {
  steps: Step[];
  activeStep?: number;
  marginBottom?: number;
  scrollable?: boolean;
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
  topOffset: 10,
};
const Stepper = ({ steps, activeStep, marginBottom, scrollable }: Props) => {
  return (
    <ProgressSteps
      activeStep={activeStep}
      {...progressStepsStyle}
      marginBottom={marginBottom}
    >
      {steps.map((step, index) => (
        <ProgressStep
          removeBtnRow
          scrollable={scrollable}
          key={index}
          label={step.label}
        >
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
