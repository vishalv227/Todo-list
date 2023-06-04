const mongoose = require('mongoose'); //mongoose is the ODM which eases the interaction with the mongodb

mongoose.connect('mongodb://localhost/info_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to the databse'));

db.once('open', ()=>{
    console.log('Succecfully connected to the database');
})