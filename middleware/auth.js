const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Obtén el token del encabezado de autorización
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ msg: 'No autorizado' });
    }

    try {
        // Verifica el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Agrega el usuario decodificado a la solicitud
        next(); // Continúa con la siguiente función
    } catch (err) {
        return res.status(401).json({ msg: 'Token no válido' });
    }
};

module.exports = authMiddleware;
