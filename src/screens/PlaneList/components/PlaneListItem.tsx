import React, { useState, useRef, useCallback, Fragment } from 'react';
import { View, Platform, Text } from 'react-native';
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
} from '../components/PlaneListItemElements';

type IPlaneListItemProps = {
  flightInfos: [];
};

const PlaneListItem = React.memo(({ flightInfos }: IPlaneListItemProps) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { Gutters, Layout, Fonts } = useTheme();

  return (
    <ShadowBox
      style={[
        Layout.fill,
        Layout.row,
        Layout.justifyContentBetween,
        Gutters.smallLMargin,
        Gutters.smallRMargin,
        Gutters.smallTPadding,
        Gutters.tinyBMargin,
        Gutters.tinyTMargin,
        Gutters.tinyLPadding,
        {
          backgroundColor: Colors.white,
          borderRadius: 10,
          height: 'auto',
          maxHeight: 140,
        },
      ]}
    >
      <View style={[Layout.col, Layout.justifyContentCenter]}>
        <FlightBrandRender
          brand="Vietnam Airlines "
          planeName="Airbus A321 (sharklets)"
        />
        <FlightTimeRender
          takeOffTime={'22:00'}
          landingTime="23:00"
          duration="2h 0m"
          note="+1d"
        />

        <FlightDestinationRender
          startDestination="HAN"
          endDestination="SGN"
          flightType="Bay thẳng"
        />
      </View>
      <FlightPriceRender flightNumber="VN 983" price={3000000} />
    </ShadowBox>
  );
});

export default PlaneListItem;

