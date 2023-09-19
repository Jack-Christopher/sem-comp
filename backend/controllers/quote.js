const db = require('../database/db');
const Quote = require('../models/quote');

const addQuote = async (req, res) => {
  db.connect();

  const { quote, author, authorDescription } = req.body;

  const newQuote = new Quote({
    quote,
    author,
    authorDescription,
  });

  try {
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}


const getRandomQuote = async (req, res) => {
  db.connect();

  try {
    const quotes = await Quote.find();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(randomQuote);
  }
  catch (err) {
    res.status(400).json({ message: err });
  }
}

module.exports = {
  addQuote,
  getRandomQuote,
}