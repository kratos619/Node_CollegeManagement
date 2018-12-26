const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
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
    departmentId: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    }
});

module.exports = mongoose.model('Teacher', teacherSchema);