import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { Text } from '@/components';
import { useTranslation } from 'react-i18next';

interface GuideProps {
  type: 'money' | 'banking';
}

const Guide: React.FC<GuideProps> = ({ type }) => {
  const { Gutters, darkMode: isDark } = useTheme();

  const { t } = useTranslation(['dashboard']);
  return (
    <View style={[Gutters.tinyBMargin]}>
      <Text type="title" align="left" style={{ margin: 15 }}>
        {type === 'money'
          ? t('topupItems.pickvalue')
          : t('topupItems.pickbank')}
      </Text>
      <Text
        type="caption"
        align="left"
        style={{ marginLeft: 15, marginBottom: 10 }}
      >
        {type === 'money'
          ? t('topupItems.caption')
          : t('topupItems.bankcaption')}
      </Text>
    </View>
  );
};

export default Guide;
