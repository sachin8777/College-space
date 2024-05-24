const mongoose = require ('mongoose');
const {Schema} = mongoose

const announcementSchema = new Schema ({
    text : String,
    department : String,
})

module.exports = mongoose.model("announcement",announcementSchema);