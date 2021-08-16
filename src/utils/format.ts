export const moneyFormat = (value = 0): string => {
  let response = null;
  try {
    response = new Intl.NumberFormat('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    }).format(value);
  } catch (e) {
    throw Error(e);
  }

  return response;
};
