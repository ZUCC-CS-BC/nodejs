const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    sendtitle:{
        type:String,
        require:true
    },
    sendcontent:{
        type:String,
        require:true
    },
    sendname:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Send',PostSchema);