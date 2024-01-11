import moment from 'moment';

export const formatMoney = (amount: number | string, currency: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  const formattedAmount = formatter.format(Number(amount));
  const currencySymbol = formattedAmount.replace(/[0-9.,]/g, '').trim();
  const amountValue = formattedAmount.replace(currencySymbol, '').trim();
  return `${amountValue}${currencySymbol}`;
};

export const formatDate = (date: Date | string, format: string) => {
  return moment(date).format(format);
};
