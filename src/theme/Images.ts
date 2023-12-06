import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo.png'),
    flight: require('./assets/images/background-login.png'),
    flightCover: require('./assets/images/flight-background.png'),
  };
}
