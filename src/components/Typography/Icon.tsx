import React, { CSSProperties } from 'react';
import { useTheme } from '../../hooks';
import { changeTheme, ThemeState } from '../../store/theme';
import { Icon as LibIcon } from '@rneui/themed';
import { Colors } from '../../theme/Variables';

type Props = {
  name?: string;
  size?: number;
  type?: string;
  color?: string;
  setState?: (state: any) => void;
};
const Icon = ({ name, size, color, type, setState }: Props) => {
  const { Gutters, darkMode: isDark } = useTheme();

  return (
    <>
      <LibIcon
        color={color}
        containerStyle={{}}
        disabledStyle={{}}
        iconStyle={Gutters.tinyLPadding}
        name={name ? name : ''}
        onLongPress={() => console.log('onLongPress()')}
        onPress={setState}
        size={size}
        type={type}
      />
    </>
  );
};

Icon.defaultProps = {
  color: Colors.primaryColor,
  size: 24,
  type: 'material',
};
export default Icon;
