const express = require("express");
const path = require('path');
const sendGridMail = require('@sendgrid/mail');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
require('dotenv').config()
let mongoose = require('mongoose');
let bodyParser = require('body-parser');


const blogRoute = require('./mongoroutes/record.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/blogpost', blogRoute)


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }

  next(); // call next middlewer in line
});


mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })




const PORT = process.env.PORT || 3001;
app.set("port", PORT)


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle /api requests to /api route
app.get("/api", (req, res) => { 
  res.json({ message: "Hello from server!" });
});

// All other requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



//nodemailer with sendgrid

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)
   
   app.post("/send", function (req, res) {
    let mailOptions = {
      from: `admin@starryfields.com`,
      to: 'daeheeCodes@gmail.com',
      subject: `Message from: ${req.body.mailState.email}`,
      text: `${req.body.mailState.message}`,
      html: `${req.body.mailState.message}`,
    }
    sgMail.send(mailOptions)
      .then(() => {
          console.log("Message Sent");
          res.json({
            status: "success",
          })})
      .catch ((error) => {
        console.error(error)
        res.json({
          status: "fail",
        })
      })
    })



app.listen(process.env.PORT || 3001, () => {
        console.log('Connected to ports' + PORT)
    })
    
    // Error Handling
    app.use((req, res, next) => {
        next(createError(404));
    });
    
    app.use(function (err, req, res, next) {
        console.error(err.message);
        if (!err.statusCode) err.statusCode = 500;
        res.status(err.statusCode).send(err.message);
    });

  //mongodb connection support

/*
  var corsOptions = {
    origin: "http://localhost:3001",
    origin: "http://localhost:3000",
    origin: "http://localhost:3001/*",
    origin: "http://localhost:3000/*",
    origin: "*",
    origin: "https://starryfields.com/",
  };
  */