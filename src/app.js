var express = require('express');
var path = require('path');
var app = express();

const port = 3030;



// **VIEW ENGINE**
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// **MIDDLEWARE**
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



// **ROUTER**
var indexRouter = require('./routes/index');

app.use('/', indexRouter);



app.listen(port, () => 
    console.log('Servidor online en el puerto localhost:'+port));