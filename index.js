let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");

let app = express();
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb', extended:true}));
app.use(express.json());
app.use(express.static("public"));

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"hims"
});

app.get("/", (req, res)=>{
    res.end("HIMS back end");
});

app.use("/titles", require("./routes/titles"));
app.use("/states", require("./routes/states"));
app.use("/districts", require("./routes/districts"));

//States APIs

app.listen(8081, ()=>{
    console.log("HIMS back end running on http://localhost:8081");
});