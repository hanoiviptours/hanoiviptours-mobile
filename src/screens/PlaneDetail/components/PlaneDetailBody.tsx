import React, { useCallback, useState, FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { Icon, Button, IconBox } from '@/components';
import { IAirlineInfo } from '../../PlaneList/ulities';
import { formatMoney } from '@/utils';
import { ScrollView } from 'react-native-gesture-handler';
import { FlightDetailGuidance } from '../ulities';

type IPlaneTicketClass = {
  selectedIndex?: number;
  buttons?: string[];
  onPress?: (value: number) => void;
  flightInfo?: IAirlineInfo;
  navigation?: any;
};

const TicketClassSeats: FC<IPlaneTicketClass> = ({
  selectedIndex,
  buttons,
  onPress,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {buttons?.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={[
            Layout.row,
            Layout.center,
            Gutters.tinyLMargin,

            {
              borderWidth: 1.5,
              borderRadius: 30,
              width: 145,
              height: 38,
              paddingTop: 5,
              paddingBottom: 5,
              paddingRight: 5,
              borderColor: 'transparent',
              backgroundColor:
                selectedIndex === 0 ? Colors.primaryColor : Colors.white,
            },
          ]}
        >
          <View
            style={[
              Layout.center,
              {
                borderWidth: 1,
                paddingTop: 6,
                borderRadius: 30,
                width: 60,
                marginRight: 5,
                borderColor: 'transparent',
                backgroundColor:
                  selectedIndex === 0 ? Colors.white : Colors.textGray200,
              },
            ]}
          >
            <Text style={[Fonts.textTiny, { color: Colors.primaryColor }]}>
              Q
            </Text>
            <Text
              style={[
                Fonts.textTiny,
                { color: Colors.primaryColor, fontWeight: '400' },
              ]}
            >
              1 chỗ
            </Text>
          </View>
          <View>
            <Text
              style={[
                Fonts.textTiny,
                { color: Colors.white, fontWeight: '600' },
              ]}
            >
              {formatMoney(1797000, 'VND')}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const TicketClass: FC<IPlaneTicketClass> = ({ onPress }) => {
  const { Gutters, Layout, Fonts } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          Layout.col,
          Layout.alignItemsCenter,
          Layout.justifyContentBetween,
          Gutters.regularTMargin,
          Gutters.smallBMargin,
          Gutters.tinyLMargin,
          Gutters.tinyRMargin,
          {
            padding: 7,
            backgroundColor: Colors.primaryColor,
            width: 'auto',
            maxWidth: 100,
            height: 105,
            borderRadius: 5,
          },
        ]}
      >
        <Icon
          name="airline-seat-recline-normal"
          type="material"
          color={Colors.white}
          size={35}
          style={[Layout.alignItemsCenter, { marginRight: 5 }]}
        />
        <Text style={[Fonts.textTiny, { color: Colors.white }]}>Phổ Thông</Text>
        <Text
          style={[
            Fonts.textTiny,
            { color: Colors.white, paddingBottom: 5, fontWeight: '600' },
          ]}
        >
          {formatMoney(1797000, 'VND')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const FlightDivider: FC<IPlaneTicketClass> = ({ selectedIndex }) => {
  const { Layout } = useTheme();
  return (
    <View
      style={[
        Layout.fullWidth,
        {
          marginBottom: 20,
          borderColor: Colors.primaryColor,
          borderWidth: 1.5,
        },
      ]}
    >
      <View
        style={[
          Layout.absolute,
          {
            width: 10,
            height: 10,
            top: -10,
            left: 40,
            borderLeftWidth: 10,
            borderLeftColor: 'transparent',
            borderRightWidth: 10,
            borderRightColor: 'transparent',
            borderBottomWidth: 10,
            borderBottomColor: Colors.primaryColor,
          },
        ]}
      />
      <View
        style={[
          Layout.absolute,
          {
            width: 15,
            height: 12,
            top: -8,
            left: 40,
            borderLeftWidth: 10,
            borderLeftColor: 'transparent',
            borderRightWidth: 10,
            borderRightColor: 'transparent',
            borderBottomWidth: 10,
            borderBottomColor: Colors.textGray100,
          },
        ]}
      />
    </View>
  );
};
export const PlaneTicketClass: FC<IPlaneTicketClass> = ({ navigation }) => {
  const { Gutters, Layout, Fonts } = useTheme();
  const flightInfo = useSelector((state: any) => state.flight);

  const [selectedTicketClass, setSelectedTicketClass] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { t } = useTranslation(['plane']);

  const renderText = FlightDetailGuidance({ t, seatsLeft: 2 });

  const handlePickedTicket = useCallback((value: number) => {
    setSelectedIndex(value);
  }, []);

  const handlePickedTicketClass = useCallback((value: number) => {
    setSelectedTicketClass(value);
  }, []);
  return (
    <>
      <Text
        style={[
          Fonts.textSmall,
          Gutters.tinyLMargin,
          { fontWeight: '500', marginTop: -15 },
        ]}
      >
        {t('plane:ticketClass')}
      </Text>
      <ScrollView
        style={{ marginBottom: -30, height: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TicketClass onPress={handlePickedTicketClass} />
      </ScrollView>
      <View style={[Layout.fill, { backgroundColor: Colors.textGray100 }]}>
        <FlightDivider selectedIndex={selectedTicketClass} />
        <View>
          <TicketClassSeats
            buttons={[
              t('plane:buttontype'),
              t('plane:buttoncity'),
              t('plane:buttoncity'),
              t('plane:buttoncity'),
            ]}
            selectedIndex={selectedIndex}
            onPress={handlePickedTicket}
          />
        </View>
        {renderText.map((item, index) => (
          <IconBox
            key={index}
            styles={[
              Layout.row,
              { paddingLeft: 5, paddingTop: 7, width: '90%' },
            ]}
            textStyles={[
              Fonts.textTiny,
              Layout.alignItemsStart,
              { marginLeft: 5 },
            ]}
            icon={{
              type: item.type,
              name: item.name,
              size: item.size,
              color: item.color,
              svg: item.svg,
            }}
            text={item.text}
          />
        ))}

        <Button
          viewStyle={[Gutters.largeBMargin, Gutters.tinyTPadding]}
          title={t('plane:confirm')}
          height={40}
          type="primary"
          align="center"
          radius={30}
          onPress={() => navigation.navigate('PlaneCheckout')}
        />
      </View>
    </>
  );
};
