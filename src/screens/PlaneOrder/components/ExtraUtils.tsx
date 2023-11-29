import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useTheme } from '@/hooks';
import { Colors } from '../../../theme/Variables';

type CardProps = {
  icon: React.ReactNode;
  header: string;
  content?: string;
  style?: any;
  background: string;
  headerColor?: string;
};

const Card = ({
  icon,
  header,
  content,
  style,
  background,
  headerColor,
}: CardProps) => {
  const { Layout, Gutters, Fonts, darkMode: isDark } = useTheme();

  return (
    <TouchableOpacity
      style={[
        Layout.row,
        Layout.alignItemsCenter,
        Gutters.smallMargin,
        style,
        { backgroundColor: background },
      ]}
    >
      <View style={[Gutters.smallRMargin, Gutters.tinyLMargin]}>{icon}</View>
      <View style={[Layout.fill]}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: headerColor }}>
          {header}
        </Text>
        {content && (
          <Text style={[Fonts.textTiny, { color: Colors.textGray400 }]}>
            {content}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
