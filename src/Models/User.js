const mongoose = require("mongoose");

let User;

if (mongoose.models && mongoose.models.User) {
    User = mongoose.models.User;
} else {
    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        verified: {
            type: Boolean,
            default: false,
        },
    });

    User = mongoose.model("User", userSchema);
}

module.exports = User;
