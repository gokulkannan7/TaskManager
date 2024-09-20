const express = require('express');
const app = express();

app.use(express.json());

// title,desc
app.post('/todo', function (req, res) {});

app.get('/todo', function (req, res) {});

app.put('/completed', function (req, res) {});
