import React, { FC, memo, useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '@/theme/Variables';
import { useTranslation } from 'react-i18next';
import PlaneHoldTime from '../components/PlaneHoldTime';
import { Button, DividerButtonForm, Icon, BottomDrawer } from '@/components';
import CustomerInputForm from '../components/CustomerInputForm';
import { useBottomSheetModal } from '@/hooks';
import { ICustomerInfomations } from '@/store/flight';
import { setSteps } from '@/store/checkoutsteps';

const MemoizedCustomerInput = memo(CustomerInputForm);

type CustomerInputProps = {
  label: string;
  title?: string;
};

const initialUserInfomations: ICustomerInfomations = {
  id: 0,
  gender: 'MALE',
  firstName: '',
  lastName: '',
  key: 'adult',
};
const CustomerInput: FC<CustomerInputProps> = ({ label, title }) => {
  const { Gutters, Fonts } = useTheme();
  const { t } = useTranslation(['plane']);
  const currentCustomerInfos = useSelector((state: any) => state.flight);
  const customerInfos = currentCustomerInfos.customers;
  const [pickedUser, setPickedUser] = useState<ICustomerInfomations>(
    initialUserInfomations,
  );

  const { bottomSheetModalRef, presentModal, closeModal } =
    useBottomSheetModal();

  const onChooseCustomer = useCallback(
    (currentUser: ICustomerInfomations) => {
      presentModal();
      setPickedUser(currentUser);
    },
    [customerInfos],
  );

  return (
    <View style={[Gutters.smallTMargin]}>
      <Text
        style={[Gutters.smallLPadding, Gutters.smallRPadding, Fonts.titleSmall]}
      >
        {label}
      </Text>

      {currentCustomerInfos ? (
        customerInfos.map((item: ICustomerInfomations, index: number) => (
          <DividerButtonForm
            key={index}
            iconRight={<Icon name="play-arrow" size={25} type="material" />}
            textStyles={{ color: Colors.warning }}
            viewStyle={[Gutters.smallTPadding]}
            text={
              item.firstName && item.lastName
                ? `${item.gender === 'MALE' ? 'Ông' : 'Bà'} ${item.firstName} ${
                    item.lastName
                  }`
                : `${t(`plane:${item.key}`)} ${item.id + 1}`
            }
            divider="small"
            swapHeader
            onPress={() => onChooseCustomer(item)}
          />
        ))
      ) : (
        <DividerButtonForm
          iconRight={<Icon name="play-arrow" size={25} type="material" />}
          textStyles={{ color: Colors.warning }}
          viewStyle={[Gutters.smallTPadding]}
          text={title || ''}
          divider="small"
          swapHeader
        />
      )}

      <BottomDrawer snapPoint="55%" ref={bottomSheetModalRef}>
        <MemoizedCustomerInput
          pickedUser={pickedUser}
          closeModal={closeModal}
        />
      </BottomDrawer>
    </View>
  );
};
const MemoizedCustomerInputForm = memo(CustomerInput);

const PlaneCustomerInfo = () => {
  const dispatch = useDispatch();
  const { Gutters, Layout } = useTheme();
  const { t } = useTranslation(['plane']);

  const onContinue = useCallback(() => {
    dispatch(setSteps({ steps: 1 }));
  }, []);

  return (
    <View
      style={[
        Layout.fullHeight,
        Layout.justifyContentBetween,
        { backgroundColor: Colors.white },
      ]}
    >
      <View>
        <PlaneHoldTime>
          <MemoizedCustomerInputForm label={'Thông tin hành khách'} />
        </PlaneHoldTime>
      </View>
      <Button
        viewStyle={[Gutters.smallBMargin]}
        title={t('plane:continue')}
        height={45}
        type="primary"
        align="center"
        radius={30}
        onPress={onContinue}
      />
    </View>
  );
};

export default PlaneCustomerInfo;
