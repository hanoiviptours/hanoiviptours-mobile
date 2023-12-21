import React, { FC, useState, useCallback } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { BoxIconText } from '@/components';
import { BottomDrawer } from '@/components';
import { useBottomSheetModal } from '@/hooks';
import SeatMap from '../components/SeatMap/SeatMap';

export interface IServices {
  type: 'luggage' | 'food' | 'seat';
  closeModal : () => void;
}

const services = [
  {
    icon: {
      type: 'material',
      name: 'luggage',
      size: 30,
      color: Colors.primary,
    },
    text: 'Thêm hành lý',
    type: 'luggage',
  },
  {
    icon: {
      type: 'material',
      name: 'restaurant',
      size: 30,
      color: Colors.success,
    },
    text: 'Chọn suất ăn',
    type: 'food',
  },
  {
    icon: {
      type: 'material',
      name: 'event-seat',
      size: 30,
      color: Colors.warning,
    },
    text: 'Chọn chỗ ngồi',
    type: 'seat',
  },
];

const RenderComponentByServies: FC<IServices> = ({ type, closeModal }) => {
  const handleSubmit = useCallback(() => {
    closeModal();
  }, []);
  if (type === 'seat') {
    return <SeatMap handleSubmit={handleSubmit} />;
  }
  return null; // Return null for other types or handle them accordingly
};

const PlaneServices = () => {
  const { Gutters, Layout, Fonts } = useTheme();
  const { width } = useWindowDimensions();
  const [pickedService, setPickedService] = useState<string>('seat');
  console.log('pickedService', pickedService);

  const { bottomSheetModalRef, presentModal, closeModal } =
    useBottomSheetModal();

  const handlePickService = useCallback(
    (type: string) => {
      setPickedService(type);
      presentModal();
    },
    [pickedService],
  );

  return (
    <View style={[Layout.fullWidth, Layout.fullHeight, Gutters.largeBPadding]}>
      <View>
        <Text
          style={[
            Gutters.smallLPadding,
            Gutters.smallRPadding,
            Fonts.titleSmall,
          ]}
        >
          {`Dịch vụ bổ sung `}
        </Text>

        <Text
          style={[
            Gutters.smallLPadding,
            Gutters.smallRPadding,
            Gutters.tinyTMargin,
            Fonts.textTiny,
            { color: Colors.warning },
          ]}
        >
          Dịch vụ bổ sung không áp dụng cho em bé dưới 2 tuổi
        </Text>
      </View>
      <View style={[Layout.row, Layout.fullWidth, Layout.center]}>
        {services.map((item, index) => (
          <BoxIconText
            key={index}
            width={width / 3.5}
            height={110}
            boxColor={Colors.textGray100}
            styles={{
              borderWidth: 0.5,
              borderColor: Colors.textGray300,
              margin: 5,
            }}
            textStyles={{ color: Colors.black, paddingTop: 10 }}
            icon={{
              type: item.icon.type,
              name: item.icon.name,
              size: item.icon.size,
              color: item.icon.color,
              svg: undefined,
            }}
            text={item.text}
            onPress={() => handlePickService(item.type)}
          />
        ))}

        <BottomDrawer snapPoint="90%" ref={bottomSheetModalRef}>
          <RenderComponentByServies
            type={pickedService as 'luggage' | 'food' | 'seat'}
            closeModal={closeModal}
          />
        </BottomDrawer>
      </View>
    </View>
  );
};

export default PlaneServices;
