const mongoose = require("mongoose");

const DB = "mongodb+srv://authusers:Auth2022@cluster0.mhlqytz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})