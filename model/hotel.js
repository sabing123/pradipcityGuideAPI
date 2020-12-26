const mongoose = require ('mongoose');

const atrributes = {type:String,require:true}

const HotelShema = new mongoose.Schema({
name:{type:String,require:true},
location:{type:String,require:true},
price:{type:String,require:true},
description:{type:String,require:true},
star:{type:String,required:true},
image:{type:String,require:true}
},{timestamps:true});

module.exports = mongoose.model('Hotel', HotelShema);
