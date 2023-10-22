const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const contactSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    type: addressSchema,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
