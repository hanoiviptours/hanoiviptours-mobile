import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '@/theme/Variables';
import { Icon } from '@/components';

type IconProps = {
  type: string;
  name: string;
  size: number;
  color: string;
  svg?: any;
};

const RenderIcon = ({ type, name, size, color, svg }: IconProps) => {
  const { Layout, Gutters } = useTheme();
  switch (type) {
    case 'svg':
      return svg;
    default:
      return (
        <Icon
          style={[Layout.center, Gutters.tinyRPadding]}
          name={name}
          size={size}
          color={color}
          type={type}
        />
      );
  }
};

type IBoxIconTextProps = {
  width: number;
  height: number;
  boxColor: string;
  styles?: any;
  textStyles?: any;
  icon: IconProps;
  text: string;
  subText?: string;
  onPress?: () => void;
};
const BoxIconText: FC<IBoxIconTextProps> = ({
  width,
  height,
  styles,
  boxColor,
  textStyles,
  icon,
  text,
  subText,
  onPress,
}) => {
  const { Gutters, Layout, Fonts } = useTheme();
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          Layout.col,
          Layout.center,
          Gutters.regularTMargin,
          {
            ...styles,
            backgroundColor: boxColor,
            width: width,
            height: height,
            borderRadius: 5,
          },
        ]}
      >
        <RenderIcon {...icon} />
        <Text style={[Fonts.textTiny, { ...textStyles }]}>{text}</Text>
        {subText && (
          <Text
            style={[
              Fonts.textTiny,
              { color: Colors.white, paddingBottom: 5, fontWeight: '600' },
            ]}
          >
            {subText}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BoxIconText;
