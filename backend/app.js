const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
      status: true,
      title: "Welcome to the API",
    });
  });


app.post('/register', controllers.register);



module.exports = app;