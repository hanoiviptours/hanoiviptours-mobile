import React, { useState } from 'react';
import {
  Dimensions,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../hooks';
import { useLazyFetchOneQuery } from '../../../services/modules/users';
// import Icon from '../../Typography/Icon.tsx';
import {
  ImagePicker,
  InputForm,
} from '../../../components';
import { Button } from '@rneui/themed';
import {
  registerBusiness,
  registerGuidelines,
  registerStepThreeID,
  stepThreeSubmit,
} from '../ulities';
import { DefaultVariables } from '../../../theme/index';

type Props = {
  activeStep: number;
  setActiveStep: any;
};

const windowHeight = Dimensions.get('window').height;

const StepThree = ({ setActiveStep, activeStep }: Props) => {
  const [idNumber, setIdNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [referral, setReferral] = useState('');

  const { t } = useTranslation(['register']);
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    darkMode: isDark,
  } = useTheme();
  const dispatch = useDispatch();

  const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
    useLazyFetchOneQuery();

  const handleClick = () => {
    if (activeStep < 3) {
      setActiveStep((prevActiveStep: number) => prevActiveStep + 1);
    }
  };

  const registerIdCard = registerStepThreeID({
    titleFront: t('register:frontIdText'),
    titleBack: t('register:backIdText'),
  });

  const renderBusiness = registerBusiness();
  const renderGuidelines = registerGuidelines({
    header: t('register:guideHeader'),
    guidelineOne: t('register:guideOne'),
    guidelineTwo: t('register:guideTwo'),
    guidelineThree: t('register:guideThree'),
  });
  const submitButton = stepThreeSubmit({
    title: t('register:send'),
    isInputEmpty: false,
  });
  return (
    <View
      style={[
        Layout.fullWidth,
        Layout.fill,
        Layout.justifyContentBetween,
        {
          paddingBottom: windowHeight * 0.1,
        },
      ]}
    >
      <View style={[Layout.center]}>
        <Text
          style={[
            Fonts.textCenter,
            Fonts.textTiny,
            Gutters.smallBMargin,
            {
              width: '90%',
            },
          ]}
        >
          {t('register:step3Guide')}
        </Text>
      </View>
      <View style={[Gutters.smallLMargin, Gutters.smallBMargin]}>
        <Text style={[Fonts.textRegular, Fonts.textBold]}>
          {t('register:step3IdHeader')}
        </Text>
      </View>
      <InputForm
        text={t('register:step3IdInput')}
        onChangeText={(value: React.SetStateAction<string>) => setIdNumber(value)}
        placeholder={t('register:step3IdInput')}
        keyboardType={'numeric'}
        inputStyle={[Fonts.textSmall]}
      />
      <View style={[Layout.rowCenter]}>
        {registerIdCard.map((item: any, index: number) => (
          <ImagePicker
            key={index}
            space={item.space}
            width={item.width}
            title={item.title}
          />
        ))}
      </View>
      <View style={[Gutters.smallLMargin]}>
        <Text style={[Fonts.textRegular, Fonts.textBold]}>
          {t('register:step3Header2')}
        </Text>
      </View>

      <View style={[Layout.rowCenter, Layout.fill, Layout.fullWidth]}>
        {renderBusiness.map((item: any, index: number) => (
          <ImagePicker key={index} width={item.width} />
        ))}
      </View>

      <View style={[Layout.center, Gutters.smallTMargin]}>
        {renderGuidelines.map((item: any, index: number) => (
          <Text
            key={index}
            style={[
              Gutters.superTinyBMargin,
              {
                width: '90%',
                color: item.color,
              },
            ]}
          >
            {item.title}
          </Text>
        ))}
      </View>
      <View style={[Layout.rowCenter]}>
        {submitButton.map((item: any, index: number) => (
          <Button
            key={index}
            title={item.title}
            buttonStyle={{ ...item.buttonStyle }}
            containerStyle={{ ...item.containerStyle }}
            type={item.type}
            // onPress={handleClick}
            titleStyle={{ ...item.titleStyle }}
          />
        ))}
      </View>
    </View>
  );
};

export default StepThree;
