const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type : String, required: [true, "Name is required"]},
  lastname: {type : String, required: [true, "Lastname is required"]},
  phone: {type : String },
  email: {type : String, required: [true, "Email is required"], unique: true},
  // gender: {type : String },
  password: {type : String, required: [true, "Password is required"]},
  userType: {type : String, required: true},
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);