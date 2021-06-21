const bcrypt = require('bcrypt')
const Student = require('../model/Student');
const express = require('express'); //khai báo sử dụng module express
const app = express();


module.exports = (req, res) => {
    
  const { Email, Password } = req.body;
    Student.findOne({ Email: Email }, (error, student) => {
      //console.log(Teacher.Email);
        if (student) {
            
            bcrypt.compare(Password,student.Password, (err, same) => {
                //console.log(Teacher.Password)
                if (same) { // if passwords match
                    //req.session.StudentID = student.StudentID;
                  req.session.ClassID = student.ClassID;
                  req.session.StudentID = student.Email;
                  req.session.StudentName = student.Name;
                  req.session.role=student.role;
                  global.NameofStudent = student.Name;
                  global.ClassIDofStudent = student.ClassID;
                  global.role = student.role;
                  global.Email = student.Email;
                  global.StudentID = student.StudentID;;
    
                    res.render('pgTeacher')
                }else  {
                  //res.render('StundentLoginForm', { "err": req.flash('Email hoặc Mật khẩu không đung') });
                  // req.flash("error", "Email hoặc Mật khẩu không đung");
                  // res.render('StundentLoginForm');
                  //console.log('mat khau khong dung')
                  // req.flash('err', 'Flash is back!');
                  res.send('<script>alert("Mật khẩu không đúng")</script>');
                  
                  
                  
                }
            })
        } else {
          // res.redirect('/student')
          //console.log('Khong ton tai Student');
          // req.flash("error", "Email hoặc Mật khẩu không đung");
          res.send('<script>alert("Không tồn tại User")</script>');
          
          
        }
    })
  
  
     }