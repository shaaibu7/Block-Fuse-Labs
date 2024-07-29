const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstname: { type: String, unique: true, required: true },
    password: { type: String, required: true },
});

module.exports = {
    User
}