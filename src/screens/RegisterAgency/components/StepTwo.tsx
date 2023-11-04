import React, { useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../hooks";
import { InputForm, InputPassword } from "../../../components";
import { Button } from "@rneui/themed";
import { registerStepTwo } from "../ulities";

import { RegisterValues } from "../../../../@types/register";
import { useDoRegisterMutation } from "@/services/modules/auth";

type Props = {
  activeStep: number;
  setActiveStep: any;
  stepOneDatas?: RegisterValues;
  setStepOneDatas?: React.Dispatch<RegisterValues> | any;
};

const StepTwo = (
  { stepOneDatas, setStepOneDatas, setActiveStep, activeStep }: Props,
) => {
  const [timers, setTimers] = useState<boolean>(true);
  const { t } = useTranslation(["register"]);
  const {
    Fonts,
    Gutters,
    Layout,
  } = useTheme();

  const [doRegister, { data, isSuccess, isLoading }] = useDoRegisterMutation();

  const registerButtons = registerStepTwo({
    stepOneDatas,
    userPasswordInput: t("register:password"),
    userConfirmPasswordInput: t("register:confirmPassword"),
    otpInput: t("register:otp"),
    continueText: t("register:continue"),
  });
  const handleClick = async () => {
    try {
      await doRegister({
        ...stepOneDatas,
        role: "USER",
      }).unwrap();
      if (isSuccess) {
        console.log("Response data:", data);
        setTimers(false);
        if (activeStep < 3) {
          setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
        }
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const handleRegisterValuesChange = (newValues: RegisterValues) => {
    setStepOneDatas((prevValues: {}) => ({ ...prevValues, ...newValues }));
  };
  return (
    <View
      style={[Layout.center, Layout.fullWidth, Layout.justifyContentBetween]}
    >
      <Text
        style={[
          Fonts.textCenter,
          Fonts.textTiny,
          Gutters.smallBMargin,
          {
            width: "70%",
          },
        ]}
      >
        {t("register:otpSend", { phoneNumber: stepOneDatas?.userNumber })}
      </Text>
      {registerButtons.map((item: any, index: number) => (
        <View key={index} style={[Layout.center, Layout.fullWidth]}>
          {item.isButton
            ? (
              <Button
                key={index}
                title={isLoading ? <ActivityIndicator /> : item.title}
                buttonStyle={{ ...item.buttonStyle }}
                containerStyle={{ ...item.containerStyle }}
                type={item.type}
                disabled={item.disabled}
                onPress={handleClick}
                titleStyle={{ ...item.titleStyle }}
              />
            )
            : item.isPassword
            ? (
              <InputPassword
                key={index}
                text={item.text}
                onChangeText={(password: string) =>
                  handleRegisterValuesChange({ [item.key]: password })}
                styles={[Fonts.textBold]}
                placeholder={item.placeholder}
              />
            )
            : (
              <InputForm
                key={index}
                text={item.text}
                onChangeText={(otp: string) =>
                  handleRegisterValuesChange({ [item.key]: otp })}
                styles={[Fonts.textBold]}
                placeholder={item.placeholder}
                description={item.description}
                keyboardType={item.keyboardType}
                timers={timers}
                setTimers={setTimers}
              />
            )}
        </View>
      ))}
    </View>
  );
};

export default StepTwo;
