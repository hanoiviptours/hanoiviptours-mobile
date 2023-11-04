import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo.png'),
    flight: require('./assets/images/background-login.png'),
    icons: {
      colors: require('./assets/images/colorswatch.png'),
      send: require('./assets/images/send.png'),
      translate: require('./assets/images/translate.png'),
    },
  };
}
