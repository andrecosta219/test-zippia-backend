const express = require('express');

const jobsController = require('../controller/jobs');

const router = express.Router();

router.get('/jobs',jobsController.getJobs);

//This is where we create the only route (a GET route) and import the controller that will handle most
//of the logic

module.exports = router;