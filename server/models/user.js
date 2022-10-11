var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String},
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true },
    //schedule: {type: Schema.Types.ObjectId, ref: 'schedules'}

});

module.exports = mongoose.model("users", userSchema);
