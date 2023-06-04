const db = require('../config/mongoose');
const Info = require('../models/information');

module.exports.home = (req, res)=>{

    Info.find({}, (err, information)=>{
        if(err){
            console.log('Error in fetching the information');
            return;
        }
        return res.render('home', {
            title: "TODO App",
            data: information
        });
    })
}