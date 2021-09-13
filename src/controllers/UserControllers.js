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


// const legueado = async (req, res) => {
//     const {userId} = res.locals.jwtPayload;

//     res.json ({message: 'Password change!'});
// }; 


const getUsersC = async (req,res)=>{
    console.log("mensaje antes del colappso");
    const response = await pool.query('SELECT * FROM alumnos');
    console.log(response.rows);
    res.status(200).json(response.rows);

}

const getUserByIdC = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM alumnos WHERE id = $1', [id]);
    res.status(200).json(response.rows);
}

const createUserC = async (req,res)=>{
    const { username, email, password, full_name, company, cif, siret, zip_code, country, city, phone_1, phone_2, email_paypal } = req.body;
    //const id2 = 19;

    const fields = "username, email, password, full_name, company, zip_code, country, city, phone_1, role, wallet_balance, status";
    
     

    const role = "client";
    const wallet_balance = 0;
    const status = true;

    const values = [
        username, 
        email, 
        password, 
        full_name, 
        company, 
        zip_code, 
        country, 
        city, 
        phone_1, 
        role,
        wallet_balance,
        status
    ];

    const num_fields = values.length;
    try {
        //Cuenta el numero de campos que deben ser registrados
        var NumValues = ConterField(num_fields);
    
        const response = await pool.query('INSERT INTO users ('+fields+') VALUES ('+NumValues+')',values);
        console.log(response);
        res.status(200).json({
            message: 'User Added Succesfully',
            body: {
                user: {username},
                email: {email}
            }
        });
    } catch (error) {
        res.status(400).json({
            message: 'Ocurrio un error motivo: '+error
        });
    }
    
}

const updateUserC = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;

    const response = await pool.query('UPDATE alumnos SET nombre = $1 WHERE id = $2', [
        
        nombre,
        id
    ]);
    res.json('User Updated Successfully');
};

const deleteUserC = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM alumnos where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

function ConterField (num_fields) {
    var NumValues = "";
    for (var i = 1; i <num_fields;i++) {
        NumValues += "$"+i+",";
    }
    NumValues += "$"+num_fields;
    return NumValues;
}

module.exports = {
    getUsersC,
    getUserByIdC,
    createUserC, 
    updateUserC, 
    deleteUserC,
    //legueado

}



