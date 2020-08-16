export const formatSaldo = (valor) => {
  let value = parseInt(valor === "" ? 0 : valor);
  let saldo = {
    value,
    formateado: value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."),
  };

  return saldo;
};
