const express = require('express');
const authMiddleware = require('../middleware/auth');
const { createReservation, getReservations } = require('../controllers/reservationController');

const router = express.Router();

// Ruta para crear una nueva reserva
router.post('/', authMiddleware, createReservation);

// Ruta para obtener todas las reservas de un usuario
router.get('/', authMiddleware, getReservations);

module.exports = router;
