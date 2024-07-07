'use strict';

const express = require ('express');
const risk_assessment = require("./risk_assessment");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});



app.get('/', async (req, res) => {
    try {
        let engagementScore = req.query.engagement_score;
        let cutOffScore = req.query.cutOff_score;
        let result = risk_assessment.function(cutOffScore, engagementScore);    
        if (result.startsWith("Error")) return res.status(400).json({"result": result});
        res.status(200).json({"result": result});
    } catch (error) {
        res.status(500).json({"error": error});
    }

});


const server = app.listen(process.env.PORT || 4000, () => {
    console.log('Server on port 4000');
});

module.exports = {app, server};
