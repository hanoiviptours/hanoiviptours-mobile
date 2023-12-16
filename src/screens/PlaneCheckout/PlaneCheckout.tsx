import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { useTranslation } from 'react-i18next';
import {
  PlaneCustomerInfo,
  PlanePlaceOrder,
  PlaneServices,
  PlaneCheckoutFinish,
} from './PlaneCheckoutSteps';
import { Stepper } from '@/components';
import { useSelector } from 'react-redux';

const PlaneCheckout = () => {
  const checkoutSteps = useSelector((state: any) => state.steps);

  const { Layout } = useTheme();
  const { t } = useTranslation(['plane']);

  const steps = [
    {
      label: t('plane:step1'),
      component: <PlaneCustomerInfo />,
    },
    {
      label: t('plane:step2'),
      component: <PlaneServices />,
    },
    {
      label: t('plane:step3'),
      component: <PlanePlaceOrder />,
    },
    {
      label: t('plane:step4'),
      component: <PlaneCheckoutFinish />,
    },
  ];

  return (
    <View style={[Layout.fill, { backgroundColor: Colors.white }]}>
      <Stepper
        activeStep={checkoutSteps.steps}
        steps={steps}
        marginBottom={20}
        scrollable={false}
      />
    </View>
  );
};

export default PlaneCheckout;
