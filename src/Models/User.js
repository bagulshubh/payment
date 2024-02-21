const mongoose = require("mongoose");

let User;

if (mongoose.models && mongoose.models.User) {
    User = mongoose.models.User;
    const userSchema = User.schema;

    if (!userSchema.paths.connectedArr) {
        userSchema.add({
            connectedArr: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }],
        });
    }

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
        connected: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    });

    User = mongoose.model("User", userSchema);
}

module.exports = User;
