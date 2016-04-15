var fs = require('fs');
var serverInfo = {
  setting : 0,
  server : "",
  port : "",
  user : "",
  password : "",
  database : "",
  medm_id : ""
};

exports.checkServerInfo = function(callback){
  console.log("checkServerInfo");
  serverInfo = JSON.parse(fs.readFileSync('./lib/config.json', 'UTF-8'));
  return callback(serverInfo);
};
