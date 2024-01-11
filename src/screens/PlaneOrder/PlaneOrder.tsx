import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  ButtonGroup,
  DividerButtonForm,
  Button,
  RangeDatePicker,
  SingleDatePicker,
} from '@/components';
import { useTheme, useBottomSheetModal } from '@/hooks';
import { Colors } from '@/theme/Variables';
import ExtraUtils from './components/ExtraUtils';
import ButtonForm from './components/ButtonForm';
import CustomerPicker from './components/CustomerPicker';
import RenderExtraUtils from './components/RenderExtraUtils';
import { formatDate } from '@/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Reverse } from '@/theme/assets/icons';
import moment from 'moment';
import { useDoFlightSearchMutation } from '@/services/modules/flights/flight';
import { setFlightSearch } from '@/store/flightSearch';
import { ICustomerInfomations } from 'types/flight';

const currentDate = moment().toDate();
const absoluteIcon = Platform.OS === 'ios' ? '-35%' : '-20%';

const PlaneOrder = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const currentUserInfos = useSelector((state: any) => state.flight);

  const { t } = useTranslation(['plane']);
  const { bottomSheetModalRef, presentModal } = useBottomSheetModal();
  const { Gutters, Layout } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dateMode, setDateMode] = useState<'single' | 'range'>('single');
  const [location, setLocation] = useState({
    origin: 'HAN',
    destination: 'SGN',
  });

  const [isEnableRoundTrip, setIsEnableRoundTrip] = useState(false);
  const [range, setRange] = useState<Date | any>({
    startDate: currentDate,
    endDate: currentDate,
  });

  const [flightSearch, { data, isLoading, isSuccess }] =
    useDoFlightSearchMutation();

  useEffect(() => {
    dispatch(
      setFlightSearch({
        data: data as any,
        isSuccess: isSuccess,
        isLoading: isLoading,
      }),
    );
  }, [data]);

  const [openDatePicker, setOpenDatePicker] = useState(false);

  const onConfirm = useCallback(
    ({ startDate, endDate, date }: Date | any) => {
      dateMode === 'single'
        ? setRange({ startDate: date })
        : setRange({ startDate, endDate });
      setOpenDatePicker(false);
    },
    [dateMode, openDatePicker],
  );

  const handleLocation = useCallback(
    (property: string, value: string) => {
      setLocation(location => ({ ...location, [property]: value }));
    },
    [setLocation],
  );

  const handleDatePicker = useCallback(
    (dateMode: 'single' | 'range') => {
      setDateMode(dateMode);
      setOpenDatePicker(true);
    },
    [dateMode, openDatePicker],
  );

  const onDismiss = useCallback(() => {
    setOpenDatePicker(false);
  }, []);

  const renderButtons = ButtonForm({
    t,
    isEnabled: isEnableRoundTrip,
    onSwitch: setIsEnableRoundTrip,
    customerInfomation: currentUserInfos.customers,
    location: location,
    pickedValue: {
      startDate: formatDate(range.startDate, 'DD/MM/YYYY'),
      endDate: formatDate(range.endDate, 'DD/MM/YYYY'),
    },
    pressEvent: {
      handleDatePicker: handleDatePicker,
      handleCustomerPicker: presentModal,
      handleLocation: handleLocation,
    },
  });
  const renderExtraUtils = RenderExtraUtils(t);

  const handlePress = useCallback((value: number) => {
    setSelectedIndex(value);
  }, []);

  const countCustomers = useCallback(
    (key: 'adults' | 'children' | 'infants'): number => {
      return currentUserInfos.customers.filter(
        (item: ICustomerInfomations) => item.key === key,
      ).length;
    },
    [currentUserInfos.customers],
  );

  const handleFlightSearch = useCallback(() => {
    flightSearch({
      originLocationCode: location.origin,
      destinationLocationCode: location.destination,
      departureDate: formatDate(range.startDate, 'YYYY-MM-DD'),
      returnDate: isEnableRoundTrip
        ? formatDate(range.endDate, 'YYYY-MM-DD')
        : undefined,
      adults: countCustomers('adults') || 1,
      children: countCustomers('children'),
      infants: countCustomers('infants'),
      currencyCode: 'VND',
    }).unwrap();

    navigation.navigate('PlaneList', {
      title: 'Hà Nội -> Thành phố Hồ Chí Minh',
      subTitle: '1/10/2023 - 1 khách',
    });
  }, [location, range, isEnableRoundTrip]);

  return (
    <>
      <ScrollView
        style={[
          Layout.fill,
          Layout.fullWidth,
          Layout.fullHeight,
          { backgroundColor: Colors.white },
        ]}
      >
        <View
          style={[
            Layout.fill,
            Layout.col,
            Gutters.tinyLMargin,
            Gutters.tinyRMargin,
          ]}
        >
          <ButtonGroup
            align="center"
            buttons={[t('plane:buttontype'), t('plane:buttoncity')]}
            selectedIndex={selectedIndex}
            onPress={handlePress}
          />
        </View>

        <View style={[Layout.fill, Layout.col]}>
          {renderButtons.map((item, index) => (
            <View key={index}>
              <DividerButtonForm
                viewStyle={{ display: item.disabled ? 'none' : 'flex' }}
                iconLeft={item.iconLeft}
                iconRight={item.iconRight}
                subText={item.subText}
                text={item.text || ''}
                onPress={item.onPress}
              />
              {index === 1 && (
                <View
                  style={[Layout.absolute, { top: absoluteIcon, right: 20 }]}
                >
                  <TouchableOpacity>
                    <Reverse width={35} height={35} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        <Button
          viewStyle={[Gutters.smallBMargin]}
          title={t('plane:confirm')}
          height={45}
          type="primary"
          align="center"
          radius={30}
          onPress={handleFlightSearch}
        />
        <View style={[Gutters.smallLMargin]}>
          <Text>Tiện ích khác</Text>
        </View>
        <View style={[Gutters.largeBMargin]}>
          {renderExtraUtils.map((item, index) => (
            <ExtraUtils
              key={index}
              style={{ borderRadius: 5, marginBottom: 0, height: 70 }}
              icon={item.icon}
              header={item.header}
              content={item.content}
              background={item.background}
            />
          ))}
        </View>
      </ScrollView>
      <CustomerPicker bottomSheetModalRef={bottomSheetModalRef} />

      {dateMode === 'single' ? (
        <SingleDatePicker
          isOpen={openDatePicker}
          date={range.startDate}
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />
      ) : (
        <RangeDatePicker
          isOpen={openDatePicker}
          startDate={range.startDate}
          endDate={range.endDate}
          onConfirm={onConfirm}
          onDismiss={onDismiss}
        />
      )}
    </>
  );
};

export default PlaneOrder;
