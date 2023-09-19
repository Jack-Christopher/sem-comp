const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SponsorSchema = new Schema({
  name: { type: String, required: [true, 'Name is required'] },
  websiteUrl: { type: String, required: [true, 'Website URL is required'] },
  photoUrl: { type: String, required: [true, 'Photo URL is required'] },
});

module.exports = mongoose.model.SponsorSchema || mongoose.model('Sponsor', SponsorSchema);