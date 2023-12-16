import React from 'react';
import { useTheme } from '../../hooks';
import { Icon as LibIcon } from '@rneui/themed';
import { Colors } from '../../theme/Variables';

type IIconProps = {
  name: string;
  size: number;
  type: string;
  color: string;
  setState?: (state: any) => void;
  style?: any;
};
const Icon = ({ name, size, color, type, setState, style }: IIconProps) => {
  const { Gutters } = useTheme();

  return (
    <>
      <LibIcon
        color={color}
        containerStyle={style}
        disabledStyle={{}}
        iconStyle={Gutters.tinyLPadding}
        name={name}
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
