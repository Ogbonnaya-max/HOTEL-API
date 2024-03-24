const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['guest', 'admin'], // Define roles as 'guest' or 'admin'
        default: 'guest' // Default role is 'guest'
    }
});

module.exports = mongoose.model('User', userSchema);