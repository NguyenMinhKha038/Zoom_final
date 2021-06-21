const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ClassSchema = new Schema({
    Name: { type: String, min: 3, max: 50 },
ClassName:String,
TeacherID: String,
  
});
const Class = mongoose.model('Class', ClassSchema);
module.exports = Class