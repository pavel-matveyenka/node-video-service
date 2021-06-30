const {Router} = require ('express');
const config = require ('config');
const Video = require ('../models/Video');
const router = Router ();
const auth = require ('../middleware/auth.middleware');

router.post ('/upload', (req, res, next) => {
  let filedata = req.file;
  console.log (filedata);
  if (!filedata) res.status (500).json ({message: `Something went wrong`});

  const name = filedata.filename;
  const path = filedata.path;
  const date = new Date ();

  const video = new Video ({
    name,
    path,
    date,
  });

  video.save ();

  res
    .status (500)
    .json ({message: `Video has been uploaded: ${filedata.filename}`});
});

router.get ('/', async (req, res) => {
  try {
    const videos = await Video.find ({});
    res.status (200).json (videos);
  } catch (e) {
    res.status (500).json ({message: 'Something went wrong, try again'});
  }
});

router.get ('/:id', async (req, res) => {
  try {
    const video = await Video.findById (req.params.id);
    res.status (200).json (video);
  } catch (e) {
    res.status (500).json ({message: 'Something went wrong, try again'});
  }
});

module.exports = router;
