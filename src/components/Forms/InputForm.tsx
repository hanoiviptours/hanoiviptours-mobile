import React, { CSSProperties, useEffect } from 'react';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import { IconNode, Input, InputProps } from '@rneui/base';
import Icon from '../Typography/Icon';
import CountDown from 'react-native-countdown-fixed';

import { DefaultVariables } from '../../theme/index';
import { KeyboardTypeOptions } from 'react-native';
const { Colors } = DefaultVariables;

type Props = {
  onChangeText?: any;
  isSubmit?: boolean;
  styles?: any;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  icon?: string;
  description?: string;
  timers?: boolean;
  inputStyle?: any;
};

const InputForm = ({
  onChangeText,
  styles,
  placeholder,
  keyboardType,
  icon,
  description,
  timers,
  inputStyle,
}: Props) => {
  const { Fonts, darkMode: isDark } = useTheme();

  useEffect(() => {}, [timers]);
  const renderCountdown = () => {
    return timers ? (
      <CountDown
        until={!timers ? 0 : 120000}
        size={15}
        digitStyle={{
          backgroundColor: Colors.primaryColor,
          width: 50,
          borderRadius: 20,
        }}
        running={timers}
        digitTxtStyle={{ color: Colors.white }}
        timeToShow={['S']}
        timeLabels={{ '': '' }}
      />
    ) : null;
  };
  return (
    <>
      <Input
        containerStyle={styles}
        leftIcon={<Icon name={icon} size={24} />}
        // leftIconContainerStyle={{}}
        // rightIconContainerStyle={{}}
        rightIcon={renderCountdown() as IconNode}
        placeholder={placeholder !== '' ? placeholder : undefined}
        inputStyle={[Fonts.textSmall, inputStyle]}
        keyboardType={keyboardType}
        onChangeText={value => onChangeText(value)}
        secureTextEntry={false}
        errorMessage={description !== '' ? description : undefined}
        errorStyle={[Fonts.textLight]}
      />
    </>
  );
};

export default InputForm;
