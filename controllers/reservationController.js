const Reservation = require('../models/Reservation'); // Necesitamos crear este modelo
const Space = require('../models/Space');

// Crear una nueva reserva
const createReservation = async (req, res) => {
    const { spaceId, date } = req.body;
    const userId = req.user.id; // Obtiene el id del usuario autenticado

    try {
        // Verifica que el espacio exista
        const space = await Space.findById(spaceId);
        if (!space) {
            return res.status(404).json({ msg: 'Espacio no encontrado' });
        }

        // Crea la nueva reserva
        const reservation = new Reservation({
            userId,
            spaceId,
            date,
        });

        await reservation.save();
        res.status(201).json(reservation);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

// Obtener todas las reservas de un usuario
const getReservations = async (req, res) => {
    const userId = req.user.id;

    try {
        const reservations = await Reservation.find({ userId }).populate('spaceId');
        res.json(reservations);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { createReservation, getReservations };
