const {Router} = require ('express');
const config = require ('config');
const Video = require ('../models/Video');
const router = Router ();
const auth = require ('../middleware/auth.middleware');
var formidable = require ('formidable');
var fileSystem = require ('fs');

router.post ('/upload', async (req, res) => {
  try {
    let formData = new formidable.IncomingForm ();
    formData.parse (req, async (fields, files) => {
      let oldPath = files.video.path;
      let newPath =
        'upload/videos/' + new Date ().getTime () + '-' + files.video.name;

      let name = fields.name;

      let oldPathThumbnail = files.thumbnail.path;
      let thumbnail =
        'upload/thumbnails/' +
        new Date ().getTime () +
        '-' +
        files.thumbnail.name;

      let date = new Date ().getTime ();

      fileSystem.rename (oldPathThumbnail, thumbnail, error2 => {
        console.log ('thumbnail upload error = ', error2);
      });

      fileSystem.rename (oldPath, newPath, async () => {
        const video = new Video ({
          name,
          file,
          thumbnail,
          date,
        });

        await video.save ();
      });
    });
    //const {name, file, thumbnail, date} = req.body;

    res
      .status (201)
      .json ({message: `Video has been uploaded ${files.video.name}`});
  } catch (e) {
    res.status (500).json ({message: `Something went wrong, try again ${e}`});
  }
});

router.get ('/', async (req, res) => {
  try {
    const videos = await Video.find ({});
    //res.send (videos);
  } catch (e) {
    res.status (500).json ({message: 'Something went wrong, try again'});
  }
});

router.get ('/:id', async (req, res) => {
  try {
    const video = await Video.findById (req.params.id);
  } catch (e) {
    res.status (500).json ({message: 'Something went wrong, try again'});
  }
});

module.exports = router;
