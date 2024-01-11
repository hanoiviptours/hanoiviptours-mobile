export const createNewCustomerInfos = (
  customer: number,
  key: 'adults' | 'children' | 'infants',
) => {
  return Array.from({ length: customer }, (_, index) => ({
    id: index,
    key: key,
    firstName: '',
    lastName: '',
    gender: 'MALE' as 'MALE' | 'FEMALE',
  }));
};
