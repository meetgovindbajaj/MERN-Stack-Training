const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Error = require("./utils/httpError");
const bodyParser = require('body-parser');
const adminRoute = require('./routes/AdminRoutes');
const userRoute = require('./routes/UserRoutes');
const dotenv = require('dotenv');
// const User = require('./models/userModel');
const Hostname = "192.168.43.98";
const port = "2998";
const log = console.log;

dotenv.config({
    path: './config.env'
});
app.use(bodyParser.json());

const DB = process.env.DATABASE;
app.use('/api/v1/user', userRoute);
app.use('/api/v1/admin', adminRoute);
app.use((req, res, next) => {
    const error = new Error('Page Not Found', 404);
    throw error;
})
app.use((error, req, res, next) => {
    res.status(error.code);
    res.json({
        'message': error.message || 'unknown error occured',
        'code': error.code
    });
});

mongoose.connect('mongodb+srv://govindbajaj:kedsx1Ac7dxMXh7s@mernstackcluster.6mqqy.mongodb.net/assignment-7?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    app.listen(port, Hostname, () => {
        log(`SERVER RUNNING - \n\tURL\t: http://${Hostname}:${port}`)
    })
}).catch(err => {
    console.log(err)
})