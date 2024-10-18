const express = require('express');
const { addSpace, editSpace, deleteSpace, getSpaces } = require('../controllers/spaceController');
const auth = require('../middleware/auth');
const router = express.Router();

// Rutas de gestión de espacios
router.post('/', auth, addSpace); // Agregar espacio
router.put('/:id', auth, editSpace); // Editar espacio
router.delete('/:id', auth, deleteSpace); // Eliminar espacio
router.get('/', auth, getSpaces); // Listar espacios

module.exports = router;
