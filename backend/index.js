// Modulos internos
const express = require("express");
const mongoose = require("mongoose");
const corss = require("cors");
// Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
// App
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/usuario", usuario);
app.use("/api/auth", auth);

// Puerto de ejecucion
const port = process.env.PORT || 3010;
app.listen(port, () => console.log("Ejecutando en puerto: " + port));
// Registro en Mongo
mongoose
  .connect("mongodb://localhost/noisydb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conexion con mongo: OK"))
  .catch((error) => console.log("Conexion con mongo: OFF"));
