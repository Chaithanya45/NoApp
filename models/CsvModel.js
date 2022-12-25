const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CsvModelSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    phone: {
        type: Number, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    linkedin: {
        type: String, 
        required: true
    },
}, {timestamps: true});
mongoose.models={};
module.exports = mongoose.model("CsvModel", CsvModelSchema);