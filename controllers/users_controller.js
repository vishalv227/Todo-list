// const db = require('../config/mongoose');
const Info = require('../models/information');

//for task creation in database
module.exports.task = (req, res) => {
    console.log(req.body);

    Info.create(req.body, (err, newInfo) => {
        if(err){
            console.log('Error in creating a New information');
            return;
        }
        console.log("The new info is", newInfo);
        return res.redirect('back');
    })
}

//for task deletion in database
module.exports.delete = (req, res)=>{  
    var removeList = req.body.check;
    
    if(typeof removeList === "string"){
        Info.findByIdAndDelete(removeList, function(err){
            if(err){
                console.log('error');
                return;
            }
        });
    }
    else if(typeof removeList === "object"){
        for(let i = 0 ; i < removeList.length ; i++){
            Info.findByIdAndDelete(removeList[i], function(err){
                if(err){
                    console.log('error');
                    return;
                }
            });
        }
    }
    return res.redirect('back');
}