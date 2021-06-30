const multer = require ('multer');

module.exports = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, 'upload/videos');
  },
  filename: (req, file, cb) => {
    cb (null, file.originalname);
  },
});
