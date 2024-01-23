// authService.js

const jwt = require('jsonwebtoken');

const secretKey = 'tuClaveSecreta'; // Reemplaza con una clave secreta más segura

const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '1h' }); // Token expira en 1 hora
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw new Error('Token inválido');
  }
};

module.exports = { generateToken, verifyToken };
