const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "user"
  },
  s: {
    type:String,
    default:'A'
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  ModifiedAt: {
    type: Date,
    default: Date.now
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('user', user);
