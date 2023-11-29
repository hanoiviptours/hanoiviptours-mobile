import React, { useCallback, useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '../../../theme/Variables';
import { BottomDrawer } from '@/components';
import { NumberChoosing, Button, DividerButtonForm } from '@/components';
import { useTranslation } from 'react-i18next';
import ExtraUtils from './ExtraUtils';
import { GroupCustomer } from '@/theme/assets/icons';

type CardProps = {
  bottomSheetModalRef: any;
};
const iconSize = 30;

const CustomerPicker = ({ bottomSheetModalRef }: CardProps) => {
  const { Layout, Gutters, Fonts, darkMode: isDark } = useTheme();
  const { t } = useTranslation(['plane']);
  const [customerValue, setCustomerValue] = useState({
    adult: 1,
    children: 0,
    baby: 0,
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

  const renderButtons = [
    {
      iconLeft: null,
      iconRight: (
        <NumberChoosing
          iconSize={iconSize}
          value={customerValue.adult}
          onValueChange={newValue => handleNumberChange('adult', newValue)}
        />
      ),
      subText: t('plane:adultAge'),
      text: t('plane:adult'),
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
          value={customerValue.baby}
          onValueChange={newValue => handleNumberChange('baby', newValue)}
        />
      ),
      subText: t('plane:babyAge'),
      text: t('plane:baby'),
    },
  ];
  return (
    <BottomDrawer snapPoint="55%" ref={bottomSheetModalRef}>
      <View style={[Layout.fill, Layout.col]}>
        {renderButtons.map((item, index) => (
          <View key={index}>
            <DividerButtonForm
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
          title={t('plane:confirm')}
          height={45}
          type="primary"
          align="center"
          radius={30}
        />
      </View>
    </BottomDrawer>
  );
};

export default CustomerPicker;
