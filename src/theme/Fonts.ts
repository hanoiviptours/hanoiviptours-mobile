/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { ThemeVariables } from '../../@types/theme';

export default function ({ FontSize, Colors }: ThemeVariables) {
  return StyleSheet.create({
    textSuperTiny: {
      fontSize: FontSize.superTiny,
      color: Colors.textGray400,
    },
    textTiny: {
      fontSize: FontSize.tiny,
      color: Colors.textGray400,
    },
    colorPrimary: {
      color: Colors.primaryColor,
    },
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.textGray800,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.textGray800,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.textGray800,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    textCapitalize: {
      textTransform: 'capitalize',
    },
    titleSmall: {
      fontSize: FontSize.small * 1.2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.textGray800,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textError: {
      color: Colors.error,
    },
    textSuccess: {
      color: Colors.success,
    },
    textPrimary: {
      color: Colors.primaryColor,
    },
    textLight: {
      color: Colors.textGray200,
    },
    textWhite: {
      color: Colors.white,
    },
    textLobster: {
      fontFamily: 'lobster',
      fontWeight: 'normal',
    },
  });
}
