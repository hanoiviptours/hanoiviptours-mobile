import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components';
import { useSelector } from 'react-redux';
import { RenderIcon } from '../../../PlaneList/components/PlaneListItemElements';
import { Colors } from '@/theme/Variables';
import LuggageItems from './LuggageItems';

import { useTheme } from '@/hooks';

type LuggageProps = {
  handleSubmit?: () => void;
};

type LuggageHeader = {
  handleSubmit?: () => void;
};

const Luggage: FC<LuggageProps> = ({ handleSubmit }) => {
  const [pickedUserId, setPickedUserId] = useState<number>(0);
  const { Layout, Gutters } = useTheme();
  const { t } = useTranslation(['plane']);
  return (
    <View style={[Layout.fill]}>
      <LuggageHeader />
      <LuggageItems />

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

export default Luggage;

const LuggageHeader: FC<LuggageHeader> = ({}) => {
  const { Layout, Gutters, Fonts } = useTheme();
  const { t } = useTranslation(['plane']);
  const flightInfos = useSelector((state: any) => state.flight);
  const { airportLocation, landingAirportLocation } = flightInfos;

  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        Layout.alignItemsCenter,
        Gutters.smallLMargin,
        Gutters.smallRMargin,
      ]}
    >
      <Text style={[Fonts.titleSmall]}>{t('plane:departure')}</Text>
      <View style={[Layout.row, Layout.alignItemsCenter]}>
        <Text
          style={[Fonts.textSmall, Fonts.textBold, { color: Colors.warning }]}
        >
          {`${airportLocation} - ${landingAirportLocation}`}
        </Text>
        {RenderIcon(flightInfos.icon, 50)}
      </View>
    </View>
  );
};
