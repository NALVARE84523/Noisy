// Modulos internos
const express = require("express");
const router = express.Router();
// Modulos creados
const { Usuario } = require("../model/usuario");
// Ruta
router.post("/", async (req, res) =>{
    // Revisamos si existe el mismo usaurio en BD
    let usuario = await Usuario.findOne({ nombreUsuario: req.body.nombreUsuario });
    // Si el usuario existe en BD
    if(usuario) return res.status(400).send("El usuario ya esta registrado");
    // Si el usuario no existe en BD
    usuario = new Usuario({
        nombre: req.body.nombre,
        nombreUsuario: req.body.nombreUsuario,
        correo: req.body.correo,
        password: req.body.password,
    })

// Guardamos el usuario en BD y se genera el JWT
    const result = await usuario.save();
    const jwtToken = usuario.generateJWT();
    res.status(200).send({jwtToken});

})
// Exports
module.exports = router;