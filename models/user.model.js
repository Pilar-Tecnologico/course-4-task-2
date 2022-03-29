const mongoose = require ('mongoose');
//const Schema = mongoose.schema;


const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true
    }
});

const User = mongoose.model("User",userSchema); 

module.exports = User;