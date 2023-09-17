const db = require('../database/db');
const SemComp = require('../models/semcomp');

const setSemCompData = async (req, res) => {
  db.connect();

  const semcomp = new SemComp({
    year: req.body.year,
    editionNumber: req.body.editionNumber,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    numberOfAttendees: req.body.numberOfAttendees,
    numberOfDays: req.body.numberOfDays,
    numberOfPresentations: req.body.numberOfPresentations,
    numberOfSocialActivities: req.body.numberOfSocialActivities,
    CPContestRulesUrl: req.body.CPContestRulesUrl,
  });

  try {
    const savedSemComp = await semcomp.save();
    res.status(200).json(savedSemComp);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

const getSemCompData = async (req, res) => {
  db.connect();

  try {
    const semcomp = await SemComp.findOne({ year: new Date().getFullYear() });
    res.status(200).json(semcomp);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}


module.exports = {
  getSemCompData,
  setSemCompData,
}