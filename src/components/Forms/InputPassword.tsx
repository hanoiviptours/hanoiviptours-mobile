import React, { useState } from 'react';
import { useTheme } from '../../hooks';
import { Input } from '@rneui/base';
import Icon from '../Typography/Icon';

import { DefaultVariables } from '../../theme/index';

const { Icons } = DefaultVariables;

type Props = {
  onChangeText?: any;
  isSubmit?: boolean;
  styles?: any;
  placeholder?: string;
};
const InputPassword = ({ onChangeText, styles, placeholder }: Props) => {
  const { darkMode: isDark } = useTheme();
  const [isShow, setIsShow] = useState(false);
  const visibilityIcon = isShow ? Icons.eyeOff : Icons.eye;
  return (
    <Input
      containerStyle={styles}
      leftIcon={<Icon name={Icons.lock} size={24} />}
      rightIcon={
        <Icon
          name={visibilityIcon}
          size={24}
          setState={() => setIsShow((prev: boolean) => (prev = !prev))}
          type="material-community"
        />
      }
      leftIconContainerStyle={{}}
      rightIconContainerStyle={{}}
      placeholder={placeholder}
      onChangeText={value => onChangeText(value)}
      secureTextEntry={isShow ? false : true}
    />
  );
};

export default InputPassword;
