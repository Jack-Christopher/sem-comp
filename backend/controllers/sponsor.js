const db = require('../database/db');
const Sponsor = require('../models/sponsor');

const addSponsor = async (req, res) => {
  db.connect();

  const { name, websiteUrl, photoUrl } = req.body;

  const sponsor = new Sponsor({
    name,
    websiteUrl,
    photoUrl,
  });

  try {
    const newSponsor = await sponsor.save();
    res.status(200).json(newSponsor);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

const getSponsors = async (req, res) => {
  db.connect();

  try {
    const sponsors = await Sponsor.find();
    res.status(200).json(sponsors);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

module.exports = {
  addSponsor,
  getSponsors,
}