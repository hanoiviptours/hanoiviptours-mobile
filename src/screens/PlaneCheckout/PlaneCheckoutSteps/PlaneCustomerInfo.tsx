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
import { ICustomerInfomations } from 'types/flight';
import { setSteps } from '@/store/checkoutsteps';

const MemoizedCustomerInput = memo(CustomerInputForm);

type CustomerInputProps = {
  label: string;
  title?: string;
  isContactUser?: boolean;
};

const initialUserInfomations: ICustomerInfomations = {
  id: 0,
  gender: 'MALE',
  firstName: '',
  lastName: '',
  key: 'adults',
  seat: '',
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
        {`${label} `}
        <Text style={[Fonts.textPrimary, { color: Colors.error }]}>*</Text>
      </Text>

      {currentCustomerInfos &&
        customerInfos.map((item: ICustomerInfomations, index: number) => (
          <DividerButtonForm
            key={index}
            iconRight={<Icon name="play-arrow" size={20} type="material" />}
            textStyles={{ color: Colors.warning }}
            viewStyle={[Gutters.smallTPadding]}
            text={
              item.firstName && item.lastName
                ? `${item.gender === 'MALE' ? 'Ông' : 'Bà'} ${item.firstName} ${
                    item.lastName
                  }`
                : `${t(`plane:${item.key}`)} ${item.id + 1}`
            }
            subText={item.firstName && item.lastName && t(`plane:${item.key}`)}
            divider="tiny"
            swapHeader
            onPress={() => onChooseCustomer(item)}
          />
        ))}

      <BottomDrawer snapPoint="55%" ref={bottomSheetModalRef}>
        <MemoizedCustomerInput
          pickedUser={pickedUser}
          closeModal={closeModal}
        />
      </BottomDrawer>
    </View>
  );
};

const CustomerContactInput: FC<CustomerInputProps> = ({
  label,
  isContactUser,
}) => {
  const { Gutters, Fonts } = useTheme();
  const { t } = useTranslation(['plane']);
  const [pickedUser, setPickedUser] = useState<ICustomerInfomations>(
    initialUserInfomations,
  );

  const { bottomSheetModalRef, presentModal, closeModal } =
    useBottomSheetModal();

  // const onChooseCustomer = useCallback((currentUser: ICustomerInfomations) => {
  //   presentModal();
  //   setPickedUser(currentUser);
  // }, []);

  return (
    <View style={[Gutters.smallTMargin]}>
      <Text
        style={[Gutters.smallLPadding, Gutters.smallRPadding, Fonts.titleSmall]}
      >
        {`${label} `}
        <Text style={[Fonts.textPrimary, { color: Colors.error }]}>*</Text>
      </Text>

      {isContactUser && (
        <Text
          style={[
            Gutters.smallLPadding,
            Gutters.smallRPadding,
            Gutters.smallTMargin,
            Fonts.textTiny,
            { color: Colors.textGray400 },
          ]}
        >
          Nhận thông báo biến động chuyến bay từ hãng hàng không
        </Text>
      )}

      <DividerButtonForm
        iconRight={<Icon name="play-arrow" size={20} type="material" />}
        textStyles={{ color: Colors.warning }}
        viewStyle={[Gutters.smallTPadding]}
        text={'Đỗ Tuấn Anh'}
        textRight="0379075256"
        divider="tiny"
        // onPress={() => onChooseCustomer(item)}
      />

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
          <CustomerContactInput isContactUser label="Thông tin liên hệ" />
          <CustomerContactInput label="Thông tin khách hàng đặt vé" />
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
