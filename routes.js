const express = require('express');
const librosController = require('./controllers/LibrosControllers');
const autenticateJWT = require('./authMiddleware');
const usersControllers = require('./controllers/UsersControllers');

const router = express.Router();

//
router.post('/users', async (req, resp) => {
  usersControllers.create(req, resp);
});

//Rute to solicited token of autentication
//127.0.0.1:3000/get-token?email=bere@gmail.com&api_key=kE6GQñ6LÑi0yJñJ
router.post('/get-token', async (req, res) => {
  if (Object.keys(req.query).length > 0) {
    var request = req.query;
  } else if (Object.keys(req.body).length > 0) {
    var request = req.body;
  }

  const { email, api_key } = request;
  try {
    const result = await usersControllers.authenticate(email, api_key);
    res.json(result);
    console.log(result);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
});

//GET Todos los libros
//127.0.0.1:3000/libros  IMPORT ADD EN HEADERS THE TOKEN
router.get('/libros', autenticateJWT, async (req, resp) => {
  librosController.list(req, resp);
});

//Obtenet un libro por id
//http://localhost:3000/libros/65d553a6b0ccea28cca299e7
//http://localhost:3000/libros?titulo=El cazador
router.get('/libros/:id', autenticateJWT, async (req, resp) => {
  librosController.show(req, resp);
});

//rutas
//http://localhost:3000/libros?titulo=The Rock &autor=Sonnyc Trinity &año=2024
router.post('/libros', autenticateJWT, async (req, resp) => {
  librosController.create(req, resp);
});

//UPDATE
//http://localhost:3000/libros/65d553a6b0ccea28cca299e7?titulo=El cazador de blanca nieves
router.put('/libros/:id', autenticateJWT, async (req, resp) => {
  librosController.update(req, resp);
});

//DELETE
//http://localhost:3000/libros/65d553a6b0ccea28cca299e7
router.delete('/libros/:id', autenticateJWT, async (req, resp) => {
  librosController.delete(req, resp);
});

//Rutes to the manage of seccion
router.get('/login', async (req, resp) => {
  usersControllers.token_login(req, resp);
});

router.post('/login', async (req, resp) => {
  usersControllers.login(req, resp);
});

router.post('/agregarSaldo', async (req, resp) => {
  usersControllers.actualizarSaldoUsuario(req, resp);
});

router.post('/logout', async (req, resp) => {
  usersControllers.logout(req, resp);
});

module.exports = router;
