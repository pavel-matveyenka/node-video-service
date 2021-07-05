const express = require ('express');
const config = require ('config');
const mongoose = require ('mongoose');
const storageConfig = require ('./storageConfig');
const multer = require ('multer');

app = express ();

app.use (multer ({storage: storageConfig}).single ('video'));

app.use ('/api/video', require ('./routes/video.routes'));

app.use (express.json ({extended: true}));

app.use ('/api/auth', require ('./routes/auth.routes'));

app.use ('/api/upload/videos', express.static ('upload/videos'));

const PORT = config.get ('port') || 5000;

async function start () {
  try {
    await mongoose.connect (config.get ('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen (PORT, () =>
      console.log (`App has been started on port ${PORT}`)
    );
  } catch (e) {
    console.log ('Server Error', e.message);
    process.exit (1);
  }
}

start ();
