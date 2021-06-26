const mongoose = require('mongoose');

const MedSchema = mongoose.Schema({
    medname:{
        type:String,
        require:true
    },
    mednumber:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Med',MedSchema );