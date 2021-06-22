const mongoose = require('mongoose');

const DocSchema = mongoose.Schema({
    docname:{
        type:String,
        require:true
    },
    docinfo:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('Doc',DocSchema);