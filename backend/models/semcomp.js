const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SemCompSchema = new Schema({
  year: {type : Number, required: [true, "Year is required"]},
  editionNumber: {type : Number, required: [true, "Edition is required"]},
  startDate: {type : Date, required: [true, "Start date is required"]},
  endDate: {type : Date, required: [true, "End date is required"]},
  numberOfAttendees: {type : Number, required: [true, "Number of attendees is required"]},
  numberOfPresentations: {type : Number, required: [true, "Number of presentations is required"]},
  numberOfSocialActivities: {type : Number, required: [true, "Number of social activities is required"]},
  CPContestRulesUrl: {type : String, required: [true, "Competitive programming contest rules URL is required"]},
});

module.exports = mongoose.model.SemComps || mongoose.model("SemComps", SemCompSchema);