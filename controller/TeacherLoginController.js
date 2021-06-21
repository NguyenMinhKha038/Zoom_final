const bcrypt = require('bcrypt')
const Teacher = require('../model/Teacher');

module.exports = (req, res) => {
    
  const { Email, Password } = req.body;
  //console.log(Email);
  //console.log(Password);
    Teacher.findOne({ Email: Email }, (error, teacher) => {
      //console.log(Teacher.Email);
        if (teacher) {
            
            bcrypt.compare(Password,teacher.Password, (err, same) => {
                //console.log(Teacher.Password)
              if (same) { // if passwords match
                  TeacherloggedIn = teacher.Email;
                  req.session.TeacherID= teacher.Email ;
                  req.session.role=teacher.role;
                  msTeacherName = teacher.Name;
                  global.TeacherEmail = teacher.Email;
                  
                  res.render('pgTeacher')
                }else if(err) {
                  res.redirect('/teacher/loginform')
                }
            })
        } else {
          res.redirect('/teacher/loginform')
          console.log('Khong ton tai Teacher');
        }
    })
}