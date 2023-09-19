const db = require('../database/db');
const Schedule = require('../models/schedule');

const addSchedule = async (req, res) => {
  db.connect();

  const schedule = new Schedule({
    editionNumber: req.body.editionNumber,
    name: req.body.name,
    events: req.body.events,
  });

  try {
    const savedSchedule = await schedule.save();
    res.status(200).json(savedSchedule);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

const getSchedules = async (req, res) => {
  db.connect();

  try {
    const schedules = await Schedule.find();
    const maxEditionNumber = Math.max(...schedules.map((schedule) => schedule.editionNumber));
    const schedulesWithMaxEditionNumber = schedules.filter((schedule) => schedule.editionNumber === maxEditionNumber);
    res.status(200).json(schedulesWithMaxEditionNumber);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

module.exports = {
  addSchedule,
  getSchedules,
}