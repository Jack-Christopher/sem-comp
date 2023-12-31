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
app.get('/semcomp/get', controllers.semComp.getSemCompData);
app.post('/semcomp/update', controllers.semComp.updateSemCompData);

// person
app.post('/person/add', controllers.person.addPerson);
app.get('/person/get', controllers.person.getPeople);

// schedule
app.post('/schedule/add', controllers.schedule.addSchedule);
app.get('/schedule/get', controllers.schedule.getSchedules);

// quote
app.post('/quote/add', controllers.quote.addQuote);
app.get('/quote/get', controllers.quote.getRandomQuote);

// sponsor
app.post('/sponsor/add', controllers.sponsor.addSponsor);
app.get('/sponsor/get', controllers.sponsor.getSponsors);

module.exports = app;