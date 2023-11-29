import React from 'react';
import { View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';

type RangeDatePickerProps = {
  mode: 'single' | 'range';
  isOpen: boolean;
  onDismiss: () => void;
  onConfirm: ({ startDate, endDate }: any) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

const RangeDatePicker = ({
  mode = 'single',
  isOpen,
  onDismiss,
  startDate,
  endDate,
  onConfirm,
}: RangeDatePickerProps) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <DatePickerModal
        locale="custom"
        mode={mode}
        visible={isOpen}
        onDismiss={onDismiss}
        startDate={startDate}
        endDate={endDate}
        onConfirm={onConfirm}
      />
    </View>
  );
};
export default RangeDatePicker;
