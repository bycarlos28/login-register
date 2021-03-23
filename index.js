const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))




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
	localStorage.setItem(nombre,contraseña);
	res.render("index");
});

app.post('/login', (req, res) => {
	let nombre = req.body.usuario;
	let contraseña = req.body.contraseña;
	for (let i = 0; i < localStorage.length; i++) {
  		if (nombre == localStorage.key(i)) {
  			if (contraseña == localStorage.getItem(nombre)) {
  				res.render("index");
  		}
  	}
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})