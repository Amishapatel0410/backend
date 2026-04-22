const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({

    shorter: {
        type: String,
        required:true,
        unique:true

    },
    actualurl: {
        type:String,
        required:true,
        unique:true
    }
});


const Url = mongoose.model("Url", urlSchema);
module.exports = Url;