import React, { FC, memo, useState } from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Colors } from '@/theme/Variables';
import { useTheme } from '@/hooks';
import { ICustomerInfomations } from 'types/flight';

type LuggageItemsProps = {
  handleSubmit?: () => void;
};

type ILuggageWeightBoxes = {
  userName: string;
  price: number;
};

const LuggageItems: FC<LuggageItemsProps> = ({ handleSubmit }) => {
  const [pickedUserId, setPickedUserId] = useState<number>(0);
  const flightInfos = useSelector((state: any) => state.flight);
  const currentcustomer = flightInfos?.customers;

  const { Layout, Gutters } = useTheme();
  const { t } = useTranslation(['plane']);
  return (
    <View style={[Layout.fill]}>
      {currentcustomer.map((item: ICustomerInfomations, index: number) => {
        return (
          <LuggageWeightBoxesLayout
            key={index}
            userName={`${item.firstName} ${item.lastName}`}
            price={3000000}
          />
        );
      })}
    </View>
  );
};

export default LuggageItems;

const LuggageWeightBoxesLayout: FC<ILuggageWeightBoxes> = ({
  userName,
  price,
}) => {
  const { width } = useWindowDimensions();
  const { Layout, Gutters, Fonts } = useTheme();
  return (
    <View style={[Gutters.smallRMargin, Gutters.smallLMargin]}>
      <View
        style={[Layout.row, Layout.justifyContentBetween, Gutters.tinyBMargin]}
      >
        <Text style={[Fonts.textRegular, { fontWeight: '500' }]}>
          {userName}
        </Text>
        <Text style={[Fonts.textSmall, { color: Colors.orange }]}>{price}</Text>
      </View>
      <LuggageWeightBoxesItem />
    </View>
  );
};

const LuggageWeightBoxesItem = ({}) => {
  const { width } = useWindowDimensions();
  const { Layout, Gutters, Fonts } = useTheme();
  return (
    <TouchableOpacity
      style={[
        Layout.center,
        {
          padding: 5,
          width: 'auto',
          maxWidth: width * 0.2,
          borderWidth: 0.5,
          borderRadius: 5,
          borderColor: Colors.textGray400,
        },
      ]}
    >
      <Text style={{ paddingBottom: 5, color: Colors.textGray400 }}>20 kg</Text>
      <Text style={{ color: Colors.textGray400 }}>194.000 d</Text>
    </TouchableOpacity>
  );
};
