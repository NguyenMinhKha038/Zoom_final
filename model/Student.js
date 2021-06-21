const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
  Name: String,
  Email: {
    type: String,
    unique: true,
  },
  role: Number,
  Password: String,
  ClassID: String,
  StudentID: String,
  SDT: String,
});
const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;