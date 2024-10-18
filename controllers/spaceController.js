const Space = require('../models/Space');

// Agregar un nuevo espacio
const addSpace = async (req, res) => {
    const { name, location, capacity, price } = req.body;

    try {
        const space = new Space({
            name,
            location,
            capacity,
            price,
        });

        await space.save();
        res.status(201).json(space);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

// Obtener todos los espacios
const getSpaces = async (req, res) => {
    try {
        const spaces = await Space.find();
        res.json(spaces);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

module.exports = { addSpace, getSpaces };
