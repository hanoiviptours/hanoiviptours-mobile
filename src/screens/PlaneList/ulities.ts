import { formatMoney, formatDate } from '@/utils';

type AirlinesDictionary = {
  locations: {
    [key: string]: {
      cityCode: string;
      airport: string;
      countryCode: string;
    };
  };
  aircraft: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: string;
  };
  carriers: {
    [key: string]: string;
  };
  icons: {
    [key: string]: any;
  };
};

const airlinesDictionary: AirlinesDictionary = {
  locations: {
    DLI: {
      cityCode: 'DLI',
      airport: 'Liên Khương',
      countryCode: 'VN',
    },
    PQC: {
      cityCode: 'PQC',
      airport: 'Phú Quốc',
      countryCode: 'VN',
    },
    HAN: {
      cityCode: 'HAN',
      airport: 'Nội Bài',
      countryCode: 'VN',
    },
    UIH: {
      cityCode: 'UIH',
      airport: 'Phú Cát',
      countryCode: 'VN',
    },
    DAD: {
      cityCode: 'DAD',
      airport: 'Đà Nẵng',
      countryCode: 'VN',
    },
    VCS: {
      cityCode: 'VCS',
      airport: 'Côn Đảo',
      countryCode: 'VN',
    },
    SGN: {
      cityCode: 'SGN',
      airport: 'Tân Sơn Nhất',
      countryCode: 'VN',
    },
    PXU: {
      cityCode: 'PXU',
      airport: 'Pleiku',
      countryCode: 'VN',
    },
    CXR: {
      cityCode: 'NHA',
      airport: 'Cam Ranh',
      countryCode: 'VN',
    },
    HUI: {
      cityCode: 'HUI',
      airport: 'Phú Bài',
      countryCode: 'VN',
    },
  },
  aircraft: {
    '320': 'AIRBUS A320',
    '321': 'AIRBUS A321',
    '330': 'AIRBUS INDUSTRIE A330',
    '359': 'AIRBUS A350-900',
    '787': '787  ALL SERIES PASSENGER',
    '32S': 'AIRBUS INDUSTRIE A318/A319/A320/A321',
    E90: 'EMBRAER 190',
  },
  currencies: {
    EUR: 'EURO',
  },
  carriers: {
    A1: 'A.P.G. DISTRIBUTION SYSTEM',
    VJ: 'Vietjet Air',
    QH: 'Bamboo Airways',
    VN: 'Vietnam Airlines',
    H1: 'HAHN AIR SYSTEMS',
    BL: 'Pacific Airlines',
    W2: 'FLEXFLIGHT',
  },
  icons: {
    VJ: 'VJ',
    VN: 'VN',
    QH: 'QH',
  },
};

type ILocationTime = {
  iataCode: string;
  terminal: string;
  at: string;
};
export interface IAirlineInfo {
  name?: string;
  airport: string;
  landingAirport: string;
  icon?: string;
  aircraftName?: string;
  durationTime?: string;
  takeOffTime?: string;
  landingTime?: string;
  airportLocation?: string;
  landingAirportLocation?: string;
  flightCodeNumber?: string;
  flightTotalPrice?: string;
  flightDateTime?: string;
}
export const getAirlineInfos = (
  carrierCode: string,
  aircraftNumber: string,
  duration: string,
  departure: ILocationTime,
  arrival: ILocationTime,
  flightNumber: string,
  price: string,
  currency: string,
  flightDateTime: Date | string,
): IAirlineInfo => {
  const { carriers, aircraft, locations } = airlinesDictionary;
  const { at: takeOffTime, iataCode: airportLocation } = departure;
  const { at: landingTime, iataCode: landingAirportLocation } = arrival;

  const formatDuration = (duration: string) => {
    const hourRegex = /(\d+)H/;
    const minuteRegex = /(\d+)M/;

    const matchesHour = duration.match(hourRegex);
    const matchesMinute = duration.match(minuteRegex);

    const formattedDuration = `${matchesHour?.[1]}h ${
      matchesMinute ? matchesMinute?.[1] : 0
    }m`;

    return formattedDuration;
  };
  const flightPrice = formatMoney(Number(price), currency);

  return {
    name: carriers[carrierCode],
    airport: locations[airportLocation]?.airport,
    landingAirport: locations[landingAirportLocation]?.airport,
    icon: airlinesDictionary?.icons[carrierCode],
    aircraftName: aircraft[aircraftNumber],
    durationTime: formatDuration(duration),
    takeOffTime: formatDate(takeOffTime, 'HH:mm'),
    landingTime: formatDate(landingTime, 'HH:mm'),
    airportLocation: airportLocation,
    landingAirportLocation: landingAirportLocation,
    flightCodeNumber: `${carrierCode}${flightNumber}`,
    flightTotalPrice: flightPrice || '0',
    flightDateTime: formatDate(flightDateTime, 'DD/MM/YYYY'),
  };
};
