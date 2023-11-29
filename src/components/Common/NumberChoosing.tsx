import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import { Text, Icon } from '@/components';

type NumberChoosingProps = {
  value: number;
  onValueChange: (newValue: number) => void;
  iconSize: number;
};

const NumberChoosing = ({
  value,
  onValueChange,
  iconSize,
}: NumberChoosingProps) => {
  const { Layout, Gutters } = useTheme();

  const handleMinusPress = useCallback(() => {
    if (value > 0) {
      onValueChange(value - 1);
    }
  }, [value, onValueChange]);

  const handlePlusPress = useCallback(() => {
    onValueChange(value + 1);
  }, [value, onValueChange]);

  return (
    <View style={[Layout.row, Layout.alignItemsCenter]}>
      <TouchableOpacity
        onPress={handleMinusPress}
        style={[Gutters.tinyRMargin]}
      >
        <Icon name="remove-circle" size={iconSize} />
      </TouchableOpacity>
      <Text
        type="body"
        align="center"
        style={[Gutters.tinyRMargin, Gutters.tinyLMargin]}
      >
        {value}
      </Text>
      <TouchableOpacity onPress={handlePlusPress}>
        <Icon name="add-circle" size={iconSize} />
      </TouchableOpacity>
    </View>
  );
};

export default NumberChoosing;
