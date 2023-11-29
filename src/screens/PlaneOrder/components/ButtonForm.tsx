import { Icon } from '@/components';
import { TFunction } from 'i18next';
import { Switch } from '@/components';

const iconSize = 30;

export interface IButtonForm {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element | null;
  subText?: string;
  text?: string;
  disabled?: boolean;
  onPress?: () => void;
}

export interface IPickedValueProps {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element | null;
  subText?: string | Date;
  text?: string | Date;
  disabled?: boolean;
  startDate?: string;
  endDate?: string;
}
interface PressEventProps {
  handleDatePicker: (dateMode: 'single' | 'range') => void;
  handleCustomerPicker: () => void;
}
const ButtonForm = ({
  t,
  isEnabled,
  onSwitch,
  pressEvent,
  pickedValue,
}: {
  t?: TFunction;
  isEnabled: boolean;
  onSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  pressEvent: PressEventProps;
  pickedValue: IPickedValueProps;
}): IButtonForm[] => [
  {
    iconLeft: (
      <Icon name="airplane-takeoff" type="material-community" size={iconSize} />
    ),
    iconRight: null,
    subText: 'Điểm đi',
    text: 'Hà Nội',
  },
  {
    iconLeft: (
      <Icon name="airplane-landing" type="material-community" size={iconSize} />
    ),
    iconRight: null,
    subText: 'Điểm đến',
    text: 'Hồ Chí Minh',
  },
  {
    iconLeft: (
      <Icon name="airplane-clock" type="material-community" size={iconSize} />
    ),
    iconRight: <Switch isEnabled={isEnabled} onSwitch={onSwitch} />,
    subText: 'Ngày đi',
    text: pickedValue?.startDate,
    onPress: () => pressEvent.handleDatePicker('single'),
  },
  {
    iconLeft: (
      <Icon name="airplane-clock" type="material-community" size={iconSize} />
    ),
    disabled: !isEnabled,
    iconRight: null,
    subText: 'Ngày về',
    text: pickedValue?.endDate,
    onPress: () => pressEvent.handleDatePicker('range'),
  },
  {
    iconLeft: (
      <Icon name="account-group" type="material-community" size={iconSize} />
    ),
    iconRight: <Icon name="chevron-right" size={30} />,
    subText: 'Số lượng khách',
    text: '1 người lớn',
    onPress: () => pressEvent.handleCustomerPicker(),
  },
  {
    iconLeft: (
      <Icon name="airplane" type="material-community" size={iconSize} />
    ),
    iconRight: <Icon name="chevron-right" size={30} />,
    subText: 'Hạng vé',
    text: 'Tất cả',
  },
];

export default ButtonForm;
