import React, { FC, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useTheme, useGetAvailableClasses } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { BoxIconText } from '@/components';
import { formatMoney } from '@/utils';
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import FlightClassSkeleton from './Skeletons/FlightClassSkeleton';
import ClassSeatSkeleton from './Skeletons/ClassSeatSkeleton';
import PriceSkeleton from './Skeletons/PriceSkeleton';

interface ITicketClassSeats {
  availableFares: {
    class: string;
    numberOfBookableSeats: number;
    body: any;
  }[];
  isTicketClassLoading: boolean;
  selectedSeat: string;
  onPickedClassSeat: (
    selectedSeat: string,
    price: string,
    numberOfBookableSeats: number,
  ) => void;
}
export const TicketClassSeats: FC<ITicketClassSeats> = ({
  selectedSeat,
  availableFares,
  onPickedClassSeat,
  isTicketClassLoading,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();

  const renderSkeletons = useCallback(() => {
    return Array.from({ length: 3 }).map((_, index) => (
      <View key={index}>
        <ClassSeatSkeleton />
      </View>
    ));
  }, [isTicketClassLoading]);
  const isSelectedSeat = useCallback(
    (itemClass: string) => selectedSeat === itemClass,
    [selectedSeat],
  );

  const getBorderColor = useCallback(
    (itemClass: string) =>
      isSelectedSeat(itemClass) ? 'transparent' : Colors.textGray200,
    [isSelectedSeat],
  );

  const getBackgroundColor = useCallback(
    (itemClass: string) =>
      isSelectedSeat(itemClass) ? Colors.primaryColor : Colors.white,
    [isSelectedSeat],
  );

  const getSeatTextColor = useCallback(
    (itemClass: string) =>
      isSelectedSeat(itemClass) ? Colors.primaryColor : Colors.black,
    [isSelectedSeat],
  );

  const getSeatFontWeight = useCallback(
    (itemClass: string) => (isSelectedSeat(itemClass) ? '600' : '300'),
    [isSelectedSeat],
  );

  const getPriceTextColor = useCallback(
    (itemClass: string) =>
      isSelectedSeat(itemClass) ? Colors.white : Colors.black,
    [isSelectedSeat],
  );

  const getPriceFontWeight = useCallback(
    (itemClass: string) => (isSelectedSeat(itemClass) ? '600' : '400'),
    [isSelectedSeat],
  );

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {isTicketClassLoading && renderSkeletons()}
        {availableFares &&
          !isTicketClassLoading &&
          availableFares.map(item => (
            <TouchableOpacity
              key={item.class}
              style={[
                Layout.row,
                Layout.center,
                Gutters.tinyLMargin,
                {
                  borderWidth: 1,
                  borderRadius: 30,
                  paddingLeft: 3,
                  paddingRight: 10,
                  width: 'auto',
                  borderColor: getBorderColor(item.class),
                  backgroundColor: getBackgroundColor(item.class),
                },
              ]}
              onPress={() =>
                onPickedClassSeat?.(
                  item.class,
                  item.body.price.grandTotal,
                  item.numberOfBookableSeats,
                )
              }
            >
              <View
                style={[
                  Layout.center,
                  {
                    borderRadius: 30,
                    width: 60,
                    padding: 2,
                    marginTop: 2,
                    marginBottom: 2,
                    marginRight: 5,
                    backgroundColor: isSelectedSeat(item.class)
                      ? Colors.white
                      : Colors.textGray150,
                  },
                ]}
              >
                <Text
                  style={[
                    Fonts.textTiny,
                    {
                      color: getSeatTextColor(item.class),
                      fontWeight: getSeatFontWeight(item.class),
                    },
                  ]}
                >
                  {item.class}
                </Text>
                <Text
                  style={[
                    Fonts.textTiny,
                    {
                      color: getSeatTextColor(item.class),
                      marginTop: -1,
                      fontWeight: getSeatFontWeight(item.class),
                    },
                  ]}
                >
                  {`${item.numberOfBookableSeats} chỗ`}
                </Text>
              </View>
              <View>
                <Text
                  style={[
                    Fonts.textTiny,
                    {
                      color: getPriceTextColor(item.class),
                      fontWeight: getPriceFontWeight(item.class),
                    },
                  ]}
                >
                  {formatMoney(item.body.price.grandTotal, 'VND')}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export const FlightDivider: FC<{ selectedClass: string }> = ({
  selectedClass,
}) => {
  const { Layout } = useTheme();
  const { width } = useWindowDimensions();
  const renderDivider = useCallback(() => {
    const widthMultiplier = 0.1;
    const dividerWidth = width * widthMultiplier;

    switch (selectedClass) {
      case 'ECONOMY':
        return dividerWidth;
      case 'PREMIUM_ECONOMY':
        return dividerWidth * 3.4;
      case 'BUSINESS':
        return dividerWidth * 5.9;
      default:
        return 0;
    }
  }, [selectedClass]);

  return (
    <View
      style={[
        Layout.fullWidth,
        {
          marginBottom: 20,
          borderColor: Colors.primaryColor,
          borderWidth: 1.5,
        },
      ]}
    >
      <View
        style={[
          Layout.absolute,
          {
            width: 10,
            height: 10,
            top: -10,
            left: renderDivider(),
            borderLeftWidth: 10,
            borderLeftColor: 'transparent',
            borderRightWidth: 10,
            borderRightColor: 'transparent',
            borderBottomWidth: 10,
            borderBottomColor: Colors.primaryColor,
          },
        ]}
      />
      <View
        style={[
          Layout.absolute,
          {
            width: 15,
            height: 12,
            top: -8,
            left: renderDivider(),
            borderLeftWidth: 10,
            borderLeftColor: 'transparent',
            borderRightWidth: 10,
            borderRightColor: 'transparent',
            borderBottomWidth: 10,
            borderBottomColor: Colors.textGray100,
          },
        ]}
      />
    </View>
  );
};

enum FlightClass {
  ECONOMY = 'ECONOMY',
  PREMIUM_ECONOMY = 'PREMIUM_ECONOMY',
  BUSINESS = 'BUSINESS',
}
export const FlightClassRender: FC<{
  flightAvailableBody: any;
  pickedClass: string;
  pickedPrice: string;
  isTicketClassLoading: boolean;
  onPickedClass: (value: string) => void;
}> = ({
  flightAvailableBody,
  pickedClass,
  pickedPrice,
  onPickedClass,
  isTicketClassLoading,
}) => {
  const { Gutters } = useTheme();
  const { t } = useTranslation(['plane']);
  const { availabilityClasses, isLoading } = useGetAvailableClasses({
    flightAvailableBody,
  });

  const renderSkeletons = useCallback(() => {
    return Array.from({ length: 3 }).map((_, index) => (
      <View key={index} style={[Gutters.tinyRMargin, Gutters.smallTMargin]}>
        <FlightClassSkeleton />
      </View>
    ));
  }, [isLoading]);

  const isSelectedClass = useCallback(
    (itemClass: string) => pickedClass === itemClass,
    [pickedClass],
  );

  const getBoxColor = useCallback(
    (itemClass: string) =>
      isSelectedClass(itemClass) ? Colors.primaryColor : Colors.white,
    [pickedClass],
  );

  const getBorderColor = useCallback(
    (itemClass: string) =>
      isSelectedClass(itemClass) ? Colors.primaryColor : Colors.textGray200,
    [pickedClass],
  );

  const getTextColor = useCallback(
    (itemClass: string) =>
      isSelectedClass(itemClass) ? Colors.white : Colors.black,
    [pickedClass],
  );

  const getIcons = useCallback(
    (itemClass: string) =>
      itemClass === 'ECONOMY'
        ? 'seat-passenger'
        : itemClass === 'PREMIUM_ECONOMY'
        ? 'seat-recline-extra'
        : 'car-seat',
    [pickedClass],
  );

  return (
    <ScrollView
      style={{ marginTop: -10, marginBottom: -30, height: 0, paddingLeft: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {isLoading ? renderSkeletons() : null}
      {availabilityClasses &&
        !isLoading &&
        availabilityClasses.map(item => (
          <BoxIconText
            key={item.class}
            width={85}
            height={100}
            boxColor={getBoxColor(item.class)}
            styles={{
              borderWidth: 1,
              borderColor: getBorderColor(item.class),
              marginRight: 10,
            }}
            textStyles={{
              color: getTextColor(item.class),
              paddingTop: 5,
              textAlign: 'center',
            }}
            icon={{
              type: 'material-community',
              name: getIcons(item.class),
              size: 35,
              color:
                pickedClass == item.class ? Colors.white : Colors.textGray200,
              svg: undefined,
            }}
            text={t(`plane:${item.class}` as FlightClass)}
            subText={
              isTicketClassLoading ? (
                <PriceSkeleton />
              ) : (
                formatMoney(pickedPrice, 'VND')
              )
            }
            onPress={() => onPickedClass(item.class)}
          />
        ))}
    </ScrollView>
  );
};
