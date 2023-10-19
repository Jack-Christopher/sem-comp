const db = require('../database/db');
const Schedule = require('../models/schedule');

const addSchedule = async (req, res) => {
  db.connect();

  const schedule = new Schedule({
    editionNumber: req.body.editionNumber,
    index: req.body.index,
    name: req.body.name,
    events: req.body.events,
  });

  try {
    const savedSchedule = await schedule.save();
    res.status(200).json({ message: "Schedule added successfully" });
  }
  catch (err) {
    res.status(400).json(err);
  }
}

const getSchedules = async (req, res) => {
  db.connect();

  try {
    const schedules = await Schedule.find();
    const maxEditionNumber = Math.max(...schedules.map((schedule) => schedule.editionNumber));
    const schedulesWithMaxEditionNumber = schedules.filter((schedule) => schedule.editionNumber === maxEditionNumber);
    const schedulesWithMaxEditionNumberSorted = schedulesWithMaxEditionNumber.sort((a, b) => a.index - b.index);
    res.status(200).json(schedulesWithMaxEditionNumberSorted);
  }
  catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  addSchedule,
  getSchedules,
}