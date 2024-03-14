//const { request } = require('express');
const Libros = require('../models/Libros');
const usersControllers = require('./UsersControllers');

//CRUD DE OPERACIONES

//CREATE A BOOK
exports.create = async function (req, resp) {
  if (Object.keys(req.query).length > 0) {
    var request = req.query;
  } else if (Object.keys(req.body).length > 0) {
    var request = req.body;
  }
  console.log(request);

  try {
    //var libro = new Libros(req.query);
    const saldo = await usersControllers.validaSaldousuario(request);
    if (!saldo) {
      return resp.status(403).json({
        menssage:
          'Usuario sin saldo suficiente para poder procesar la peticion',
      });
    }

    var libro = new Libros(request);
    await libro.save();
    await usersControllers.actualizarSaldoUsuario(req);
    return resp.json({ libro, mensaje: 'Libro guardado correctamente' });
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al guardar libro',
      error: error,
    });
  }
};

//GET ALL THE BOOKS
exports.list = async function (req, resp) {
  try {
    const saldo = await usersControllers.validaSaldousuario(req);
    if (!saldo) {
      return resp.status(403).json({
        menssage:
          'Usuario sin saldo suficiente para poder procesar la peticion',
      });
    }
    const libros = await Libros.find();
    await usersControllers.actualizarSaldoUsuario(req);
    return resp.json(libros);
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al obtener todos los libros',
      error: error,
    });
  }
};

//FUNCTION TO UPDATE THE BOOKS
exports.update = async function (req, resp) {
  if (Object.keys(req.query).length > 0) {
    var request = req.query;
  } else if (Object.keys(req.body).length > 0) {
    var request = req.body;
  }
  console.log(request);

  try {
    const saldo = await usersControllers.validaSaldousuario(request);
    if (!saldo) {
      return resp.status(403).json({
        menssage:
          'Usuario sin saldo suficiente para poder procesar la peticion',
      });
    }

    const libroAct = await Libros.findByIdAndUpdate(req.params.id, request, {
      //const libroAct = await Libros.findByIdAndUpdate(req.params.id, req.query, {
      new: true,
    });

    if (!libroAct) {
      return resp.status(404).json({ error: 'Libro no encontrado' });
    } else {
      await usersControllers.actualizarSaldoUsuario(req);
      resp
        .status(200)
        .json({ libroAct, msj: 'Libro actualizado correctamente' });
    }
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al actualizar el libros',
      error: error,
    });
  }
};

//DELETE BOOK
exports.delete = async function (req, resp) {
  try {
    if (Object.keys(req.query).length > 0) {
      var request = req.query;
    } else if (Object.keys(req.body).length > 0) {
      var request = req.body;
    }
    console.log(request);

    const saldo = await usersControllers.validaSaldousuario(req);
    if (!saldo) {
      return resp.status(403).json({
        menssage:
          'Usuario sin saldo suficiente para poder procesar la peticion',
      });
    }

    const eliminarLibro = await Libros.findByIdAndDelete(req.params.id);
    if (!eliminarLibro) {
      return resp.status(404).json({ error: 'Libro no encontrado' });
    } else {
      await usersControllers.actualizarSaldoUsuario(req);
      resp.status(202).json({ msj: 'Libro eliminado' });
    }
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al eliminar el libro',
      error: error,
    });
  }
};

//Function to find a book for id
exports.show = async function (req, resp) {
  try {
    const saldo = await usersControllers.validaSaldousuario(req);
    if (!saldo) {
      return resp.status(403).json({
        menssage:
          'Usuario sin saldo suficiente para poder procesar la peticion',
      });
    }

    const libro = await Libros.findById(req.params.id);
    if (!libro) {
      return resp.status(404).json({ error: 'Libro no encontrado' });
    } else {
      await usersControllers.actualizarSaldoUsuario(req);
      return resp.status(202).json(libro);
    }
  } catch (error) {
    return resp.status(500).json({
      message: 'Error al mostrar el libro',
      error: error,
    });
  }
};
