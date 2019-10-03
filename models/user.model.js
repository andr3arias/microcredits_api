let mongoose = require("mongoose")

let Schema = mongoose.Schema

let userSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
    creado: {
        type: Date,
        default: Date.now
    },
    cedula: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('User', userSchema) 