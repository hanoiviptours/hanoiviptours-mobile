import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { ShadowBox } from '@/components';
import {
  FlightTimeRender,
  FlightDestinationRender,
  FlightBrandRender,
  FlightPriceRender,
  RenderIcon,
} from '../components/PlaneListItemElements';
import { getAirlineInfos } from '../ulities';
import { setFlightInfo } from '@/store/flight';

type IPlaneListItemProps = {
  flightInfos: any;
  navigation: any;
};

const PlaneListItem = ({ flightInfos, navigation }: IPlaneListItemProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { Gutters, Layout } = useTheme();
  const flightSegments = flightInfos.itineraries[0].segments[0];
  const flightPrice = flightInfos.price;

  const airlineInfos = getAirlineInfos(
    flightSegments.carrierCode,
    flightSegments.aircraft.code,
    flightInfos.itineraries[0].duration,
    flightSegments.departure,
    flightSegments.arrival,
    flightSegments.number,
    flightPrice.grandTotal,
    flightPrice.currency,
    flightInfos.lastTicketingDateTime,
  );
  const {
    name,
    icon,
    aircraftName,
    durationTime,
    takeOffTime,
    landingTime,
    airportLocation,
    landingAirportLocation,
    flightCodeNumber,
    flightTotalPrice,
  } = airlineInfos;

  const navigationToDetail = useCallback(() => {
    dispatch(setFlightInfo(airlineInfos));
    navigation.navigate('PlaneDetail');
  }, [airlineInfos]);

  return (
    <TouchableOpacity onPress={navigationToDetail}>
      <ShadowBox
        style={[
          Layout.fill,
          Layout.row,
          Layout.justifyContentBetween,
          Gutters.tinyLMargin,
          Gutters.tinyRMargin,
          Gutters.smallTPadding,
          Gutters.tinyBMargin,
          Gutters.tinyTMargin,
          Gutters.tinyLPadding,
          {
            backgroundColor: Colors.white,
            borderRadius: 10,
            height: 'auto',
            maxHeight: 145,
          },
        ]}
      >
        <View style={[Layout.col, Layout.justifyContentCenter]}>
          <FlightBrandRender
            brand={name}
            icon={RenderIcon(icon, 30)}
            planeName={aircraftName}
          />
          <FlightTimeRender
            takeOffTime={takeOffTime}
            landingTime={landingTime}
            duration={durationTime}
            note="+1d"
          />

          <FlightDestinationRender
            startDestination={airportLocation}
            endDestination={landingAirportLocation}
            flightType="Bay thẳng"
          />
        </View>
        <FlightPriceRender
          flightNumber={flightCodeNumber || ''}
          price={flightTotalPrice}
        />
      </ShadowBox>
    </TouchableOpacity>
  );
};

export default PlaneListItem;
