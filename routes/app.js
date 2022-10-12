var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {message: 'Fluminense Football Club'});
});

var Usuario = require('../models/usuario');

router.get('/home-mongodb-mongoose-usuario', function(req, res, next){
    res.render('home');
});

router.post('/home-mongodb-mongoose-usuario', function(req, res, next){
    var emailVar = req.body.emailBody;
    var firstNameVar = req.body.firstNameBody;
    var lastNameVar = req.body.lastNameBody;
    var dataNascimentoVar = req.body.dataNascimentoBody;
    var telefoneVar = req.body.telefoneBody;
    var passwordVar = req.body.passwordBody;
    var idNumberVar = req.body.idNumberBody;
    var usuarioObject = new Usuario({
        firstName: firstNameVar,
        lastName: lastNameVar,
        data_nascimento: dataNascimentoVar,
        telefone: telefoneVar,
        email: emailVar,
        password: passwordVar,
        idNumber: idNumberVar
    });
    usuarioObject.save();


    res.redirect('/home-mongodb-mongoose-usuario');
});

module.exports = router;
