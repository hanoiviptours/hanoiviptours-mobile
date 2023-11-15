import { ThemeVariables } from '../../@types/theme';

export default function ({}: ThemeVariables) {
  return {
    logo: require('./assets/images/logo.png'),
    flight: require('./assets/images/background-login.png'),
    icons: {
      plane: require('./assets/icons/plane.svg'),
      hotel: require('./assets/icons/hotel.svg'),
      ticket: require('./assets/icons/ticket.svg'),
    },
  };
}
