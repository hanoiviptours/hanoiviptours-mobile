import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '../../theme/Variables';

type DividerButtonFormProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  textRight?: string;
  subText?: string;
  subTextRow?: boolean;
  text: string;
  textStyles?: any;
  subTextStyles?: any;
  viewStyle?: any;
  onPress?: () => void;
  swapHeader?: boolean;
  divider?: 'tiny' | 'small' | 'medium' | 'large';
};

const DividerButtonForm = ({
  iconLeft,
  iconRight,
  textRight,
  subText = '',
  subTextStyles,
  subTextRow = false,
  swapHeader = false,
  text,
  textStyles,
  viewStyle,
  onPress,
  divider = 'medium',
}: DividerButtonFormProps) => {
  const { Gutters, Fonts, Layout } = useTheme();
  const dividerHeight =
    divider === 'small'
      ? Gutters.smallTMargin
      : divider === 'medium'
      ? Gutters.regularTMargin
      : Gutters.largeTMargin
      ? divider === 'tiny' && Gutters.tinyTMargin
      : null;

  return (
    <TouchableOpacity
      style={[
        Layout.col,
        Gutters.tinyTMargin,
        {
          height: 'auto',
        },
        viewStyle,
      ]}
      onPress={onPress ? onPress : () => {}}
    >
      <View style={[Layout.justifyContentBetween]}>
        <View
          style={[Layout.alignItemsStart, Layout.alignItemsCenter, Layout.row]}
        >
          <View style={[Gutters.tinyLMargin, Gutters.tinyRMargin]}>
            {iconLeft}
          </View>
          <View style={[!subTextRow ? Layout.col : Layout.row]}>
            {swapHeader && (
              <Text style={[textStyles, Fonts.textSmall]}>{text}</Text>
            )}
            {subText !== '' ? (
              <Text
                style={[
                  subTextStyles,
                  Fonts.textTiny,
                  { color: Colors.textGray400 },
                ]}
              >
                {subText}
              </Text>
            ) : null}
            {!swapHeader && <Text style={[Fonts.textSmall]}>{text}</Text>}
          </View>

          <View
            style={[
              Layout.row,
              Layout.leftAlignAuto,
              Gutters.smallRMargin,
              Layout.alignItemsCenter,
            ]}
          >
            {textRight && <Text style={[Fonts.textSmall]}>{textRight}</Text>}
            {iconRight}
          </View>
        </View>

        <View
          style={[
            Layout.fill,
            dividerHeight,
            Gutters.smallLMargin,
            Gutters.smallRMargin,
            Layout.center,
            {
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
