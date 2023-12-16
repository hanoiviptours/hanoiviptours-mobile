import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useSelector } from 'react-redux';
import { Colors } from '@/theme/Variables';
import { IconBox, DividerButtonForm, Icon } from '@/components';
import { ScrollView } from 'react-native-gesture-handler';

type IPlaneHoldTimeProps = {
  children?: React.ReactNode;
};

export const RenderHoldTimeOuter: FC<IPlaneHoldTimeProps> = ({ children }) => {
  const { Layout } = useTheme();
  return (
    <View
      style={[
        Layout.row,
        Layout.justifyContentBetween,
        { padding: 5, backgroundColor: Colors.primaryColor },
      ]}
    >
      {children}
    </View>
  );
};

const PlaneHoldTime: FC<IPlaneHoldTimeProps> = ({ children }) => {
  const { Gutters, Layout, Fonts } = useTheme();
  const flightInfo = useSelector((state: any) => state.flight);
  const { flightTotalPrice } = flightInfo;
  return (
    <View style={[Layout.fullWidth, Layout.justifyContentCenter]}>
      <RenderHoldTimeOuter>
        <IconBox
          styles={[Layout.row, Layout.justifyContentCenter]}
          textStyles={[
            Fonts.textSmall,
            Layout.center,
            Fonts.textWhite,
            { paddingLeft: 2 },
          ]}
          icon={{
            name: 'schedule',
            size: 30,
            color: Colors.white,
          }}
          text={'Thời gian giữ chỗ'}
        />
        <View style={[Layout.center, Gutters.tinyRMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textWhite]}>5h 45m</Text>
        </View>
      </RenderHoldTimeOuter>
      <ScrollView style={[Layout.col]}>
        <View style={{ backgroundColor: Colors.textGray100 }}>
          <DividerButtonForm
            iconLeft={<Icon name="flight" size={25} />}
            iconRight={<Icon name="chevron-right" size={25} />}
            subText={'Thứ Sáu, 15/12/2023 • 08:05 - 10:15'}
            text={'Hà Nội - TP Hồ Chí Minh'}
            swapHeader
          />
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Gutters.smallRPadding,
              Gutters.smallLPadding,
              Gutters.tinyBPadding,
              Gutters.tinyTPadding,
            ]}
          >
            <Text style={[Fonts.textSmall]}>Tổng số tiền</Text>

            <Text
              style={[
                Fonts.textSmall,
                { color: Colors.orange, fontWeight: '600' },
              ]}
            >
              {flightTotalPrice}
            </Text>
          </View>
        </View>

        <View>{children}</View>
      </ScrollView>
    </View>
  );
};

export default PlaneHoldTime;
