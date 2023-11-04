import { DefaultVariables } from "../../theme/index";
const { Colors, FontSize, Width } = DefaultVariables;
import { RegisterValues } from "../../../@types/register";

type Props = {
  userNameInput: string;
  userEmailInput?: string;
  userNumberInput?: string;
  descriptionText?: string;
  referralInput?: string;
  register?: string;
  stepOneDatas?: RegisterValues;
};

export const registerStepOne = ({
  stepOneDatas,
  userNameInput,
  userEmailInput,
  userNumberInput,
  referralInput,
  register,
  descriptionText,
}: Props) => {
  const { userName, userEmail, userNumber, referral } = stepOneDatas ?? {};
  const isInputEmpty = userNumber === "" && userEmail === "" && userName === ""
    ? true
    : false;
  const button = [
    {
      text: userName,
      isButton: false,
      width: Width.medium,
      placeholder: userNameInput,
      description: "",
      keyboardType: "default",
      key: "name",
    },
    {
      text: userEmail,
      isButton: false,
      width: Width.medium,
      placeholder: userEmailInput,
      description: "",
      keyboardType: "default",
      key: "email",
    },
    {
      text: userNumber,
      isButton: false,
      width: Width.medium,
      placeholder: userNumberInput,
      description: descriptionText,
      keyboardType: "numeric",
      key: "phone-number",
    },
    {
      text: referral,
      isButton: false,
      width: Width.medium,
      placeholder: referralInput,
      description: "",
      keyboardType: "numeric",
      key: "referral",
    },
    {
      title: register,
      isButton: true,
      disabled: isInputEmpty,
      buttonStyle: {
        backgroundColor: isInputEmpty ? Colors.white : Colors.primaryColor,
        borderWidth: 1,
        borderColor: isInputEmpty ? Colors.textGray200 : Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.small,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      type: "primary",
      titleStyle: {
        fontSize: FontSize.small,
        color: isInputEmpty ? Colors.textGray200 : Colors.white,
        fontWeight: 400,
      },
    },
  ];
  return button;
};

type RegisterStepTwoProps = {
  stepOneDatas?: RegisterValues;
  userPasswordInput?: string;
  userConfirmPasswordInput?: string;
  otpInput?: string;
  continueText?: string;
};

export const registerStepTwo = ({
  stepOneDatas,
  userPasswordInput,
  userConfirmPasswordInput,
  otpInput,
  continueText,
}: RegisterStepTwoProps) => {
  const { userPassword, userConfirmPassword, otp } = stepOneDatas ?? {};

  const isInputEmpty =
    userPassword === "" && userConfirmPassword === "" && otp === ""
      ? true
      : false;
  const button = [
    {
      text: userPassword,
      isButton: false,
      isPassword: true,
      width: Width.medium,
      placeholder: userPasswordInput,
      description: "",
      keyboardType: "default",
      key: "password",
    },
    {
      text: userConfirmPassword,
      isButton: false,
      isPassword: true,
      width: Width.medium,
      placeholder: userConfirmPasswordInput,
      description: "",
      keyboardType: "default",
      key: "confirmPassword",
    },
    {
      text: otp,
      isButton: false,
      isPassword: false,
      width: Width.medium,
      placeholder: otpInput,
      description: "",
      keyboardType: "default",
      key: "otp",
    },
    {
      title: continueText,
      isButton: true,
      disabled: isInputEmpty,
      buttonStyle: {
        backgroundColor: isInputEmpty ? Colors.white : Colors.primaryColor,
        borderWidth: 1,
        borderColor: isInputEmpty ? Colors.textGray200 : Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.small,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      type: "primary",
      titleStyle: {
        fontSize: FontSize.small,
        color: isInputEmpty ? Colors.textGray200 : Colors.white,
        fontWeight: 400,
      },
    },
  ];
  return button;
};
type stepThreeIdProps = {
  titleFront: string;
  titleBack: string;
};
export const registerStepThreeID = (
  { titleFront, titleBack }: stepThreeIdProps,
) => {
  const button = [
    {
      space: "regular",
      width: "large",
      title: titleFront,
    },
    {
      space: "regular",
      width: "large",
      title: titleBack,
    },
  ];
  return button;
};

export const registerBusiness = () => {
  const button = [
    {
      width: "regular",
    },
    {
      width: "regular",
    },
    {
      width: "regular",
    },
  ];
  return button;
};

type guidelinesProps = {
  header: string;
  guidelineOne: string;
  guidelineTwo: string;
  guidelineThree: string;
};
export const registerGuidelines = ({
  header,
  guidelineOne,
  guidelineTwo,
  guidelineThree,
}: guidelinesProps) => {
  const button = [
    {
      title: header,
      color: Colors.primaryColor,
    },
    {
      title: guidelineOne,
      color: "",
    },
    {
      title: guidelineTwo,
      color: "",
    },
    {
      title: guidelineThree,
      color: "",
    },
  ];
  return button;
};
type stepThreeProps = {
  title: string;
  isInputEmpty: boolean;
};
export const stepThreeSubmit = ({ title, isInputEmpty }: stepThreeProps) => {
  const button = [
    {
      title: title,
      disabled: isInputEmpty,
      buttonStyle: {
        backgroundColor: isInputEmpty ? Colors.white : Colors.primaryColor,
        borderWidth: 1,
        borderColor: isInputEmpty ? Colors.textGray200 : Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.small,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      type: "primary",
      titleStyle: {
        fontSize: FontSize.small,
        color: isInputEmpty ? Colors.textGray200 : Colors.white,
        fontWeight: 400,
      },
    },
  ];
  return button;
};
