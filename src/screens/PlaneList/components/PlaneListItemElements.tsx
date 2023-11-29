import React from 'react';
import { View, Platform, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { VjIcon, VnaIcon } from '@/theme/assets/icons';
import { formatMoney } from '@/utils';

interface IFlightTimeRenderProps {
  takeOffTime?: string;
  landingTime?: string;
  duration?: string;
  note?: string;
  startDestination?: string;
  endDestination?: string;
  time?: string;
  flightType?: string;
}

interface IFlightBrandProps {
  brand?: string;
  planeName?: string;
}

export const FlightTime: React.FC<IFlightTimeRenderProps> = ({ time }) => {
  const { Gutters, Fonts } = useTheme();
  return (
    <Text style={[Gutters.tinyTMargin, Fonts.textSmall, { fontWeight: 600 }]}>
      {time}
    </Text>
  );
};

export const FlightTimeRender: React.FC<IFlightTimeRenderProps> = ({
  takeOffTime,
  landingTime,
  duration,
  note,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();
  return (
    <View style={[Layout.row, Gutters.tinyTMargin, Gutters.tinyBMargin]}>
      <FlightTime time={takeOffTime} />
      <View
        style={[
          Gutters.tinyBMargin,
          Layout.center,
          Gutters.tinyLMargin,
          Gutters.tinyRMargin,
          {
            width: '23%',
            borderBottomColor: Colors.textGray150,
            borderBottomWidth: 2,
            paddingBottom: 3,
          },
        ]}
      >
        <Text style={[Fonts.textTiny]}>{duration}</Text>
      </View>
      <FlightTime
        time={landingTime}
        takeOffTime={''}
        landingTime={''}
        duration={''}
        note={''}
        startDestination={''}
        endDestination={''}
      />
      <Text style={[Gutters.tinyTMargin, Fonts.textTiny, { marginLeft: 5 }]}>
        {note}
      </Text>
    </View>
  );
};

export const FlightDestinationRender: React.FC<IFlightTimeRenderProps> = ({
  startDestination,
  endDestination,
  flightType,
}) => {
  const { Fonts, Layout, Gutters } = useTheme();
  return (
    <View style={[Layout.row, Layout.alignItemsCenter, Gutters.smallBMargin]}>
      <View style={{ backgroundColor: Colors.textGray150, borderRadius: 3 }}>
        <Text style={[Fonts.textTiny, { padding: 5 }]}>{startDestination}</Text>
      </View>
      <Text
        style={[
          Fonts.textSuperTiny,
          Layout.center,
          { paddingLeft: 13, paddingRight: 13 },
        ]}
      >
        {flightType}
      </Text>
      <View style={{ backgroundColor: Colors.textGray150, borderRadius: 3 }}>
        <Text style={[Fonts.textTiny, { padding: 5 }]}>{endDestination}</Text>
      </View>
    </View>
  );
};

export const FlightBrandRender: React.FC<IFlightBrandProps> = ({
  brand,
  planeName,
}) => {
  const { Fonts, Layout } = useTheme();
  return (
    <>
      <View style={[Layout.row, Layout.alignItemsCenter, { paddingLeft: 3 }]}>
        <VnaIcon width={30} height={30} />
        <Text style={[Fonts.textTiny, { paddingLeft: 5, paddingTop: 5 }]}>
          {brand}
        </Text>
      </View>

      <Text style={[Fonts.textTiny, Layout.alignItemsStart, { paddingTop: 5 }]}>
        {planeName}
      </Text>
    </>
  );
};

export const FlightPriceRender: React.FC<
  IFlightTimeRenderProps & {
    flightNumber: string;
    price: number;
  }
> = ({ flightNumber, price }) => {
  const { Fonts, Layout } = useTheme();
  return (
    <View style={[Layout.col, Layout.justifyContentCenter]}>
      <Text style={[Fonts.textTiny, { marginLeft: 'auto' }]}>
        {flightNumber}
      </Text>
      <Text style={[Fonts.textSmall, Fonts.textBold, { color: Colors.orange }]}>
        {formatMoney(price || 0, 'VND')}
      </Text>
    </View>
  );
};
