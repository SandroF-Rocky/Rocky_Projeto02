const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const Leads = require('./Leads.js');


mongoose.connect('mongodb+srv://root:teste321@cluster0.ko5yu.mongodb.net/dankicode?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("Conectado com sucesso!")
}).catch((err)=>{
    console.log(err.message)
})



app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname,   '/pages'));



app.get('/', (req, res)=>{
    Leads.find({}).sort({'_id': -1}).exec(function(err, lead){
        console.log(lead)
    })
    res.render("home", {});

})

app.post('/form', (req, res)=>{
    
    var lead1 = new Leads({nome: req.body.nome, telefone: req.body.telefone, email: req.body.email, profissao: req.body.profissao})
    
    lead1.save(function (err, lead) {
        if (err) return console.error(err);
        console.log(`Usuário salvo com sucesso! \nNome: ${lead1.nome}\nTelefone: ${lead1.telefone}\nEmail: ${lead1.email}\nProfissão: ${lead1.profissao} `)
    });
    return res.redirect('/')
})


app.listen(5000, ()=>{
    console.log('server rodando')
})