const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const db = require('../database/db');
const User = require('../models/user');
require('dotenv').config();

const login = async (req, res) => {
    db.connect();

    const { email, password } = req.body;
    
    try {
        User.findOne({ email: email })

        .then((user) => {
            bcrypt
            .compare(password, user.password)

            // if the passwords match
            .then((passwordCheck) => {
                if(!passwordCheck) {
                    return res.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                }
                //   create JWT token
                const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email,
                },
                process.env.JWT_SECRET,
                { expiresIn: "30d" }
                );

                res.status(200).send({
                    message: "Login Successful",
                    email: user.email,
                    token,
                });
            })
            .catch((error) => {
                res.status(400).send({
                message: "Passwords does not match",
                error,
                });
            });
        })
        .catch((e) => {
            res.status(404).send({
            message: "Email not found",
            e,
            });
        });
    } catch (error) {
        res.status(500).send({
        message: "Server error",
        error,
        });
    }
};

module.exports = login