const mongoose = require('mongoose');

const hisbookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1000,
    trim: true
  },
  author: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: value => /^https?:\/\/\S+$/i.test(value),
      message: 'Invalid URL format'
    }
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true,
    enum: ['History']
  }
},{Timestamp:true});

module.exports = mongoose.model('HistoryBook', hisbookSchema);

