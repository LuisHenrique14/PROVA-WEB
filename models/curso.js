var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    name: {type: String, required: true},
    cargaHoraria: {type: Number, required: true},
    idNumber: {type: Number, reuiqred: true, unique: true},
    instrutor: [{type: Schema.Types.ObjectId}],
    usuario: {type: Schema.Types.ObjectId, ref: Usuario}
});

module.exports = mongoose.model('Curso', schema);