
const axios = require('axios');

exports.getJobs = (req, res, next) => {
    const c = new Date()
//To handle the incoming data from the API, I decided to use axios because it is an easy
//and straightforward way to send post requests from node

    const configuration = {
        method: "post",
        url: "https://www.zippia.com/api/jobs/",
        data: {
            companySkills: "true",
            dismissedListingHashes: [],
            fetchJobDesc: true,
            jobTitle: "Business Analyst",
            locations: [],
            numJobs: 10,
            previousListingHashes: []
        }
    };
    
    axios(configuration)
        .then((result) => {
            let jobs = result.data.jobs;

            let jobsArray = jobs.map(job => {
                return {
                    id: job.jobId,
                    jobTitle: job.jobTitle,
                    companyName: job.companyName,
                    jobdesc: job.jobDescription,
                    postingDate: new Date(job.postingDate),
                    hide: (((c - new Date(job.postingDate)) / (1000 * 60 * 60 * 24)) > 7) ? true : false
                }
            })

            //In this part, I recovered the relevant data from the job objects imported from the API and send it as a response to the frontend
            //This is also where the hide property is constructed. It is true if the current day and post date is more than 7.
            //The division made is to convert the result from miliseconds to days
            res.send(jobsArray)
        })
        .catch((error) => {
            error = new Error();
        });


  

};

