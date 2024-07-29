const jwt = require('jsonwebtoken');
const { errorHandler } = require('../error');
const Organiser = require('../models/organiser');

async function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return next(new errorHandler("Unauthorized access - No token provided!", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const organiser = await Organiser.findById(decoded.id);

        if (!organiser) {
            return next(new errorHandler("Unauthorized access - Invalid token!", 401));
        }

        req.organiser = organiser; // Attach organiser to request object
        next();
    } catch (error) {
        return next(new errorHandler("Unauthorized access - Invalid token!", 401));
    }
}

module.exports = { verifyToken };
