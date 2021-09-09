try {

//require("reflect-metadata"); //falta creo---
const cors = require('cors') ;
const helmet = require('helmet');
const routes = require('./routes'); //falta

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

    // Middlewares
    app.use(express.json()); // con esto se añdade el traductor de json en el programa
    app.use(express.urlencoded({extended: false}));
    app.use(cors());
    app.use(helmet());
        
    // //Routes
    // app.use(require('./routes/index'));

    // //routes
    app.use('/',routes);

    // start express server
    
    app.listen(port);
    console.log('Server on port '+port);
}catch (err) {
    console.log("Se ha producido un error en el try del index principal error: "+err)
}






    


    

