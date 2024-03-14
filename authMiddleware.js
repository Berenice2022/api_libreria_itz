const jwt = require('jsonwebtoken');

//Middelware de autentitacion utilizando JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Acceso no autorizado' });
  jwt.verify(token, 'Your-word-secret', (err, user) => {
    if (err) return res.status(403).json({ error: 'Token invalido' });
    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
