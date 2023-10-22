const mongoose = require('mongoose');

// URL de conexión a MongoDB
const mongoDBUrl = 'mongodb://127.0.0.1:27017/contacts';

// Conexión a MongoDB
mongoose
  .connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });
