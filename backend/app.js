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

// common
app.post('/register', controllers.register);
app.post('/login', controllers.login);

// semComp
app.get('/semcomp/getdata', controllers.semComp.getSemCompData);
app.post('/semcomp/setdata', controllers.semComp.setSemCompData);

module.exports = app;