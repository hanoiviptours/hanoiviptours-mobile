import React, { FC, useCallback, memo, useState, useMemo } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { useTranslation } from 'react-i18next';
import { RenderHoldTimeOuter } from './PlaneHoldTime';
import { InputForm, RadioButtons, Button } from '@/components';
import { setFlightInfo } from '@/store/flight';
import { ICustomerInfomations } from 'types/flight';
const MemoInputForm = memo(InputForm);

type IPlaneCustomerInput = {
  pickedUser: ICustomerInfomations;
  closeModal?: () => void;
};

type IUserInputName = {
  firstName: string;
  lastName: string;
  onChangeValue: React.Dispatch<React.SetStateAction<ICustomerInfomations>>;
};

const UserInputName: FC<IUserInputName> = memo(
  ({ onChangeValue, firstName, lastName }) => {
    const { Gutters, Layout } = useTheme();
    const { t } = useTranslation(['plane']);

    const onChangeFirstName = useCallback(
      (value: string) => {
        onChangeValue(prevCustomerInputs => ({
          ...prevCustomerInputs,
          firstName: value,
        }));
      },
      [onChangeValue],
    );

    const onChangeLastName = useCallback(
      (value: string) => {
        onChangeValue(prevCustomerInputs => ({
          ...prevCustomerInputs,
          lastName: value,
        }));
      },
      [onChangeValue],
    );

    return (
      <View
        style={[
          Layout.col,
          Layout.center,
          Layout.justifyContentBetween,
          Gutters.tinyPadding,
        ]}
      >
        <MemoInputForm
          label={t('plane:firstName')}
          placeholder={firstName}
          onChangeText={onChangeFirstName}
        />
        <MemoInputForm
          label={t('plane:name')}
          placeholder={lastName}
          onChangeText={onChangeLastName}
        />
      </View>
    );
  },
);

const PlaneCustomerInput: FC<IPlaneCustomerInput> = ({
  closeModal,
  pickedUser,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();

  const currentCustomerInfos = useSelector((state: any) => state.flight);
  const dispatch = useDispatch();

  const [customerInputs, setCustomerInputs] = useState<ICustomerInfomations>({
    ...pickedUser,
    gender: pickedUser.gender ? pickedUser.gender : 'MALE',
  });

  const updateCustomerInfos = useMemo(() => {
    return currentCustomerInfos.customers.map((item: ICustomerInfomations) => {
      if (item.id === customerInputs.id && item.key === customerInputs.key) {
        return {
          ...item,
          firstName: customerInputs.firstName,
          lastName: customerInputs.lastName,
          gender: customerInputs.gender,
        };
      } else {
        return item;
      }
    });
  }, [customerInputs]);

  const onSubmitUserInputs = useCallback(() => {
    dispatch(setFlightInfo({ customers: updateCustomerInfos }));
    closeModal?.();
  }, [updateCustomerInfos]);

  const { t } = useTranslation(['plane']);

  const onChangeGender = useCallback(
    (value: string) => {
      setCustomerInputs(prevCustomerInputs => ({
        ...prevCustomerInputs,
        gender: value as 'MALE' | 'FEMALE',
      }));
    },
    [customerInputs],
  );

  const renderGender = [
    {
      id: 'MALE',
      label: t('plane:male'),
      value: customerInputs.gender,
      color: Colors.primaryColor,
    },
    {
      id: 'FEMALE',
      label: t('plane:female'),
      value: customerInputs.gender,
      color: Colors.primaryColor,
    },
  ];

  return (
    <View
      style={[
        Layout.fullHeight,
        Layout.justifyContentBetween,
        { backgroundColor: Colors.white },
      ]}
    >
      <View>
        <RenderHoldTimeOuter>
          <Text
            style={[
              Gutters.tinyLPadding,
              Gutters.tinyRPadding,
              Fonts.textSmall,
              { paddingTop: 5, paddingBottom: 5, color: Colors.white },
            ]}
          >
            {t('plane:userInputTooltip')}
          </Text>
        </RenderHoldTimeOuter>
        <View
          style={[
            Layout.row,
            Layout.center,
            Layout.justifyContentBetween,
            Gutters.tinyPadding,
            Gutters.smallLPadding,
            Gutters.smallRPadding,
          ]}
        >
          <Text style={[Fonts.textSmall]}>{t('plane:gender')}</Text>
          <RadioButtons
            renderButtons={renderGender}
            selectedValue={customerInputs.gender}
            onChangeValue={onChangeGender}
          />
        </View>
        <UserInputName
          firstName={customerInputs.firstName}
          lastName={customerInputs.lastName}
          onChangeValue={setCustomerInputs}
        />
      </View>

      <View>
        <Button
          viewStyle={[Gutters.smallBMargin]}
          title={t('plane:done')}
          height={45}
          type="primary"
          align="center"
          radius={30}
          onPress={onSubmitUserInputs}
        />
      </View>
    </View>
  );
};

export default PlaneCustomerInput;
