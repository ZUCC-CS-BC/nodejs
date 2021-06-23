const mongoose = require('mongoose');

const BackSchema = mongoose.Schema({
    backId:{
        type:String,
        require:true
    },
    backname:{
        type:String,
        require:true
    },
    backcontent:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Back',BackSchema);