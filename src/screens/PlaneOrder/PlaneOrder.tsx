import React, { useState } from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  Text,
  Platform,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ButtonGroup, DividerButtonForm, Button, Icon } from '@/components';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import ExtraUtils from './components/ExtraUtils';
import ButtonForm from './components/ButtonForm';
import RenderExtraUtils from './components/RenderExtraUtils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Reverse } from '@/theme/assets/icons';

const absoluteIcon = Platform.OS === 'ios' ? '-35%' : '-20%';
const PlaneOrder = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation(['plane']);
  const { Gutters, Layout, darkMode: isDark } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isEnableRound, setIsEnableRound] = useState(false);

  const renderButtons = ButtonForm({
    t,
    isEnabled: isEnableRound,
    onSwitch: setIsEnableRound,
  });
  const renderExtraUtils = RenderExtraUtils(t);

  const handlePress = (value: number) => {
    setSelectedIndex(value);
  };
  return (
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
              text={item.text}
            />
            {index === 1 && (
              <View style={[Layout.absolute, { top: absoluteIcon, right: 20 }]}>
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
  );
};

export default PlaneOrder;
