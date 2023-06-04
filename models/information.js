const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required :true
    } 
})


const Info = mongoose.model('Info', informationSchema);

module.exports = Info;