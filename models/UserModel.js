const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: String,
    lastLogin: Date
});

const userModel = new mongoose.model('User', userSchema);

module.exports = userModel;
