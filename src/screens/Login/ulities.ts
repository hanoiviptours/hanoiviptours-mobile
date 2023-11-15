import { DefaultVariables } from '../../theme/index';
const { Colors, FontSize, Width } = DefaultVariables;

type Props = {
  label?: { loginButton: string; registerButton: string };
  userPassword?: string;
  userNumber?: string;
};

export const buttonGroup = ({ label, userPassword, userNumber }: Props) => {
  const isInputEmpty = userNumber === '' || userPassword === '' ? true : false;

  const button = [
    {
      title: 'Quên mật khẩu',
      buttonType: 'forgot',
      containerStyle: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
      },
      type: 'clear',
      titleStyle: {
        color: Colors.textLink,
        fontWeight: 400,
      },
    },
    {
      title: label?.loginButton,
      buttonType: 'login',
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
      type: 'primary',
      titleStyle: {
        fontSize: FontSize.small,
        color: isInputEmpty ? Colors.textGray200 : Colors.white,
        fontWeight: 400,
      },
    },
    {
      title: label?.registerButton,
      buttonType: 'register',
      buttonStyle: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.small,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      type: 'primary',
      titleStyle: {
        fontSize: FontSize.small,
        color: Colors.primaryColor,
        fontWeight: 400,
      },
    },
  ];
  return button;
};

interface registerButtonGroupProps {
  registerButton: string;
  agency: string;
  agencyEmployee: string;
}

export const registerButtonGroup = ({
  registerButton,
  agency,
  agencyEmployee,
}: registerButtonGroupProps) => {
  const button = [
    {
      title: registerButton,
      buttonType: 'login',
      avatarSize: 70,
      icon: 'person',
      text: agency,
      iconType: 'material',
      avatarBg: Colors.primaryColor,
      type: 'primary',
      buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.tiny,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      titleStyle: {
        fontSize: FontSize.small,
        color: Colors.white,
        fontWeight: 'bold',
      },
    },
    {
      title: registerButton,
      buttonType: 'login',
      avatarSize: 70,
      icon: 'groups',
      text: agencyEmployee,
      iconType: 'material',
      avatarBg: Colors.primaryColor,
      type: 'primary',
      buttonStyle: {
        backgroundColor: Colors.primaryColor,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        borderRadius: 30,
      },
      containerStyle: {
        width: Width.tiny,
        height: 40,
        marginHorizontal: 30,
        marginVertical: 10,
      },
      titleStyle: {
        fontSize: FontSize.small,
        color: Colors.white,
        fontWeight: 'bold',
      },
    },
  ];
  return button;
};
