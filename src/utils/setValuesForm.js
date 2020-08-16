const initialForm = {
  nombre: "",
  apellido: "",
  dni: "",
  cuenta: "",
  clave: "",
  saldo: { value: 0, formateado: "" },
};

export const initialValuesForm = () => initialForm;

export const setValuesForm = (user) => {
  let values = {};
  if (Object.values(user).length > 0) {
    for (const [key, value] of Object.entries(user)) {
      if (Object.keys(initialForm).some((name) => name === key)) {
        values[key] = value;
      }
    }
  }
  return values;
};
