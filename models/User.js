const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true, 
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    token: {
        type: String
    }
}, {timestamps: true});
mongoose.models={};
module.exports = mongoose.model("User", UserSchema);