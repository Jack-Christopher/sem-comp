const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const descriptionList = new Schema({
  name: {type: String, required: [true, "Name is required"]},
  author: {type: String, required: [true, "Author is required"]},
});

const event = new Schema({
  startTime: {type: Date, required: [true, "Start time is required"]},
  endTime: {type: Date, required: [true, "End time is required"]},
  title: {type: String, required: [true, "Title is required"]},
  photoUrl: {type: String, required: [true, "Photo URL is required"]},
  descriptionList: {type: [descriptionList], required: [true, "Description list is required"]},
});

const ScheduleSchema = new Schema({
  editionNumber: {type: Number, required: [true, "Edition number is required"]},
  name: {type: String, required: [true, "Name is required"]},
  events:{type: [event], required: [true, "Events are required"]},
});

module.exports = mongoose.model.ScheduleSchema || mongoose.model("Schedule", ScheduleSchema);