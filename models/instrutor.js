var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    data_nascimento: {type: Date, required: true},
    telefone: {type: Number, required: true},
    email: {type: String, required: true},
    idNumber: {type: Number, reuiqred: true, unique: true},
    disciplina: {type: String, required: true},
    usuario: {type: Schema.Types.ObjectId, ref: 'Usuario'}
});

module.exports = mongoose.model('Instrutor', schema);