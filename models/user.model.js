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
  }
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
});

module.exports = mongoose.model('user', user);
