const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DiemDanhSchema = new Schema({
  Ngay:{
    type:Date
  },
  Sinhvien:[],
  MaLop:String,
  MaGV:String
});
const DiemDanh = mongoose.model("DiemDanh", DiemDanhSchema);
module.exports = DiemDanh;
