var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var path = require('path');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + "/front"));
  
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/front/index.html'));
}).get('/population', function (req, res) {
	res.sendFile(path.join(__dirname + '/front/pages/population.html'));
}).get('/weather', function (req, res) {
	res.sendFile(path.join(__dirname + '/front/pages/weather.html'));
});
var dbConn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'dashboard_test'
});
 
dbConn.connect(); 

const gets = {
	cases: 'SELECT * FROM covid19_cases',
	evol: 'SELECT * FROM covid19_evolution',
	dist: 'SELECT * FROM pop_dist',
	genero: `SELECT "Homem" genero, -1*SUM(homem) "%" FROM pop_dist
			UNION SELECT "Mulher" genero, SUM(mulher) "%" FROM pop_dist`,
	religiao: 'SELECT * FROM pop_relig ORDER BY value asc'
}

app.get( '/corona/cases' , function (req, res) {
	dbConn.query(gets.cases, function (error, results, fields) {
		if (error) throw error;
		return res.send({ data: results });
	});
}).get( '/corona/evol' , function (req, res) {
	dbConn.query(gets.evol, function (error, results, fields) {
		if (error) throw error;
		return res.send({ data: results });
	});
}).get( '/pop/dist' , function (req, res) {
	dbConn.query(gets.dist, function (error, results, fields) {
		if (error) throw error;
		return res.send({ data: results });
	});
}).get( '/pop/genero' , function (req, res) {
	dbConn.query(gets.genero, function (error, results, fields) {
		if (error) throw error;
		return res.send({ data: results });
	});
}).get( '/pop/religiao' , function (req, res) {
	dbConn.query(gets.religiao, function (error, results, fields) {
		if (error) throw error;
		return res.send({ data: results });
	});
});

app.post('/clima', function (req, res) {
	let data_i = req.body.data_i;
	let data_f = req.body.data_f;

	if (!data_i || !data_f ) {
		return res.status(400).send({ error:true, message: 'Por favor, inserir datas.' });
	}else if( isNaN(Date.parse(data_i)) || isNaN(Date.parse(data_i)) ){
		return res.status(400).send({ error:true, message: 'Corrija as datas, estão inseridas incorretamente.' });
	}else{
		dbConn.query("SELECT * FROM weather WHERE date BETWEEN ? AND ? ORDER BY date", [data_i, data_f] , function (error, results, fields) {
			if (error) throw error;
			return res.send({ count: results.length, data: results });
		});
	}
});

app.listen(3000, function () {
	console.log('Node app is running on port 3000');
});

module.exports = app;