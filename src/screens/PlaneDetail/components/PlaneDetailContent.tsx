import React, {
  useState,
  useCallback,
  FC,
  memo,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { FlightDetailGuidance } from '../ulities';
import { IconBox, Button } from '@/components';
import {
  FlightDivider,
  TicketClassSeats,
  FlightClassRender,
} from './PlaneDetailBody';
import { IAvailableFares } from 'types/flight';

const MemoFlightClassRender = memo(FlightClassRender);
const MemoTicketClassSeats = memo(TicketClassSeats);
const MemoFlightDivider = memo(FlightDivider);

type IPlaneTicketClass = {
  navigation?: any;
  availableFares: IAvailableFares[];
  flightAvailableBody?: any;
  isTicketClassLoading: boolean;
  setFareSearchBody: Dispatch<SetStateAction<any>>;
};
const PlaneDetailContent: FC<IPlaneTicketClass> = ({
  navigation,
  availableFares,
  flightAvailableBody,
  isTicketClassLoading,
  setFareSearchBody,
}) => {
  const { height } = useWindowDimensions();
  const { Gutters, Layout, Fonts, Colors } = useTheme();
  const [selectedTicketClass, setSelectedTicketClass] =
    useState<string>('ECONOMY');

  const [selectedSeat, setSelectedSeat] = useState<{
    seat: string;
    price: string;
    numberOfBookableSeats: number;
  }>({
    seat: availableFares[0].class,
    price: availableFares[0].body.price.grandTotal,
    numberOfBookableSeats: availableFares[0].numberOfBookableSeats,
  });
  const { t } = useTranslation(['plane']);

  const renderText = FlightDetailGuidance({
    t,
    seatsLeft: selectedSeat.numberOfBookableSeats || 0,
  });

  const handlePickedClassSeat = useCallback(
    (seat: string, price: string, numberOfBookableSeats: number) => {
      setSelectedSeat({
        seat: seat,
        price: price,
        numberOfBookableSeats: numberOfBookableSeats,
      });
    },
    [selectedTicketClass],
  );
  useEffect(() => {
    handlePickedClassSeat(
      availableFares[0].class,
      availableFares[0].body.price.grandTotal,
      availableFares[0].numberOfBookableSeats,
    );
  }, [availableFares]);

  const handlePickedTicketClass = useCallback((value: string) => {
    setFareSearchBody((prev: any) => ({ ...prev, cabin: value }));
    setSelectedTicketClass(value);
  }, []);

  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.fullHeight,
        { paddingBottom: height * 0.16 },
      ]}
    >
      <Text
        style={[
          Fonts.textSmall,
          Gutters.tinyLMargin,
          { fontWeight: '500', marginTop: -15 },
        ]}
      >
        {t('plane:ticketClassPick')}
      </Text>
      <MemoFlightClassRender
        flightAvailableBody={flightAvailableBody}
        pickedClass={selectedTicketClass}
        onPickedClass={handlePickedTicketClass}
        isTicketClassLoading={isTicketClassLoading}
        pickedPrice={selectedSeat.price}
      />
      <View style={[Layout.fill, { backgroundColor: Colors.textGray100 }]}>
        <MemoFlightDivider selectedClass={selectedTicketClass} />
        <MemoTicketClassSeats
          availableFares={availableFares}
          selectedSeat={selectedSeat.seat}
          isTicketClassLoading={isTicketClassLoading}
          onPickedClassSeat={handlePickedClassSeat}
        />
        {renderText.map((item, index) => (
          <IconBox
            key={index}
            styles={[
              Layout.row,
              { paddingLeft: 5, paddingTop: 7, width: '90%' },
            ]}
            textStyles={[
              Fonts.textTiny,
              Layout.alignItemsStart,
              { marginLeft: 5 },
            ]}
            icon={{
              type: item.type,
              name: item.name,
              size: item.size,
              color: item.color,
              svg: item.svg,
            }}
            text={item.text}
          />
        ))}

        <Button
          viewStyle={[Gutters.largeBMargin, Gutters.tinyTPadding]}
          title={t('plane:confirm')}
          height={40}
          type="primary"
          align="center"
          radius={30}
          onPress={() =>
            navigation.navigate('PlaneCheckout', {
              servicesBody: availableFares[0].body,
            })
          }
        />
      </View>
    </View>
  );
};

export default PlaneDetailContent;
