import { Colors } from '@/theme/Variables';
import { TFunction } from 'i18next';

const iconSize = 28;

export interface IButtonForm {
  text: string;
  type: string;
  name: string;
  size: number;
  color: string;
  svg: JSX.Element | null;
}

export const FlightDetailGuidance = ({
  t,
  seatsLeft = 0,
}: {
  t?: TFunction;
  seatsLeft: number;
}): IButtonForm[] => [
  {
    type: 'material',
    name: 'event-seat',
    size: iconSize,
    color: Colors.primaryColor,
    svg: null,
    text: t?.('plane:seatLeft', { seatsLeft }) ?? '',
  },
  {
    type: 'material',
    name: 'luggage',
    size: iconSize,
    color: Colors.textGray200,
    svg: null,
    text: t?.('plane:handLuggage') ?? '',
  },
  {
    type: 'material',
    name: 'sync',
    size: iconSize,
    color: Colors.textGray200,
    svg: null,
    text: t?.('plane:changeTicket') ?? '',
  },
  {
    type: 'material',
    name: 'airplane-ticket',
    size: iconSize,
    color: Colors.textGray200,
    svg: null,
    text: t?.('plane:refundTicket') ?? '',
  },
  {
    type: 'material',
    name: 'airplane-ticket',
    size: iconSize,
    color: Colors.textGray200,
    svg: null,
    text: t?.('plane:changingFlights') ?? '',
  },
];
