import React, { useCallback } from 'react';
import { Switch as SwitchComponent } from 'react-native';
import { Colors } from '../../theme/Variables';

type SwitchProps = {
  isEnabled: boolean;
  onSwitch: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch = ({ isEnabled, onSwitch }: SwitchProps) => {
  const toggleSwitch = useCallback(
    () => onSwitch((previousState: boolean) => !previousState),
    [onSwitch],
  );

  return (
    <SwitchComponent
      style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
      trackColor={{ false: '#767577', true: Colors.primaryColor }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default Switch;
