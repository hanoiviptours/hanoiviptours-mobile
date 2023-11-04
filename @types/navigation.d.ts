import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Main: undefined;
  Auth: undefined;
};

export type AuthParamsList = {
  Register: undefined;
  Login: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
  Auth: NavigatorScreenParams<AuthParamsList>;
};

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  RegisterAgency: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type AuthScreenProps = StackScreenProps<AuthStackParamList>;
