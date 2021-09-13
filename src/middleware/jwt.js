const { Request, Response, NextFunction } = require('express');
const jwt = require('jsonwebtoken');
const config  = require('../config/config');
const moment = require('moment'); // manupulacion de fechas

function checkJwt  (req, res, next) {

    const token = req.headers['auth'];
    console.log(req.headers); //Con esto puedes ver todo lo que recibes del encabezado
    let jwtPayload;

    try {
        jwtPayload = jwt.verify(token, config.jwtSecret);
        res.locals.jwtPayload = jwtPayload;
    }
    catch (e){
        return res.status(401).json({ message: 'Not Authorized, you must log in' });
    }

    const {userId, username} = jwtPayload;

    const newToken = jwt.sign( {userId,username} , config.jwtSecret, {expiresIn:'1h'});
    res.setHeader('token', newToken);

    // Call next

    next();
}

module.exports = checkJwt;