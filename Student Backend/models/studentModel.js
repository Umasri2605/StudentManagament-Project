var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
},
  age:{
    type:String,
    required:true,
},
  gender: {
    type:String,
    required:true,
},    
  course: {
    type:String,
    required:true,
},    
  education:{
     type:String,
     required:true,  
}
});
var studentsdataModel=mongoose.model("studentsbackends",studentSchema);
module.exports =studentsdataModel;