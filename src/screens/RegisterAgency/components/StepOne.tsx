import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../hooks';

import { InputForm } from '../../../components';
import { Button } from '@rneui/themed';
import { registerStepOne } from '../ulities';
import { RegisterValues } from '../../../../@types/register';

type StepOneProps = {
  activeStep?: number | 0;
  setActiveStep?: React.Dispatch<React.SetStateAction<number>> | any;
  stepOneDatas?: RegisterValues;
  setStepOneDatas?: React.Dispatch<React.SetStateAction<RegisterValues>> | any;
};

const StepOne = ({
  setActiveStep,
  activeStep = 0,
  setStepOneDatas,
  stepOneDatas = {},
}: StepOneProps) => {
  const { t } = useTranslation(['register']);
  const { Fonts, Layout } = useTheme();

  const stepOne = registerStepOne({
    stepOneDatas,
    userNameInput: t('register:userName'),
    userEmailInput: t('register:userEmail'),
    userNumberInput: t('register:userNumber'),
    descriptionText: t('register:register'),
    referralInput: t('register:referral'),
    register: t('register:send'),
  });

  const handleRegisterValuesChange = (newValues: RegisterValues) => {
    setStepOneDatas((prevValues: RegisterValues) => ({
      ...prevValues,
      ...newValues,
    }));
  };

  const handleClick = () => {
    if (activeStep < 3) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    }
  };

  return (
    <View
      style={[Layout.center, Layout.fullWidth, Layout.justifyContentBetween]}
    >
      {stepOne.map((stepItem: any, index: number) => (
        <View key={index} style={[Layout.fullWidth, Layout.center]}>
          {stepItem.isButton ? (
            <Button
              title={stepItem.title}
              buttonStyle={{ ...stepItem.buttonStyle }}
              containerStyle={{ ...stepItem.containerStyle }}
              type={stepItem.type}
              disabled={stepItem.disabled}
              onPress={handleClick}
              titleStyle={{ ...stepItem.titleStyle }}
            />
          ) : (
            <InputForm
              text={stepItem.text}
              onChangeText={(value: string) =>
                handleRegisterValuesChange({ [stepItem.key]: value })
              }
              styles={[Fonts.textBold]}
              placeholder={stepItem.placeholder}
              description={stepItem.description}
              keyboardType={stepItem.keyboardType}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default StepOne;
