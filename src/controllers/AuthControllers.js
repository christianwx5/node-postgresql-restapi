const { json, Request, Response  } = require('express');
const { request } = require('http');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
//const { validate } = require('class-validator');

const { Pool } = require('pg');

//En linea con heroku

const pool = new Pool ({
    host: 'ec2-3-230-61-252.compute-1.amazonaws.com',
    user: 'ncngrlakkkqqdc',
    password: 'c841fdf8d2cf596acd155604b38e381dbe5f9b24db623b4567e9b335d7cc76d6',
    database: 'd1mfa9vvp520pf',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }
})


const login = async (req,res) => {
    const {username, password} = req.body;
    if ( !(username && password)) {
        return res.status(400).json ({message: ' Username & Password are required!'});   
    }

    var resrult = {};
    var userFinded = false;
    try {
        const response = await pool.query('SELECT id,username,email,password,role FROM users WHERE username = $1', [username]);
        
        resrult = response.rows;
        
        console.log("pass: "+resrult[0].password);
        console.log("pass2: "+password);
        //sin token
        console.log("val "+(password == ""+resrult[0].password));

        if (!(password == resrult[0].password) || !(username == resrult[0].username)){
            return res.status(400).json({menssage: "the username or password is incorrect"});
        }
        
        //res.status(200).json(response.rows);

        //con encriptacion
        // if (!user.checkPassword(password)){
        //     user = await userRepository.findOneOrFail ({ where: {password}});
        // }
    // El primer parametro que recibe es el objeto del usuario, eel segundo es la contraseña secreta y el tercero es el tiempo de duracion
    const token = jwt.sign({userId: resrult[0].id, username: resrult[0].email}, config.jwtSecret, {expiresIn: '1h'});

    res.status(200).json({message: 'You have successfully logged in', token: token});
    //res.send("Ha iniciado Sesion correctamente");

    }catch (error) {
        var mens = (userFinded==false)? "Username":"Password";
        return res.status(400).json({message: ' ha ocurrido un error! :'+error});
    }

    

};

const changePassword = async (req, res) => {
    const {userId} = res.locals.jwtPayload;
    const {oldPassword, newPassword} = req.body;

    if (!(oldPassword && newPassword))
    {
        res.status(400).json({message: 'Old password & new password are requierd'});
    }


    try {
        user = await userRespository.findOneOrFail(userId);
    }catch (e) {
        res.status(400).json({message: 'Something goes wrong'});
    }

    //return res.status(401).json({message: user.checkPassword2(oldPassword)});

    if (!user.checkPassword(oldPassword)) {
        return res.status(401).json({message: 'Check your old Password '+oldPassword});
    }

    user.password = newPassword;
    const validationOps = {validationError:{target:false, value: false}};
    const errors = await validate (user, validationOps);

    if (errors.length > 0){
        return res.status(400).json(errors);
    };

    // Hash Password
    user.hashPassword();
    userRespository.save(user);

    res.json ({message: 'Password change!'});
}; 

module.exports = {
    login,
    changePassword
}
