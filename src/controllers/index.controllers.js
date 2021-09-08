const { Pool } = require('pg');

const pool = new Pool ({
    host:'ec2-3-230-61-252.compute-1.amazonaws.com',
    user: 'ncngrlakkkqqdc',
    password: 'c841fdf8d2cf596acd155604b38e381dbe5f9b24db623b4567e9b335d7cc76d6',
    database: 'd1mfa9vvp520pf',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }

})

const getUser = async (req,res)=>{
    console.log("mensaje antes del colappso");
    const response = await pool.query('SELECT * FROM alumnos');
    console.log(response.rows);
    res.send('users 2 hola');
}

module.exports = {
    getUser
}
