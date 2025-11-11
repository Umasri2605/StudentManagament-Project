var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name: {
    type:String,
},
  age:{
    type:String,
},
  gender: {
    type:String,
},    
  course: {
    type:String,
},    
  
});
var studentsdataModel=mongoose.model("studentsbackends",studentSchema);
module.exports =studentsdataModel;