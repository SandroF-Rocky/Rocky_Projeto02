var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadSchema = new Schema({
    nome: String,
    telefone: String,
    email: String,
    profissao: String
},{collection:'leads'})

var Leads = mongoose.model("Leads", leadSchema)

module.exports = Leads; 