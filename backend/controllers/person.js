const db = require('../database/db');
const Person = require('../models/person');

const addPerson = async (req, res) => {
  db.connect();

  const person = new Person({
    fullname: req.body.fullname,
    photoUrl: req.body.photoUrl,
    company: req.body.company,
    job: req.body.job,
    type: req.body.type,
    description: req.body.description,
    shortDescription: req.body.shortDescription,
  });

  try {
    const savedPerson = await person.save();
    res.status(200).json({ message: "Person added successfully" });

  }
  catch (err) {
    res.status(400).json(err);
  }
}

const getPeople = async (req, res) => {
  db.connect();

  try {
    const people = await Person.find();
    res.status(200).json(people);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addPerson,
  getPeople,
}