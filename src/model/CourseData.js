const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://AnishaRajAR:Anisha2002april@cluster0.nl0vs.mongodb.net/CourseDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
 CourseSchema=new Schema({courseTitle:String,
courseDescription:String,
courseDuration:String,
courseDate:String,
courseVenue:String});
var CourseData=mongoose.model("courseset",CourseSchema);
module.exports=CourseData;
