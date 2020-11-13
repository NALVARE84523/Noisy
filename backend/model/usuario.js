// Modulos internos
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Esquema
const esquemaUsuario = new mongoose.Schema({
  nombre: String,
  nombreUsuario: String,
  correo: String,
  password: String,
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
});
// Generamos el JWT
esquemaUsuario.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      nombreUsuario: this.nombreUsuario,
      correo: this.correo,
    },
    "clave"
  );
};
// Creamos los exports
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario;
module.exports.esquemaUsuario = esquemaUsuario;
