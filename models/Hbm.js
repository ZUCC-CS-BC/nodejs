const mongoose = require('mongoose');

const HbmSchema = mongoose.Schema({
    hbmid:{
        type:String,
        require:true
    },
    hbmname:{
        type:String,
        require:true
    },
    hbmkind:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Hbm',HbmSchema);