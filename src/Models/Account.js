const mongoose = require("mongoose");

let Account;

if (mongoose.models && mongoose.models.Account) {
    Account = mongoose.models.Account;
    const accountSchema = Account.schema;

} else {
    const accountSchema = new mongoose.Schema({
        userId:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        value:{
            type:String,
            default:"0"
        },
        
    });

    Account = mongoose.model("Account", accountSchema);
}

module.exports = Account;
