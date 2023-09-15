const bcrypt = require('bcrypt');
const db = require('../database/db');
const User = require('../models/user');

const register = async (req, res) => {
  db.connect();

  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  

  console.log("req.body: ", req.body);
  console.log("name: ", name);
  console.log("lastname: ", lastname);
  console.log("email: ", email);
  console.log("password: ", password);

  try {
    User.findOne({ email:email }).then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        if (!name || !lastname || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        } else {
          const newUser = new User({
            name,
            lastname,
            email,
            password
          });

          if (req.body.phone) { newUser.phone = req.body.phone; }
          // if (req.body.gender) { newUser.gender = req.body.gender; }
          newUser.userType = "user";

          // Hash password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then((result) => {
                  console.log("User registered: ", result);
                  res.status(201).json({
                    msg: 'User registered',
                    result
                  });
                })
                .catch((err) => {
                  console.log("Error: ", err);
                  res.status(500).json({
                    error: err
                  });
                });
            });
          });
        }
      }
    })
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

module.exports = register