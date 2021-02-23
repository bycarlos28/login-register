const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static("views"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render("index");
});

app.get('/register', (req, res) => {
	res.render("register");
});

app.get('/login', (req, res) => {
	res.render("login");
});

app.post('/register', (req, res) => {
	let nombre = req.body.usuario;
	let contraseña = req.body.contraseña;
});

app.post('/login', (req, res) => {
	let nombre = req.body.usuario;
	let contraseña = req.body.contraseña;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})