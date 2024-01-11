import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@/hooks';
import { BottomDrawer } from '@/components';
import { NumberChoosing, Button, DividerForm } from '@/components';
import { useTranslation } from 'react-i18next';
import ExtraUtils from './ExtraUtils';
import { GroupCustomer } from '@/theme/assets/icons';
import { ICustomerInfomations } from 'types/flight';
import { setFlightInfo } from '@/store/flight';
import { createNewCustomerInfos } from '../ulities';
type CardProps = {
  bottomSheetModalRef: any;
};
type ICustomerInfo = {
  adults: number;
  children: number;
  infants: number;
};
const iconSize = 30;

const CustomerPicker = ({ bottomSheetModalRef }: CardProps) => {
  const { Layout, Gutters } = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);

  const [customerValue, setCustomerValue] = useState<ICustomerInfo>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const handleNumberChange = useCallback(
    (type: string, newValue: number) => {
      setCustomerValue(prevValue => ({
        ...prevValue,
        [type]: newValue,
      }));
    },
    [setCustomerValue],
  );

  const newCustomerValues: ICustomerInfomations[] = useMemo(() => {
    const newAdultsCustomers = createNewCustomerInfos(
      customerValue.adults,
      'adults',
    );
    const newChildrenCustomers = createNewCustomerInfos(
      customerValue.children,
      'children',
    );
    const newInfantsCustomers = createNewCustomerInfos(
      customerValue.infants,
      'infants',
    );
    const newValues = [
      ...newAdultsCustomers,
      ...newChildrenCustomers,
      ...newInfantsCustomers,
    ];
    return newValues;
  }, [customerValue.adults, customerValue.children, customerValue.infants]);

  useEffect(() => {
    dispatch(setFlightInfo({ customers: newCustomerValues }));
  }, [customerValue, dispatch]);

  const closeModal = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const renderButtons = [
    {
      iconLeft: null,
      iconRight: (
        <NumberChoosing
          iconSize={iconSize}
          value={customerValue.adults}
          onValueChange={newValue => handleNumberChange('adults', newValue)}
        />
      ),
      subText: t('plane:adultAge'),
      text: t('plane:adults'),
    },
    {
      iconLeft: null,
      iconRight: (
        <NumberChoosing
          iconSize={iconSize}
          value={customerValue.children}
          onValueChange={newValue => handleNumberChange('children', newValue)}
        />
      ),
      subText: t('plane:childrenAge'),
      text: t('plane:children'),
    },
    {
      iconLeft: null,
      iconRight: (
        <NumberChoosing
          iconSize={iconSize}
          value={customerValue.infants}
          onValueChange={newValue => handleNumberChange('infants', newValue)}
        />
      ),
      subText: t('plane:babyAge'),
      text: t('plane:infants'),
    },
  ];

  return (
    <BottomDrawer snapPoint="48%" ref={bottomSheetModalRef}>
      <View style={[Layout.fill, Layout.col]}>
        {renderButtons.map((item, index) => (
          <View key={index}>
            <DividerForm
              iconLeft={item.iconLeft}
              iconRight={item.iconRight}
              subText={item.subText}
              text={item.text}
              swapHeader
            />
          </View>
        ))}
        <ExtraUtils
          style={{ borderRadius: 5, marginBottom: 10, height: 70 }}
          icon={<GroupCustomer />}
          header={'Vé đoàn (nhiều hơn 9 khách)'}
          headerColor="#158C32"
          content={'Càng đông càng rẻ, chỗ ngồi hợp lý'}
          background={'#EAFCEE'}
        />
        <Button
          viewStyle={[Gutters.smallBMargin]}
          title={t('plane:apply')}
          height={45}
          type="primary"
          align="center"
          radius={30}
          onPress={closeModal}
        />
      </View>
    </BottomDrawer>
  );
};

export default CustomerPicker;
