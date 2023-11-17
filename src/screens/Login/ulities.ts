import { DefaultVariables } from '../../theme/index';
const { Colors, FontSize, Width } = DefaultVariables;

type buttonGroupProps = {
  label?: { loginButton: string; registerButton: string };
  userPassword?: string;
  userNumber?: string;
};

export const buttonGroup = ({ label }: buttonGroupProps) => {
  const button = [
    {
      title: 'Quên mật khẩu',
      buttonType: 'forgot',
      type: 'clear',
    },
    {
      title: label?.loginButton,
      buttonType: 'login',
      type: 'primary',
    },
    {
      title: label?.registerButton,
      buttonType: 'register',
      type: 'outline',
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
