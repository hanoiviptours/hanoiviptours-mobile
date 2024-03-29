import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useMemo,
} from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { SliderPicker, IconBox, Icon } from '@/components';
import { Colors } from '@/theme/Variables';

import { useTheme } from '@/hooks';
import { ICustomerInfomations } from 'types/flight';

interface ISliderItemPicker {
  setPickedUserId: Dispatch<SetStateAction<number>>;
  seatPicked?: string;
  pickedUserId: number;
  onSeatPicked: (seat: string) => void;
}

interface ISeatPicker extends ISliderItemPicker {
  item: ICustomerInfomations;
  index: number;
}

const legend = [
  {
    text: 'Ghế trống',
    name: 'radio-button-unchecked',
    size: 20,
    color: Colors.textGray200,
    svg: null,
  },
  {
    text: 'Đã bị chọn',
    name: 'fiber-manual-record',
    size: 20,
    color: Colors.warning,
    svg: null,
  },
  {
    text: 'Đã chọn',
    name: 'fiber-manual-record',
    size: 20,
    color: Colors.orange,
    svg: null,
  },
];

const SliderItemPicker: FC<ISliderItemPicker> = ({
  setPickedUserId,
  pickedUserId,
  seatPicked,
  onSeatPicked,
}) => {
  const { Layout, Fonts, Gutters } = useTheme();
  const currentFlightInfos = useSelector((state: any) => state.flight);

  const currentCustomer = useMemo(() => {
    const getCurrentCustomer = currentFlightInfos?.customers?.map(
      (item: { id: number }) => {
        if (pickedUserId === item.id) {
          return {
            ...item,
            seat: seatPicked,
          };
        }
      },
    );
    return getCurrentCustomer;
  }, [currentFlightInfos.customers, seatPicked, pickedUserId]);

  const onSnapToItem = useCallback((item: any) => setPickedUserId(item), []);
  const CallbackListItem = useCallback(
    (props: ISeatPicker) => (
      <CustomerSeatPicker
        {...props}
        pickedUserId={pickedUserId}
        onSeatPicked={onSeatPicked}
      />
    ),
    [currentCustomer],
  );
  return (
    <View
      style={[
        Layout.fullWidth,
        {
          borderBottomWidth: 2,
          borderBottomColor: Colors.primaryColor,
        },
      ]}
    >
      <View
        style={[Layout.row, Layout.justifyContentBetween, Gutters.tinyPadding]}
      >
        <SliderPicker
          onSnapToItem={onSnapToItem}
          renderItem={CallbackListItem}
          data={currentCustomer}
        />
        {legend.map((item, index) => (
          <IconBox
            key={index}
            styles={[
              Layout.row,
              Layout.justifyContentCenter,
              { paddingRight: 15 },
            ]}
            textStyles={[Fonts.textTiny]}
            icon={{
              name: item.name,
              size: item.size,
              color: item.color,
              svg: item.svg,
            }}
            text={item.text}
          />
        ))}
      </View>
    </View>
  );
};

export default SliderItemPicker;

const CustomerSeatPicker: FC<ISeatPicker> = ({
  item,
  index,
  pickedUserId,
  onSeatPicked,
}) => {
  const { t } = useTranslation(['plane']);
  const { Layout, Fonts, Gutters } = useTheme();

  const handleUnPickSeat = useCallback(() => {
    if (item.id === pickedUserId) {
      onSeatPicked('');
    }
  }, [item.id]);

  return (
    <View
      key={index}
      style={[
        Gutters.tinyBMargin,
        Gutters.tinyPadding,
        {
          borderWidth: 1,
          backgroundColor: Colors.textGray100,
          borderColor: Colors.primaryColor,
          width: 200,
          height: 95,
          borderRadius: 5,
        },
      ]}
    >
      <View
        style={{
          borderBottomColor: Colors.textGray150,
          borderBottomWidth: 1.5,
        }}
      >
        <Text
          style={[{ fontWeight: '600', paddingBottom: 10 }]}
        >{`${item.firstName} ${item.lastName} `}</Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.justifyContentBetween,
          Layout.alignItemsCenter,
          Gutters.tinyTMargin,
        ]}
      >
        <Text style={[Fonts.textSmall]}>{`${
          !item.seat ? t('plane:notPickSeat') : t('plane:seat')
        } ${item.seat || ''}`}</Text>
        <Text style={[Fonts.textSmall, { color: Colors.orange }]}>
          {item.seat && '43,000đ'}
        </Text>
        {item.seat && <Icon name="cancel" handleOnPress={handleUnPickSeat} />}
      </View>
    </View>
  );
};
