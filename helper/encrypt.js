import bcrypt from "bcryptjs";

/**
 * Funcion para hashear mi passwprd
 * @param {string} password
*/
export const hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  return hashPassword;
};

/**
 * Funcion para comparar mi password
 * @param {string} password
 * @param {string} hash
 * @return boolean
 */
//* ojo en este caso como solo retorno una linea el return no hace falta
export const compare = (password, hash) => bcrypt.compareSync(password, hash);

/*
export const hash = async (password) => {
  bcrypt.genSalt(10, (error, salt) => {
    if (error) return;

    bcrypt.hash(password, salt, (error, hash) => {
      if (error) return;

      return hash;
    });
  });
};
*/