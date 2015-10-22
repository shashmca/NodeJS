var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json())

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shash'
});

connection.connect();

app.get('/contactlist', function(req, res) {
    connection.query('SELECT * from users', function(err, rows, fields) {
        if (!err) {
            console.log('The solution is: ', rows);
            var contactlist = rows;
            res.json(contactlist);
        } else {
            console.log('Error while performing Query. ', err);
        }
    });    
})

app.post('/contactlist', function(req, res) {
	//console.log('Insert INTO `users` SET ',req.body );
    connection.query('Insert INTO `users` SET uName="'+req.body.uName+'", uPass="'+req.body.uPass+'", uEmail="'+req.body.uEmail+'", isActive="1", isAdmin="0"', function(err, result) {
        if (!err) {
            console.log(result.insertId, "   ", 'Insert success');
            res.json(req.body);
        } else {
            console.log('Error in inserting data');
        }
    });    
})

app.use(express.static(__dirname + "/public"));
//connection.end();
app.listen('9000');
console.log("server is running on 127.0.0.1:9000");
