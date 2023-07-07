const validation = (userData) => {
  const errors = {};

  if (
    !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      userData.email
    )
  ) {
    errors.email = "el email ingresado no es valido";
  }
  if (!userData.email) {
    errors.email = "debe ingresar un email";
  }
  if (userData.email.length > 35) {
    errors.email = "el email no debe superar los 35 caracteres";
  }

  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "la contraseña debe tener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "la contraseña debe ser entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
