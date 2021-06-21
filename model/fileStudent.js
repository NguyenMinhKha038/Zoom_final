const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var fileStudent = new Schema({
    TeacherID: String,
    ClassID: String,
    filepath: String,
    FileName:String
})

const FileStudent = mongoose.model('fileStudent', fileStudent);
module.exports = FileStudent;