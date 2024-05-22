const express = require('express');
const app = express();
const port = 3002;

// Middleware para manejar los datos del formulario
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  let formularioHtml = `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Bootstrap demo</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
    <div class="col-md-4">
    <form action="/" method="get">
      <div class="">
        <input type="email" class="form-control" name="floatingInput" id="floatingInput" placeholder="name@example.com">
      </div>
      <br>
      <div class="">
        <input type="password" class="form-control" name="floatingPassword" id="floatingPassword" placeholder="Password">
      </div>
      <br>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <input class="btn btn-primary btn-xl" type="submit" value="Submit">
      </div>
    </form>
  `;

  // Verificar si hay datos guardados en la URL
  if (req.query.floatingInput && req.query.floatingPassword) {
    formularioHtml += `
      <div>
        <p>Email: ${req.query.floatingInput}</p>
        <p>Contraseña: ${req.query.floatingPassword}</p>
      </div>
    `;
  }

  formularioHtml += `
    </body>
    </html>
  `;

  res.send(formularioHtml);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log('La aplicación está escuchando en el puerto ${port}');
});