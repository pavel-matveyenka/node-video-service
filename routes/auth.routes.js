const {Router} = require ('express');
const bcrypt = require ('bcryptjs');
const {check, validationResult} = require ('express-validator');
const config = require ('config');
const jwt = require ('jsonwebtoken');
const User = require ('../models/User');
const router = Router ();

// /api/auth/register
router.post (
  '/register',
  [
    check ('email', 'Incorrect email').isEmail (),
    check (
      'password',
      'Length of password can not be less then 6 symbols'
    ).isLength ({min: 6}),
  ],
  async (req, res) => {
    try {
      const errors = validationResult (req);
      if (!errors.isEmpty ()) {
        return res.status (400).json ({
          errors: errors.array (),
          message: 'Incorrect data during registration',
        });
      }

      const {email, password} = req.body;

      const candidate = await User.findOne ({email});

      if (candidate) {
        return res.status (400).json ({message: 'This user already exists'});
      }

      const hashedPassword = await bcrypt.hash (password, 17);

      const user = new User ({email, password: hashedPassword});

      await user.save ();

      res.status (201).json ({message: 'User has been created'});
    } catch (e) {
      res.status (500).json ({message: 'Something went wrong, try again'});
      console.log ('Error', e);
    }
  }
);

// /api/auth/login
router.post (
  '/login',
  [
    check ('email', 'Incorrect email').normalizeEmail ().isEmail (),
    check ('password', 'Enter a password').exists (),
  ],
  async (req, res) => {
    try {
      const errors = validationResult (req);
      if (!errors.isEmpty ()) {
        return res.status (400).json ({
          errors: errors.array (),
          message: 'Incorrect data during entering the system',
        });
      }

      const {email, password} = req.body;

      const user = await User.findOne ({email});

      if (!user) {
        return res.status (400).json ({message: 'No such user exists'});
      }

      const isMatch = await bcrypt.compare (password, user.password);

      if (!isMatch) {
        return res.status (400).json ({message: 'False password'});
      }

      const token = jwt.sign ({userId: user.id}, config.get ('jwtSecret'), {
        expiresIn: '1h',
      });

      res.json ({token, userId: user.id});
    } catch (e) {
      res.status (500).json ({message: 'Something went wrong, try again'});
    }
  }
);

module.exports = router;