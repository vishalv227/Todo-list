const express = require('express');
const router = require('./routes');
const app = express();
const port = 8000;

const db = require('./config/mongoose');


//Use express router
app.use(express.urlencoded()); //this is the middle ware, which decodes the data the form is sending 
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static('assets'));


app.listen(port, (err)=>{
    if(err) {
        console.log("Error: ", err);
        return;
    }
    console.log("The server is running on port: ", port);
    
})