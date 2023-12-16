import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '../../theme/Variables';

type DividerFormProps = {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  subText?: string;
  subTextRow?: boolean;
  text: string;
  textStyles?: any;
  subTextStyles?: any;
  viewStyle?: any;
  swapHeader?: boolean;
  divider?: 'tiny' | 'small' | 'medium' | 'large';
};

const DividerForm = ({
  iconLeft,
  iconRight,
  subText = '',
  subTextStyles,
  subTextRow = false,
  swapHeader = false,
  text,
  textStyles,
  viewStyle,
  divider = 'medium',
}: DividerFormProps) => {
  const { Gutters, Fonts, Layout } = useTheme();
  const dividerHeight =
    divider === 'small'
      ? Gutters.smallTMargin
      : divider === 'medium'
      ? Gutters.regularTMargin
      : Gutters.largeTMargin;

  return (
    <View
      style={[
        Layout.col,
        Gutters.tinyTMargin,
        {
          height: 'auto',
        },
        viewStyle,
      ]}
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

          <View style={[Layout.leftAlignAuto, Gutters.smallRMargin]}>
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
    </View>
  );
};

export default DividerForm;
