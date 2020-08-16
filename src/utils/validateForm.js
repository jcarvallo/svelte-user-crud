export const validateForm = (fileds) => {
  let required = {};
  for (const [key, value] of Object.entries(fileds)) {
    if (value==='') {
      required[key] = "Campo requerido";
    } 
  }
  return required;
};
