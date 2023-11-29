import React from 'react';
import { View, Text, ViewStyle, useWindowDimensions } from 'react-native';
import { useTheme } from '@/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../theme/Variables';

type IconTextIconProps = {
  iconLeft: React.ReactNode;
  iconRight: React.ReactNode;
  subText?: string;
  subTextRow?: boolean;
  text: string;
  viewStyle?: ViewStyle;
  onPress?: () => void;
  swapHeader?: boolean;
};

const DividerButtonForm = ({
  iconLeft,
  iconRight,
  subText = '',
  subTextRow = false,
  swapHeader = false,
  text,
  viewStyle,
  onPress,
}: IconTextIconProps) => {
  const { Gutters, Fonts, Layout } = useTheme();

  const { height } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[
        Layout.col,
        Gutters.tinyTMargin,
        { height: height / 13 },
        viewStyle,
      ]}
      onPress={onPress}
    >
      <View style={[Layout.justifyContentBetween]}>
        <View
          style={[Layout.alignItemsStart, Layout.alignItemsCenter, Layout.row]}
        >
          <View style={[Gutters.tinyLMargin, Gutters.tinyRMargin]}>
            {iconLeft}
          </View>
          <View style={[!subTextRow ? Layout.col : Layout.row]}>
            {swapHeader && <Text style={[Fonts.textSmall]}>{text}</Text>}
            {subText !== '' ? (
              <Text style={{ color: Colors.textGray400, fontSize: 11 }}>
                {subText}
              </Text>
            ) : null}
            {!swapHeader && <Text style={[Fonts.textSmall]}>{text}</Text>}
          </View>

          <View style={[Layout.leftAlignAuto, Gutters.smallRMargin]}>
            {iconRight}
          </View>
        </View>

        <View
          style={[
            Gutters.regularTMargin,
            Gutters.regularLMargin,
            Gutters.regularRMargin,
            Layout.alignItemsCenter,
            {
              width: '85%',
              borderBottomWidth: 1,
              borderBottomColor: '#E5E5E5',
            },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default DividerButtonForm;
