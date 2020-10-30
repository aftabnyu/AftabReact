const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer= require("nodemailer");
require("dotenv").config();
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const messages = [];

app.get('/api/messages', (req, res) => {
    res.json(messages);
});
app.post('/api/messages', (req, res) => {
    const message = req.body;
    messages.push(message);
    let transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.S_USER,
            pass: process.env.S_PASS
        },
        debug: false,
        logger: true
    });
    let mailOptions = {
        from: 'nm12292000@gmail.com',
        to: 'faisalk.karim3@gmail.com',
        subject: "Message from Aftab Viewer",
        text: message.name + ": " + message.email + "\n\n" + message.message
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else{
            console.log("Message sent")
        }
    })
    console.log(req.body);
});

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

app.listen(port, () => console.log(`Listening on port ${port}`));
