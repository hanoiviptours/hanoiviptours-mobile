import moment from 'moment';

export const formatMoney = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  const formattedAmount = formatter.format(amount);
  const currencySymbol = formattedAmount.replace(/[0-9.,]/g, '').trim();
  const amountValue = formattedAmount.replace(currencySymbol, '').trim();
  return `${amountValue}${currencySymbol}`;
};

export const formatDate = (date: Date, format: string) => {
  return moment(date).format(format);
};
