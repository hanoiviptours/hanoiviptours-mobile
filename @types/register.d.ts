import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type RegisterValues = {
  userName?: string;
  userNumber?: string;
  userEmail?: string;
  referral?: string;
  userPassword?: string;
  userConfirmPassword?: string;
  otp?: string;
};
