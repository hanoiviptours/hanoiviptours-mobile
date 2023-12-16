import { Icon } from '@/components';
import { TFunction } from 'i18next';
import { Switch } from '@/components';
import { ICustomerInfomations } from '@/store/flight';

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

const renderCustomer = (
  t: TFunction,
  customerInfomations?: ICustomerInfomations[],
) => {
  const customerCountMap: { [key: string]: number } = {};

  customerInfomations?.forEach(customer => {
    const { key } = customer;
    if (customerCountMap[key]) {
      customerCountMap[key]++;
    } else {
      customerCountMap[key] = 1;
    }
  });

  const renderedCustomers = Object.entries(customerCountMap).map(
    ([type, count]) => {
      return `${count} ${t(`plane:${type}`).toLowerCase()} `;
    },
  );

  const joinedCustomers = renderedCustomers.join(', ');
  return joinedCustomers;
};

const ButtonForm = ({
  t,
  isEnabled,
  onSwitch,
  pressEvent,
  pickedValue,
  customerInfomation,
}: {
  t: TFunction;
  isEnabled: boolean;
  onSwitch: React.Dispatch<React.SetStateAction<boolean>>;
  pressEvent: PressEventProps;
  pickedValue: IPickedValueProps;
  customerInfomation: ICustomerInfomations[];
}): IButtonForm[] => [
  {
    iconLeft: (
      <Icon name="airplane-takeoff" type="material-community" size={iconSize} />
    ),
    iconRight: null,
    subText: t('plane:departurePoint'),
    text: 'Hà Nội',
  },
  {
    iconLeft: (
      <Icon name="airplane-landing" type="material-community" size={iconSize} />
    ),
    iconRight: null,
    subText: t('plane:destination'),
    text: 'Hồ Chí Minh',
  },
  {
    iconLeft: (
      <Icon name="airplane-clock" type="material-community" size={iconSize} />
    ),
    iconRight: <Switch isEnabled={isEnabled} onSwitch={onSwitch} />,
    subText: t('plane:departureDate'),
    text: pickedValue?.startDate,
    onPress: () => pressEvent.handleDatePicker('single'),
  },
  {
    iconLeft: (
      <Icon name="airplane-clock" type="material-community" size={iconSize} />
    ),
    disabled: !isEnabled,
    iconRight: null,
    subText: t('plane:returnDate'),
    text: pickedValue?.endDate,
    onPress: () => pressEvent.handleDatePicker('range'),
  },
  {
    iconLeft: (
      <Icon name="account-group" type="material-community" size={iconSize} />
    ),
    iconRight: <Icon name="chevron-right" size={30} />,
    subText: t('plane:customerNumber'),
    text: renderCustomer(t, customerInfomation),
    onPress: () => pressEvent.handleCustomerPicker(),
  },
  {
    iconLeft: (
      <Icon name="airplane" type="material-community" size={iconSize} />
    ),
    iconRight: <Icon name="chevron-right" size={30} />,
    subText: t('plane:ticketClass'),
    text: 'Tất cả',
  },
];

export default ButtonForm;
