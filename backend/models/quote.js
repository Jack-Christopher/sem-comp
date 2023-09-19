const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
  quote: { type: String, required: [true, "Quote is required"] },
  author: { type: String, required: [true, "Author is required"] },
  authorDescription: { type: String, required: [true, "Author description is required"] },
});

module.exports = mongoose.model.QuoteSchema || mongoose.model("Quote", QuoteSchema);