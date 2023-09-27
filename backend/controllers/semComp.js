const db = require('../database/db');
const SemComp = require('../models/semcomp');

const updateSemCompData = async (req, res) => {
  db.connect();

  const data = {
    year: req.body.year,
    editionNumber: req.body.editionNumber,
    startDate: req.body.startDate + 'T00:00:00.000-05:00',
    endDate: req.body.endDate + 'T00:00:00.000-05:00',
    numberOfAttendees: req.body.numberOfAttendees,
    numberOfDays: req.body.numberOfDays,
    numberOfPresentations: req.body.numberOfPresentations,
    numberOfSocialActivities: req.body.numberOfSocialActivities,
    CPContestRulesUrl: req.body.CPContestRulesUrl,
  };

  const currentYear = new Date().getFullYear();

  SemComp.findOne({ year: currentYear })
    .then((result) => {
      console.log('itemId: ' + result._id);
      return result._id;
    })
    .then((itemId) => {
      if (itemId) {
        SemComp.updateOne({ _id: itemId }, data)
          .then((result) => {
            console.log(result);
            res.status(200).json({ message: "SemComp data updated successfully" });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ message: err });
          });
      } else {
        const newSemComp = new SemComp(data);
        newSemComp.save()
          .then((result) => {
            console.log(result);
            res.status(200).json({ message: "SemComp data updated successfully" });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ message: err });
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
  updateSemCompData,
}