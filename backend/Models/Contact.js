const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateSubmitted: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
