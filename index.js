const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = "8080";
const path = require('path');

const config = require('./config/connection');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
	if(err)
		console.log('Could not connect to database' + err);
	else
		console.log(config.db + ' Database connected Successfully');
});

app.use(express.static(__dirname + '/client/dist/'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port,() => {
	console.log("Server Started Listening Port as " + port);
});