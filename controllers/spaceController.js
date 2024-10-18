const Space = require('../models/Space');

// Agregar un nuevo espacio
const addSpace = async (req, res) => {
    const { name, location, capacity, price, description } = req.body;

    try {
        const space = new Space({
            name,
            location,
            capacity,
            price,
            description, // Asegúrate de tener este campo en tu modelo
        });

        await space.save();
        res.status(201).json(space);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

// Editar un espacio existente
const editSpace = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const space = await Space.findByIdAndUpdate(id, updates, { new: true });
        if (!space) {
            return res.status(404).json({ msg: 'Espacio no encontrado' });
        }
        res.json(space);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error en el servidor');
    }
};

// Eliminar un espacio
const deleteSpace = async (req, res) => {
    const { id } = req.params;

    try {
        const space = await Space.findByIdAndDelete(id);
        if (!space) {
            return res.status(404).json({ msg: 'Espacio no encontrado' });
        }
        res.json({ msg: 'Espacio eliminado' });
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

module.exports = { addSpace, editSpace, deleteSpace, getSpaces };
