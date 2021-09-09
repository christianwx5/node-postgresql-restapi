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

//En local 

// const pool = new Pool ({

//     host: 'localhost',
//     user: 'postgres',
//     password: '12345',
//     database: 'firstapi',
//     port: '5432'
// })

const getUserC = async (req,res)=>{
    console.log("mensaje antes del colappso");
    const response = await pool.query('SELECT * FROM alumnos');
    console.log(response.rows);
    res.status(200).json(response.rows);

}

const getUserByIdC = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM alumnos WHERE id = $1', [id]);
    res.json(response.rows)
}

const createUserC = async (req,res)=>{
    const { nombre } = req.body;
    const response = await pool.query('INSERT INTO alumnos (nombre) VALUES ($1)',[nombre]);
    console.log(response);
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {nombre}
        }
    });
}

module.exports = {
    getUserC,
    getUserByIdC,
    createUserC

}



