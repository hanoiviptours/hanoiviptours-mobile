export const createNewCustomerInfos = (
  customer: number,
  key: 'adult' | 'children' | 'baby',
) => {
  return Array.from({ length: customer }, (_, index) => ({
    id: index,
    key: key,
    firstName: '',
    lastName: '',
    gender: 'MALE' as 'MALE' | 'FEMALE',
  }));
};
