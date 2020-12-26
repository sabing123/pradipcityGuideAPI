const mongoose = require ('mongoose');

const famousplaceSchema = new mongoose.Schema({
        name:{type: String,required: true},
        location:{type:String,require:true},
        description:{type:String,require:true},
        image:{type:String,require:true}
    
});

module.exports = mongoose.model('famousplace', famousplaceSchema);