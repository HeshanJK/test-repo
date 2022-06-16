const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dob: {
    type: Date,
  },
  category: {
    type: String,
  },
  telephoneNumber: {
    type: String,
  },
  role:{
     type: String,
  }
});

module.exports = mongoose.model("Users", UserSchema);
