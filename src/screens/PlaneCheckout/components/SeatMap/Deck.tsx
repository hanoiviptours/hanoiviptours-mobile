import React, { FC, memo, useCallback } from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { FlatList } from 'react-native-gesture-handler';

type IDeckProps = {
  seatList: any[];
  seatPicked: string;
  onSeatPicked: (seat: string) => void;
};
type ISeatProps = {
  onSelectSeat: (seatNumber: string) => void;
  y: number;
  x: number;
  seatNumber: string;
  backgroundColor: string;
  textColor: string;
};
type ISeatListProps = {
  seatList: any[];
  seatPicked: string;
  handleSelectSeat: (seat: string) => void;
};

const Seat: FC<ISeatProps> = ({
  y,
  x,
  seatNumber,
  backgroundColor,
  onSelectSeat,
  textColor,
}) => {
  const { Fonts, Layout } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <View style={[Layout.absolute]}>
      <TouchableOpacity
        style={[
          Layout.center,
          {
            left: (y * width) / 7,
            top: (x * width) / 7,
            width: width / 8.5,
            height: 45,
            borderRadius: 5,
            borderWidth: 0.5,
            borderColor: Colors.textGray200,
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onSelectSeat(seatNumber)}
      >
        <Text style={[Fonts.textSmall, Fonts.textCenter, { color: textColor }]}>
          {seatNumber}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const MemoizedSeat = memo(Seat);

const DisplaySeats: FC<ISeatListProps> = ({
  seatList,
  seatPicked,
  handleSelectSeat,
}) => {
  const renderColor = useCallback(
    (seat: string, availability: string, type: string) => {
      const textColor =
        availability === 'AVAILABLE' ? Colors.black : Colors.white;
      const color =
        availability === 'AVAILABLE' ? Colors.white : Colors.warning;

      if (type === 'background') {
        return seat === seatPicked ? Colors.orange : color;
      } else {
        return seat === seatPicked ? Colors.white : textColor;
      }
    },
    [seatPicked],
  );

  const renderItem = useCallback(
    ({ item }: any) => (
      <MemoizedSeat
        seatNumber={item.number}
        backgroundColor={renderColor(
          item.number,
          item.travelerPricing[0]?.seatAvailabilityStatus,
          'background',
        )}
        onSelectSeat={handleSelectSeat}
        textColor={renderColor(
          item.number,
          item.travelerPricing[0].seatAvailabilityStatus,
          'text',
        )}
        x={item.coordinates.x}
        y={item.coordinates.y}
      />
    ),
    [seatPicked],
  );
  const keyExtractor = useCallback((item: any) => item.number, [seatPicked]);

  return (
    <FlatList
      data={seatList}
      keyExtractor={keyExtractor}
      initialNumToRender={200}
      renderItem={renderItem}
      extraData={seatPicked}
    />
  );
};

const MemoizedDisplaySeats = memo(DisplaySeats);
const Deck: FC<IDeckProps> = ({ seatList, seatPicked, onSeatPicked }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ height: height * 1.9, width: width }}>
      <MemoizedDisplaySeats
        seatList={seatList}
        seatPicked={seatPicked}
        handleSelectSeat={onSeatPicked}
      />
    </View>
  );
};

export default Deck;
