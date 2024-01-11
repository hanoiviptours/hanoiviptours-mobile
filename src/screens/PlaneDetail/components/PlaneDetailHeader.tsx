import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { Image, ShadowBox, Icon } from '@/components';
import {
  FlightPriceRender,
  FlightBrandRender,
  RenderIcon,
} from '../../PlaneList/components/PlaneListItemElements';
import { IAirlineInfo } from '../../PlaneList/ulities';

type PlaneListHeaderProps = {
  pan?: any;
  airlineInfos: IAirlineInfo;
};

type IFlightHoursDestination = {
  time: string;
  date?: Date | string;
  airportLocation?: string;
  airport: string;
};
const FlightHoursDestination: React.FC<IFlightHoursDestination> = ({
  time,
  date,
  airportLocation,
  airport,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();
  return (
    <View style={[Layout.fill, Layout.center, Gutters.tinyTMargin]}>
      <View style={[Layout.col]}>
        <Text
          style={[Fonts.textTiny, { color: '#212121', fontWeight: '400' }]}
        >{`${time}, ${date}`}</Text>
      </View>
      <View style={[Layout.col, Layout.center]}>
        <Text
          style={[
            Fonts.titleSmall,
            {
              color: Colors.primaryColor,
              fontWeight: '600',
              paddingTop: 7,
              paddingBottom: 3,
            },
          ]}
        >
          {airportLocation}
        </Text>
        <Text style={[Fonts.textTiny, { color: '#212121' }]}>{airport}</Text>
      </View>
    </View>
  );
};

const FlightContents: React.FC<PlaneListHeaderProps> = ({ airlineInfos }) => {
  const { Gutters, Layout, Fonts } = useTheme();

  const {
    name,
    airport,
    landingAirport,
    icon,
    durationTime,
    takeOffTime,
    landingTime,
    airportLocation,
    landingAirportLocation,
    flightCodeNumber,
    flightDateTime,
  } = airlineInfos;
  return (
    <TouchableOpacity>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Gutters.tinyLPadding,
          Gutters.tinyRPadding,
          {
            borderBottomColor: Colors.textGray150,
            borderBottomWidth: 2,
            paddingBottom: 5,
            paddingTop: 5,
          },
        ]}
      >
        <FlightBrandRender
          brand={name}
          icon={RenderIcon(icon, 30)}
          fontSize="small"
        />
        <FlightPriceRender flightNumber={flightCodeNumber ?? ''} />
      </View>
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <FlightHoursDestination
          time={takeOffTime || ''}
          date={flightDateTime}
          airportLocation={airportLocation}
          airport={airport}
        />
        <View
          style={[
            Gutters.smallTMargin,
            {
              width: '10%',
              borderBottomColor: Colors.textGray150,
              borderBottomWidth: 2,
            },
          ]}
        />
        <View style={[Gutters.smallTMargin]}>
          <Icon
            name="airplane"
            type="material-community"
            size={20}
            style={[Gutters.smallTMargin]}
          />
          <Text
            style={[
              Fonts.textTiny,
              Fonts.textCenter,
              Gutters.tinyLPadding,
              { color: Colors.textGray200, paddingTop: 5 },
            ]}
          >
            {durationTime}
          </Text>
        </View>
        <View
          style={[
            Gutters.smallTMargin,
            Gutters.tinyLMargin,
            {
              width: '10%',
              borderBottomColor: Colors.textGray150,
              borderBottomWidth: 2,
              paddingBottom: 3,
            },
          ]}
        />
        <FlightHoursDestination
          time={landingTime || ''}
          date={flightDateTime}
          airportLocation={landingAirportLocation}
          airport={landingAirport}
        />
      </View>

      <View
        style={[
          Layout.row,
          Layout.center,
          Gutters.smallTMargin,
          Gutters.tinyBMargin,
        ]}
      >
        <Icon
          name="error"
          type="material"
          size={20}
          color={Colors.warning}
          style={{ paddingRight: 3 }}
        />
        <Text style={{ color: Colors.warning }}>Chi tiết chặng bay</Text>
      </View>
    </TouchableOpacity>
  );
};

const PlaneDetailHeader = forwardRef(
  ({ pan, airlineInfos }: PlaneListHeaderProps, ref) => {
    const { Gutters } = useTheme();
    return (
      <>
        <Image
          pan={pan}
          height={200}
          width="100%"
          mode="cover"
          src="flightCover"
          isAnimated
        />

        <ShadowBox
          style={[
            Gutters.tinyLMargin,
            Gutters.tinyRMargin,
            {
              backgroundColor: Colors.white,
              borderRadius: 10,
              height: 'auto',
              maxHeight: 170,
              top: -43,
              padding: 0,
            },
          ]}
        >
          <FlightContents airlineInfos={airlineInfos} />
        </ShadowBox>
      </>
    );
  },
);

export default PlaneDetailHeader;
