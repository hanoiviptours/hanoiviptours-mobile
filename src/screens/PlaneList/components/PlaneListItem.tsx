import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
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
import { ICustomerInfomations } from 'types/flight';
import { formatDate } from '@/utils';
import { IFlightResponseInfos } from 'types/flight';

type IPlaneListItemProps = {
  flightInfos: IFlightResponseInfos;
  navigation: any;
};

const PlaneListItem = ({ flightInfos, navigation }: IPlaneListItemProps) => {
  const { Gutters, Layout } = useTheme();

  const currentFlightInfos = useSelector((state: any) => state.flight);
  const currentCustomer = currentFlightInfos.customers;

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
    const flightAvailableBody = {
      originDestinations: {
        id: '1',
        originLocationCode: flightSegments.departure.iataCode,
        destinationLocationCode: flightSegments.arrival.iataCode,
        departureDateTime: {
          date: formatDate(flightSegments.departure.at, 'YYYY-MM-DD'),
          time: formatDate(flightSegments.departure.at, 'HH:mm:ss'),
        },
      },
      travelers: currentCustomer.map(
        (item: ICustomerInfomations, index: number) => ({
          id: (index + 1).toString(),
          travelerType: item.key.toUpperCase().replace('S', ''),
        }),
      ),
      carrierCode: flightSegments.carrierCode,
      number: flightSegments.number,
      cabin: flightInfos.travelerPricings[0].fareDetailsBySegment[0].cabin,
    };
    navigation.navigate('PlaneDetail', {
      flightAvailableBody: flightAvailableBody,
      airlineInfos: airlineInfos,
      currentFlight: flightInfos,
    });
  }, [flightInfos, currentCustomer, navigation]);

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
