// Modulos de node
const jwt = require("jsonwebtoken");
// Funcion middleware
function auth(req, res, next) {
  let jetToken = req.header("Authorization");
  // Separamos el bearer del token
  jwtToken = jwtToken.split(" ")[1];
  // Si no existe el token
  if (!jwtToken) return res.status(400).send("No hay token para validar");
  //SI existe el JWT
  try {
    const payload = jwt.verify(jwtToken, "clave");
    req.usuario = payload;
    next();
  } catch (error) {
    res.status(400).send("Token no valido, sin autorizacion a procesos");
  }
}
// Exports
module.exports = auth;