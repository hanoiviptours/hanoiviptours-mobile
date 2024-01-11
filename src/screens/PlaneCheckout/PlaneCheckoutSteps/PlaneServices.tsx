import React, { FC, useState, useCallback, useEffect } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { BoxIconText } from '@/components';
import { BottomDrawer, Button } from '@/components';
import { useBottomSheetModal } from '@/hooks';
import { useTranslation } from 'react-i18next';
import SeatMap from '../components/SeatMap/SeatMap';
import Luggage from '../components/Luggage/Luggage';
import { useDoFlightSeatmapMutation } from '@/services/modules/flights/flight';

export interface IServices {
  data: any;
  type: 'luggage' | 'food' | 'seat';
  closeModal: () => void;
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

const RenderComponentByServies: FC<IServices> = ({
  data,
  type,
  closeModal,
}) => {
  const handleSubmit = useCallback(() => {
    closeModal();
  }, []);
  if (type === 'seat') {
    return <SeatMap data={data} handleSubmit={handleSubmit} />;
  } else if (type === 'luggage') {
    return <Luggage handleSubmit={handleSubmit} />;
  }
  return null; // Return null for other types or handle them accordingly
};

const PlaneServices: FC<{ servicesBody: any }> = ({ servicesBody }) => {
  const { Gutters, Layout, Fonts } = useTheme();
  const { width } = useWindowDimensions();
  const [pickedService, setPickedService] = useState<string>('seat');

  const [seatMap, { data: seatMapDatas, isLoading }] =
    useDoFlightSeatmapMutation();

  useEffect(() => {
    const fetchSeatMapData = async () => {
      try {
        await seatMap(servicesBody);
      } catch (error: any) {
        console.log('error', error.data);
      }
    };

    fetchSeatMapData();
  }, [servicesBody]);
  const { t } = useTranslation(['plane']);

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
    <View style={[Layout.col, Layout.fullHeight, Layout.justifyContentBetween]}>
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

        <View style={[Layout.row, Layout.justifyContentCenter]}>
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
        </View>
      </View>

      <Button
        viewStyle={[Gutters.smallBMargin]}
        title={t('plane:step3')}
        height={45}
        type="primary"
        align="center"
        radius={30}
        // onPress={handleSubmit}
      />

      <BottomDrawer snapPoint="90%" ref={bottomSheetModalRef}>
        <RenderComponentByServies
          type={pickedService as 'luggage' | 'food' | 'seat'}
          data={seatMapDatas}
          closeModal={closeModal}
        />
      </BottomDrawer>
    </View>
  );
};

export default PlaneServices;
