const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  fullname: {type : String, required: [true, "Name is required"]},
  photoUrl: {type : String, required: [true, "Photo is required"]},
  company: {type : String, required: [true, "Company is required"]},
  job: {type : String, required: [true, "Job is required"]},
  type: {type : String, required: [true, "Type is required"]},
  description: {type : String, required: [true, "Description is required"]},
  shortDescription: {type : String, required: [true, "Short description is required"]},
});

module.exports = mongoose.model.Person || mongoose.model("Person", PersonSchema);