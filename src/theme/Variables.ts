/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { ThemeNavigationColors } from '../../@types/theme';

/**
 * Colors
 */
export const Colors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  black: '#000000',
  orange: '#FE6B37',
  backgroundDark: '#DFDFDF',
  //Typography
  primaryColor: '#2FA2C1',
  sencondaryColor: '#23CDDD',
  textTransparent: 'rgba(92, 99,216, 1)',
  textLink: 'rgba(78, 116, 289, 1)',
  textGray800: '#000000',
  textGray400: '#4D4D4D',
  textGray300: '#727272',
  textGray200: '#A1A1A1',
  textGray150: '#e2e2e2',
  textGray100: '#f5f5f5',
  primary: '#E14032',
  success: '#28a745',
  error: '#dc3545',
  //ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  circleButtonColorDark: '#FFFFFF',
};

export const AuthNavigator = {
  login: 'LOGIN',
  register: 'REGISTER',
  forgot_password: 'FORGOT_PASSWORD',
};

export const Icons = {
  phone: 'phone',
  eye: 'eye',
  eyeOff: 'eye-off',
  person: 'person',
  groups: 'groups',
  lock: 'lock',
  switchTheme: 'theme-light-dark',
  translate: 'translate',
};
export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#EFEFEF',
  card: '#EFEFEF',
};

/**
 * FontSize
 */
export const FontSize = {
  superTiny: 11,
  tiny: 13,
  small: 15,
  regular: 17,
  large: 40,
};
export const Width = {
  tiny: 100,
  small: 360,
  medium: 380,
  regular: 400,
  large: 420,
};
export const FontFamily = {
  primary: 'Roboto-Regular',
  bold: 'Roboto-Bold',
  thin: 'Roboto-Thin',
  medium: 'Roboto-Medium',
};
/** Images
 * Metrics Sizes
 */
const superTiny = 5;
const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  superTiny,
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontFamily,
  Width,
  FontSize,
  Icons,
  MetricsSizes,
  AuthNavigator,
};
