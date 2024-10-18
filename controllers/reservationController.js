const Reservation = require('../models/Reservation');
const Space = require('../models/Space');

const createReservation = async (req, res) => {
    const { spaceId, date } = req.body;
    const userId = req.user.id;

    try {
        // Verifica que el espacio exista
        const space = await Space.findById(spaceId);
        if (!space) {
            return res.status(404).json({ msg: 'Espacio no encontrado' });
        }

        // Verifica si ya hay una reserva en esa fecha para el mismo espacio
        const existingReservation = await Reservation.findOne({
            spaceId,
            date,
        });

        if (existingReservation) {
            return res.status(400).json({ msg: 'El espacio ya está reservado en esta fecha' });
        }

        // Crea la nueva reserva
        const reservation = new Reservation({
            userId,
            spaceId,
            date,
        });

        await reservation.save();

        // Eliminar el envío de correo
        // res.status(201).json(reservation); // Comentar o eliminar la línea del envío de correo

        res.status(201).json(reservation);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

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
