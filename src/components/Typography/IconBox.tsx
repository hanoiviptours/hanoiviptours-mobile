import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import IconComponent from './Icon';

type IconProps = {
  type: string;
  name: string;
  size: number;
  color: string;
  svg: any;
};

const RenderIcon = ({ type, name, size, color, svg }: IconProps) => {
  switch (type) {
    case 'svg':
      return svg;
    default:
      return (
        <IconComponent name={name} size={size} color={color} type={type} />
      );
  }
};

type renderFunctionProps = {
  styles: ViewStyle[];
  textStyles: any;
  icon: IconProps;
  text: string;
  onPress?: () => void;
};

const IconBox = ({
  styles,
  textStyles,
  icon,
  text,
  onPress,
}: renderFunctionProps) => {
  return (
    <TouchableOpacity
      style={[styles, { alignItems: 'center' }]}
      onPress={onPress}
    >
      <RenderIcon {...icon} />
      <Text style={[textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};
export default IconBox;
