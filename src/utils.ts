type currencyType = 'USD' | 'VND';

export const formatMoney = (amount: number, currency: currencyType) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(amount);
};
