var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema ({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
        required: true
    },
    data_nascimento: {
        type: Date, 
        required: true
    },
    telefone: {
        type: Number, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    idNumber: {
        type: Number, 
        required: true
    },
    cursos: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Curso'
        }
    ],
    instrutor: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Instrutor'
        }
    ]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Usuario', schema);