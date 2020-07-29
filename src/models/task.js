const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Data Schemas

const taskSchema = new Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Tasks', taskSchema)