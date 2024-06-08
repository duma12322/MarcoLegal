const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "../public")));

// Rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/inicio.html"));
});

app.get("/programacion", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/programacion.html"));
});

app.get("/quienes-somos", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/quienes-somos.html"));
});

app.get("/galeria", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/galeria.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contacto.html"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
