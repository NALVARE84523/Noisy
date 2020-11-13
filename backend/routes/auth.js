// Modulos de node
const express = require("express");
const router = express.Router();
// Modulos internos
const { Usuario } = require("../model/usuario");
// Ruta
router.post("/", async (req, res) => {
  // Validamos que exista el nombre de usuario
  const usuario = await Usuario.findOne({
    nombreUsuario: req.body.nombreUsuario,
  });
  // Si no existe el nombre de usuario
  if (!usuario)
    return res
      .status(400)
      .send("Nombre de usuario o contraseña no son validos");
  // Si el password no existe
  if (usuario.password !== req.body.password)
    return res
      .status(400)
      .send("Nombre de usuario o contraseña no son validos");
// Generamos el JWT
  const jwtToken = usuario.generateJWT();
  res.status(200).send({ jwtToken });
});
// Exports 
module.exports = router;