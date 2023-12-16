import React, { useMemo } from 'react';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Colors } from '@/theme/Variables';

type IRadioButtonsProps = {
  renderButtons: RadioButtonProps[];
  selectedValue: string | undefined;
  onChangeValue: (value: string | 'MALE' | "FEMALE") => void;
};
const RadioButtons = ({
  renderButtons,
  selectedValue,
  onChangeValue,
}: IRadioButtonsProps) => {
  const radioButtons: RadioButtonProps[] = useMemo(() => renderButtons, []);

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={onChangeValue}
      selectedId={selectedValue}
      layout="row"
    />
  );
};

export default RadioButtons;
