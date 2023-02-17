const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jobsRoutes = require('./routes/jobs');

app.use(bodyParser.json());

//Here we initialize express and bodyParser and import the route that will be used



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/test', jobsRoutes);


app.listen(8080)