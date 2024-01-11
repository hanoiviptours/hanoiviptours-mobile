import React from 'react';
import { View } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';

type SinglePickerProps = {
  isOpen: boolean;
  onDismiss: () => void;
  onConfirm: ({ date }: any) => void;
  date?: Date;
};

const SingleDatePicker = ({
  isOpen,
  onDismiss,
  date,
  onConfirm,
}: SinglePickerProps) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <DatePickerModal
        locale="custom"
        mode="single"
        visible={isOpen}
        onDismiss={onDismiss}
        date={date}
        onConfirm={onConfirm}
      />
    </View>
  );
};
export default SingleDatePicker;
