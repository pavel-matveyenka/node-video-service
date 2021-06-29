const {Schema, model, Types} = require ('mongoose');

const schema = new Schema ({
  name: {type: String, required: true, unique: true},
  file: {type: String, required: true},
  thumbnail: {type: String},
  date: {type: Date, required: true},
  views: {type: Number, default: 0},
  likes: {type: Number, default: 0},
});

module.exports = model ('Video', schema);
