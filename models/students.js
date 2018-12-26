const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: Text,
        required: true
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
});

module.exports = mongoose.model('Student', studentSchema);