const {Schema, model, Types} = require ('mongoose');

const schema = new Schema ({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  videos: [{type: Types.ObjectId, ref: 'Video'}],
  isAdmin: {Type: Boolean, default: false},
});

module.exports = model ('User', schema);
