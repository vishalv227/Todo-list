const express = require('express');
const router = require('./routes');
const app = express();
const port = 8000;

// const db = require('./config/mongoose');


//Use express router
app.use(express.urlencoded()); //this is the middle ware, which decodes the data the form is sending (Use is used for middleware) also known as parser
app.use('/', require('./routes'));

app.set('view engine', 'ejs'); //setting um embedded js as a view engine
app.set('views', './views');  //connecting current directory path with views
app.use(express.static('assets')); //making assets folder accessible


app.listen(port, (err)=>{ //the app is listening on a given port and there is a call back fucntion which do its work
    if(err) {
        console.log("Error: ", err);
        return;
    }
    console.log("The server is running on port: ", port);
    
})