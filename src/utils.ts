import moment from 'moment';
type currencyType = 'USD' | 'VND';

export const formatMoney = (amount: number, currency: currencyType) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(amount);
};

export const formatDate = (date: Date, format: string) => {
  return moment(date).format(format);
};
