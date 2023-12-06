import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { VjIcon, VnaIcon, QhIcon } from '@/theme/assets/icons';

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
            borderBottomColor: Colors.textGray200,
            borderBottomWidth: 1,
            paddingBottom: 3,
          },
        ]}
      >
        <Text style={[Fonts.textTiny]}>{duration}</Text>
      </View>
      <FlightTime time={landingTime} />
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

export interface IFlightBrandProps {
  brand?: string;
  planeName?: string;
  icon: React.ReactNode;
  fontSize?: 'tiny' | 'small';
}

export const FlightBrandRender: React.FC<IFlightBrandProps> = ({
  brand,
  planeName,
  icon,
  fontSize = 'tiny',
}) => {
  const { Fonts, Layout } = useTheme();
  const textStyle = fontSize === 'tiny' ? Fonts.textTiny : Fonts.textSmall;

  return (
    <>
      <View style={[Layout.row, Layout.alignItemsCenter, { paddingLeft: 3 }]}>
        {icon}
        <Text style={[textStyle, { paddingLeft: 5, paddingTop: 5 }]}>
          {brand}
        </Text>
      </View>

      {planeName && (
        <Text
          style={[
            textStyle,
            Layout.alignItemsStart,
            Fonts.textCapitalize,
            { paddingTop: 5 },
          ]}
        >
          {planeName}
        </Text>
      )}
    </>
  );
};

export const FlightPriceRender: React.FC<
  IFlightTimeRenderProps & {
    flightNumber: string;
    price?: string;
  }
> = ({ flightNumber, price }) => {
  const { Fonts, Layout } = useTheme();
  return (
    <View style={[Layout.col, Layout.justifyContentCenter]}>
      <Text style={[Fonts.textTiny, { marginLeft: 'auto' }]}>
        {flightNumber}
      </Text>
      {price && (
        <Text
          style={[Fonts.textSmall, Fonts.textBold, { color: Colors.orange }]}
        >
          {price}
        </Text>
      )}
    </View>
  );
};

export const RenderIcon = (brand?: string, size?: number) => {
  switch (brand) {
    case 'VJ':
      return <VjIcon width={size} height={size} />;
    case 'VN':
      return <VnaIcon width={size} height={size} />;
    case 'QH':
      return <QhIcon width={size} height={size} />;
    default:
      return null;
  }
};
