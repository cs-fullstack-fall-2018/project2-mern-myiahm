const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const entrySchema = new Schema({
        username: String,
        Title: String,
        entry: String,
        date: Date
    }
);

const Entries = mongoose.model('Entries' , entrySchema);

module.exports= Entries;