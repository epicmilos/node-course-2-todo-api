var env = process.env.NODE_ENV || 'development';
//console.log('env *****', env);

if(env === 'development' || env === 'test'){
//required json is automatically parsed in javascript object
var config = require('./config.json');
var envConfig = config[env];
//when using var to access a property we must use bracket notation
Object.keys(envConfig).forEach((key)=>{
  process.env[key] = envConfig[key];
});
//console.log(Object.keys(envConfig));
//Object.keys gets an object, gets the object keys and returns them as an array
}


// if(env==='development'){
//   process.env.PORT=3000;
//   process.env.MongoDB_URI='mongodb://localhost:27017/TodoApp';
// }else if(env==='test'){
//   process.env.PORT=3000;
//   process.env.MongoDB_URI='mongodb://localhost:27017/TodoAppTest';
// }


