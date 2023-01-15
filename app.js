const express= require("express");
const bodyParser =  require("body-parser");

const app=express();

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"))

app.get("/",function(request,response){
    response.render("index")
});

app.listen(3000,function(){
    console.log("Server Started on port 3000")
})