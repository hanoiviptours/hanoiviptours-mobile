import React, { FC, memo, useState, useCallback } from 'react';
import { View } from 'react-native';
import Deck from './Deck';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components';
import SliderItemPicker from './SliderItemPicker';
import { useTheme } from '@/hooks';
import { FlatList } from 'react-native-gesture-handler';
type SeatMapProps = {
  handleSubmit?: () => void;
  data: any;
};
const MemoizedDeck = memo(Deck);
const MemoizedSliderPicker = memo(SliderItemPicker);

const SeatMap: FC<SeatMapProps> = ({ handleSubmit, data }) => {
  const [pickedUserId, setPickedUserId] = useState<number>(0);
  const [seatPicked, setSeatPicked] = useState<string>('');

  const handleSelectSeat = useCallback((seat: string) => {
    setSeatPicked(seat);
  }, []);

  const { Layout, Gutters } = useTheme();

  const { t } = useTranslation(['plane']);

  const renderItem = useCallback(
    ({ item }: any) => (
      <MemoizedDeck
        seatList={item.decks[0].seats}
        seatPicked={seatPicked}
        onSeatPicked={handleSelectSeat}
      />
    ),
    [data, seatPicked],
  );
  const keyExtractor = useCallback((item: any) => item.id, [data]);

  return (
    <View style={[Layout.fill]}>
      <MemoizedSliderPicker
        seatPicked={seatPicked}
        pickedUserId={pickedUserId}
        setPickedUserId={setPickedUserId}
        onSeatPicked={handleSelectSeat}
      />

      <FlatList
        data={data}
        nestedScrollEnabled
        initialNumToRender={10}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Button
        viewStyle={[Gutters.smallBMargin]}
        title={t('plane:confirm')}
        height={45}
        type="primary"
        align="center"
        radius={30}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default SeatMap;
