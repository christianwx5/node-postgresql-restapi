const { Pool } = require('pg');

const pool = new Pool ({
    host:'localhost',
    user: 'postgres',
    password: '12345',
    database: 'firstapi',
    port: '5432'

})

const getUser = async (req,res)=>{
    console.log("mensaje antes del colappso");
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.send('users 2');
}

module.exports = {
    getUser
}