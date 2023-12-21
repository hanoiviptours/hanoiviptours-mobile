import React from 'react';
import { useTheme } from '../../hooks';
import { Icon as LibIcon } from '@rneui/themed';
import { Colors } from '../../theme/Variables';
import { TouchableOpacity } from 'react-native-gesture-handler';

type IIconProps = {
  name: string;
  size: number;
  type: string;
  color: string;
  handleOnPress?: () => void;
  style?: any;
};
const Icon = ({
  name,
  size,
  color,
  type,
  handleOnPress,
  style,
}: IIconProps) => {
  const { Gutters } = useTheme();

  return (
    <>
      {handleOnPress ? (
        <TouchableOpacity onPress={handleOnPress}>
          <LibIcon
            color={color}
            containerStyle={style}
            disabledStyle={{}}
            iconStyle={Gutters.tinyLPadding}
            name={name}
            onLongPress={() => console.log('onLongPress()')}
            size={size}
            type={type}
          />
        </TouchableOpacity>
      ) : (
        <LibIcon
          color={color}
          containerStyle={style}
          disabledStyle={{}}
          iconStyle={Gutters.tinyLPadding}
          name={name}
          onLongPress={() => console.log('onLongPress()')}
          size={size}
          type={type}
        />
      )}
    </>
  );
};

Icon.defaultProps = {
  color: Colors.primaryColor,
  size: 24,
  type: 'material',
};
export default Icon;
