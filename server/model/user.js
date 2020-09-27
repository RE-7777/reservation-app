const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

 
const UserSchma = new Schema ({
  //autor
  userName: { 
      type: String, 
      required:true, 
      max:[60,'最大60文字']
  },
  email: { 
      type: String, 
      required:true,
      lowercase:true,
      unique:true, 
      max:[60,'最大60文字']
  },
  password: {
       type: String, 
       required:true, 
       min:[6,'6文字以上'],
       max:[30,'最大30文字']
  },

  
});
UserSchma.methods.hasSamePassword = function(inputPassword) {
  const user = this;
  return bcrypt.compareSync(inputPassword,user.password);
}

UserSchma.pre('save', function(next) {
  const user = this;
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
        // Store hash in your password DB.
        user.password = hash;
        next();
    });
});
})

module.exports=mongoose.model('User',UserSchma);