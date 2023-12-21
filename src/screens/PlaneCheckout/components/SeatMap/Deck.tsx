import React, { FC, memo, useCallback, useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ICustomerInfomations } from '@/store/flight';
import { setFlightInfo } from '@/store/flight';

type IDeckProps = {
  seatList: any[];
  pickedUserId: number;
};
type ISeatProps = {
  onSelectSeat: () => void;
  y: number;
  x: number;
  seatNumber: string;
  backgroundColor: string;
  textColor: string;
};
type ISeatListProps = {
  seatList: any[];
  seatPicked: string[];
  handleSelectSeat: (seat: string) => void;
};

const Seat: FC<ISeatProps> = memo(
  ({ y, x, seatNumber, backgroundColor, onSelectSeat, textColor }) => {
    const { Fonts, Layout } = useTheme();
    const { width } = useWindowDimensions();

    return (
      <TouchableOpacity
        style={[
          Layout.center,
          {
            position: 'absolute',
            left: (y * width) / 7,
            top: x * 60,
            width: width / 8.5,
            backgroundColor: backgroundColor,
            marginLeft: 5,
            height: 45,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: Colors.textGray200,
          },
        ]}
        onPress={onSelectSeat}
      >
        <Text style={[Fonts.textSmall, Fonts.textCenter, { color: textColor }]}>
          {seatNumber}
        </Text>
      </TouchableOpacity>
    );
  },
);

const DisplaySeats: FC<ISeatListProps> = ({
  seatList,
  seatPicked,
  handleSelectSeat,
}) => {
  const { Layout } = useTheme();
  const { height } = useWindowDimensions();

  const renderColor = useCallback(
    (seat: string, availability: string, type: string) => {
      const textColor =
        availability === 'AVAILABLE' ? Colors.black : Colors.white;
      const color =
        availability === 'AVAILABLE' ? Colors.white : Colors.warning;

      if (type === 'background') {
        return seatPicked.includes(seat) ? Colors.orange : color;
      } else {
        return seatPicked.includes(seat) ? Colors.white : textColor;
      }
    },
    [seatPicked],
  );

  const memoizedSeatList = useMemo(() => {
    return seatList.map((seat: any, index: number) => (
      <Seat
        key={index}
        seatNumber={seat.number}
        backgroundColor={renderColor(
          seat.number,
          seat.travelerPricing[0].seatAvailabilityStatus,
          'background',
        )}
        textColor={renderColor(
          seat.number,
          seat.travelerPricing[0].seatAvailabilityStatus,
          'text',
        )}
        onSelectSeat={() => handleSelectSeat(seat.number)}
        x={seat.coordinates.x}
        y={seat.coordinates.y}
      />
    ));
  }, [seatList, seatPicked]);

  return (
    <View style={[Layout.fill, { height: height * 2.1 }]}>
      {memoizedSeatList}
    </View>
  );
};

const MemoizedDisplaySeats = React.memo(DisplaySeats);

const Deck: FC<IDeckProps> = ({ seatList, pickedUserId }) => {
  const dispatch = useDispatch();
  const currentFlightInfos = useSelector((state: any) => state.flight);

  const seatPicked = useMemo(() => {
    const pickedSeats = new Set<string>();
    currentFlightInfos.customers.forEach((item: ICustomerInfomations) => {
      pickedSeats.add(item.seat);
    });
    return Array.from(pickedSeats);
  }, [currentFlightInfos.customers]);

  const handleSelectSeat = useCallback(
    (seat: string) => {
      const updatedInfos = currentFlightInfos.customers.map(
        (item: ICustomerInfomations) => {
          if (item.id === pickedUserId) {
            return {
              ...item,
              seat: seat,
            };
          } else {
            return item;
          }
        },
      );
      dispatch(
        setFlightInfo({ ...currentFlightInfos, customers: updatedInfos }),
      );
    },
    [currentFlightInfos, pickedUserId, seatPicked],
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <MemoizedDisplaySeats
        seatList={seatList}
        seatPicked={seatPicked}
        handleSelectSeat={handleSelectSeat}
      />
    </ScrollView>
  );
};

export default Deck;
