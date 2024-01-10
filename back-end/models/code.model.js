const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9]{5,6}$/, // Regex to match 5 to 6 characters alphanumeric code
    },
    used: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Code = mongoose.model("Code", codeSchema);
module.exports = Code;
