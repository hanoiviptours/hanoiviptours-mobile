import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import Deck from './Deck';
import { useTranslation } from 'react-i18next';
import { Button, ShadowBox } from '@/components';
import { mockDecks } from '@/services/mockDecks';
import SliderItemPicker from './SliderItemPicker';

import { useTheme } from '@/hooks';
type SeatMapProps = {
  handleSubmit?: () => void;
};
const MemoizedDeck = memo(Deck);
const MemoizedSliderPicker = memo(SliderItemPicker);

const SeatMap: FC<SeatMapProps> = ({ handleSubmit }) => {
  const [pickedUserId, setPickedUserId] = useState<number>(0);
  const { Layout, Gutters } = useTheme();
  const { t } = useTranslation(['plane']);
  return (
    <View style={[Layout.fill]}>
      <MemoizedSliderPicker setPickedUserId={setPickedUserId} />
      {mockDecks[0].decks?.map((deck, index) => {
        return (
          <MemoizedDeck
            key={index}
            seatList={deck.seats}
            pickedUserId={pickedUserId}
          />
        );
      })}
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
