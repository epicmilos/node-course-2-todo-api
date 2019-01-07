const{SHA256} =require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

// bcrypt.genSalt(10,(error, salt)=>{
//   bcrypt.hash(password,salt,(error,hash)=>{
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$khEe7hcNlBgI4SMlBM1NA.kRibzwyMbdYXAxuh019k4LXa5pZxIVK';

bcrypt.compare(password, hashedPassword,(error, res)=>{
  console.log(res);
});
// var data = {
//   id:10
// };
//
// var token = jwt.sign(data, 'secret123');
// console.log(token);
//
// var decoded = jwt.verify(token, 'secret123');
// console.log('decoded', decoded);

// jwt.verify
// var message = 'I user number 3';
// var hash = SHA256(message).toString(); //we use .toString because the result is a object
//
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data ={
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(resultHash===token.hash){
//   console.log('Data was not changed');
// }else{
//   consolelog('WAR! Data was changed');
// }
