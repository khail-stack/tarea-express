var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res) {
    res.send('<ul>Hola Khail Mogollon</h1>')
}

function c_clientes(req, res) {
    res.send('<ul><li>Adhair Mogollon</li><li>Luis Nieves</li><li>GeanCarlo Aira</li></ul>')
}

function c_productos(req, res) {
    res.send('<ul><li>Play Station 4</li><li>Xbox One</li><li>Asus RogStrix 700 Fusion</li></ul>')
}

function c_server(req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : ' + port);
}

var server = app.listen(5000, c_server);