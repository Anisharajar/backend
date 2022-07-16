const express=require("express");
const CourseData= require('./src/model/CourseData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// courseList=[
//     {
//     "courseTitle":"React",
//     "courseDescription":"React Course",
//     "courseDuration":"4 Months",
//     "courseDate":"2022-05-27",
//     "courseVenue":"SCMS"
// },
// {
// "courseTitle":"gfyf",
// "cohttp://localhost:3000/getcoursesurseVenue":"b",
// "courseDate":"2022-05-06"
// },
// {
//     "courseTitle":"php",
//     "courseDescription":"iefgbhgf",
//     "courseDuration":"3",
//     "courseDate":"2022-05-18",
//     "courseVenue":"online"
// },
// {
//     "courseTitle":"imca",
//     "courseDescription":"this is computer application course",
//     "courseVenue":"cochin",
//     "courseDate":"2022-05-30",
//     "courseDuration":"5"
// },
// ]
// app.get('/getcourses',function(req,res){
// res.send( courseList);
// })
// app.post('/addcourse',function(req,res){
//     console.log(req.body);
//     courseList.push(req.body);
//     res.send(courseList);
// });


app.get('/getcourses',function(req,res){
CourseData.find().then(function(courses){
   console.log(courses);
   res.send(courses);
})
})
app.post('/addcourse',function(req,res){
var item={
    courseTitle:req.body.courseTitle,
    courseDescription:req.body.courseDescription,
    courseVenue:req.body.courseVenue,
    courseDuration:req.body.courseDuration,
    courseDate:req.body.courseDate
}
var course=CourseData(item);
course.save();

CourseData.find()
.then(function(course){
    res.send(course);
})
})
app.put('/update/:id',function(req,res){
const id=req.params.id;
courseTitle=req.body.courseTitle;
    courseDescription=req.body.courseDescription;
    courseVenue=req.body.courseVenue;
    courseDuration=req.body.courseDuration;
  courseDate=req.body.courseDate;
 
    CourseData.findByIdAndUpdate({"_id":id},
{$set:{"courseTitle":courseTitle,
"courseDescription":courseDescription,
"courseDate":courseDate,
"courseVenue":courseVenue,
"courseDuration":courseDuration
}
}).then(function(){res.send("updated")});
})
 app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    CourseData.findByIdAndDelete(id,function()
    {
        res.send("Deleted")})
    })


app.listen(5000);
console.log("Server running at port :5000");