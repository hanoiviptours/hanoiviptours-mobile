import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { Stepper } from '../../components';
import { DefaultVariables } from '../../theme/index';
import {
  ApplicationScreenProps,
  AuthScreenProps,
} from '../../../@types/navigation';
import { RegisterValues } from '../../../@types/register';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

const { Colors } = DefaultVariables;

const RegisterAgency = ({ navigation }: AuthScreenProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [stepOneDatas, setStepOneDatas] = useState<RegisterValues>({});

  console.log('stepOneDatas--------------', stepOneDatas);
  const { t } = useTranslation(['register']);
  const { Layout, darkMode: isDark } = useTheme();

  const steps = [
    {
      label: t('register:step1'),
      component: (
        <StepOne
          stepOneDatas={stepOneDatas.userNumber}
          setStepOneDatas={setStepOneDatas}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ),
    },
    {
      label: t('register:step2'),
      component: (
        <StepTwo
          stepOneDatas={stepOneDatas}
          setStepOneDatas={setStepOneDatas}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      ),
    },
    {
      label: t('register:step3'),
      component: (
        <StepThree activeStep={activeStep} setActiveStep={setActiveStep} />
      ),
    },
  ];
  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.fullHeight,
        Layout.fill,
        Layout.colSeperate,
        {
          backgroundColor: isDark ? Colors.backgroundDark : Colors.white,
        },
      ]}
    >
      <Stepper activeStep={activeStep} steps={steps} />
    </View>
  );
};

export default RegisterAgency;
