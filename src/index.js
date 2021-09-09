const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // con esto se añdade el traductor de json en el programa
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));

app.listen(port);
console.log('Server on port '+port);

