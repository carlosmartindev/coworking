const express = require('express');
const authMiddleware = require('../middleware/auth');
const { addSpace, getSpaces } = require('../controllers/spaceController');

const router = express.Router();

// Ruta protegida para agregar un espacio
router.post('/', authMiddleware, addSpace);

// Ruta para obtener todos los espacios (puedes decidir si quieres proteger esto o no)
router.get('/', getSpaces);

module.exports = router;
