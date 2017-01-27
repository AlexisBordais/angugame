let http = require('http')
let express = require('express')
let bodyParser = require('body-parser')
let methodOverride = require('method-override') // Pour les methodes put et delete
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let app = express()
let port = process.env.PORT || 9070

let server = http.Server(app)

app.use(methodOverride('X-HTTP-Method-Override'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
//pour creer server je copie gnrlt tout ce qui est au dessus

app.use(express.static(__dirname + '/public'))
mongoose.connect('mongodb://Nunurs:Angugame1844@ds145848.mlab.com:45848/angugame');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

let AngugameSchema = new Schema({
    question: {
        type: String,
        index: true
    },
    responses:[{
      type : mongoose.Schema.Types.Mixed
    }]
    },{
      timestamps: true
}
)

var Angugame = mongoose.model('Angugame', AngugameSchema) // Model qui va utiliser le Schema


// app.post('/search', (req, res) => {
//     let query = {}
//     query.nom = new RegExp(req.body.nom, 'i')
//     console.log(query.nom)
//     Etudiant.find(query, (err, items) => {
//         if (!err)
//             res.json(items)
//         else throw err
//     })
// })

// app.post('/add', (req, res, next) => {
//     Angugame.create(req.body, (err, result) => {
//         if (err) next(err)
//         res.json(result)
//     })
// })

app.post('/angugame', (req, res, next) => {
    Angugame.create(req.body, (err, result) => {
        if (err) next(err)
                    res.json(result)

    })
})

// app.get('/angugame', (req, res) => {
//     Angugame.find((err, result) => {
//         if (err) throw err
//         else
//             res.json(result)
//     })
// })

app.get('/angugame', (req, res) => {
    Angugame.find((err, results) => {
        if (err) throw err
        else
            res.json(results)
    })
})

// app.put('/add/:id', (req, res, next) => {
//     Etudiant.update({
//         _id: req.params.id
//     }, req.body, (err, result) => {
//         if (err) next(err)
//         else res.sendStatus(200)
//     })
// })

app.delete('/angugame/:id', (req, res, nex) => {
    Angugame.findByIdAndRemove(req.params.id, (err) => {
        res.sendStatus(200)
    })
})

app.get('/hello', (req, res) => {
    res.json({
        message: 'hello'
    })
})

//responses schema

// let ResponsesSchema = new Schema({
//     title: String,
//     correct: Boolean
// },{
//   timestamps: true
// })
// la description des donnees en bases
// var Responses = mongoose.model('Response', ResponsesSchema)
//je declare ma var promotion

// app.get('/responses', (req, res) => {
//     Responses.find((err, result) => {
//         if (err) throw err
//         else
//             res.json(result)
//     })
// })
//Requete pour retrouver tous mes promotions

// app.post('/responses', (req, res, next) => {
//     Responses.create(req.body, (err, result) => {
//         if (err) next(err)
//         res.json(result)
//     })
// })
// je declare ma requette post/add. Si je veux ajouter une promotion je vais sur postman URL/promotion


server.listen(port)
console.log('listening on ' + port)

});
