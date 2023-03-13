let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("mysql");

let app = express();
app.use(express.static("public"));
app.use(bodyparser.json({limit:'50mb'}));
app.use(bodyparser.urlencoded({limit:'50mb', extended:true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});
app.get("/", (req, res)=>{
    res.end("HIMS back end");
});
app.use("/authentication", require("./routes/authentication"));
app.use("/users", require("./routes/users"));
app.use("/titles", require("./routes/titles"));
app.use("/genders", require("./routes/genders"));
app.use("/states", require("./routes/states"));
app.use("/districts", require("./routes/districts"));
app.use("/paymentmodes", require("./routes/paymentmodes"));
app.use("/modules", require("./routes/modules"));
app.use("/menus", require("./routes/menus"));
app.use("/labs", require("./routes/labs"));
app.use("/labtests", require("./routes/labtests"));
app.use("/languages", require("./routes/languages"));
app.use("/beds", require("./routes/beds"));
app.use("/bloodgroups", require("./routes/bloodgroups"));
app.use("/categories", require("./routes/categories"));
app.use("/concessionauthorities", require("./routes/concessionauthorities"));
app.use("/configurations", require("./routes/configurations"));
app.use("/departments", require("./routes/departments"));
app.use("/ipdoptions", require("./routes/ipdoptions"));
app.use("/ipdservices", require("./routes/ipdservices"));
app.use("/nationalities", require("./routes/nationalities"));
app.use("/opdservices", require("./routes/opdservices"));
// app.use("/relations", require("./routes/relations"));
app.use("/religions", require("./routes/religions"));
app.use("/rooms", require("./routes/rooms"));
app.use("/specializations", require("./routes/specializations"));
app.use("/usertypes", require("./routes/usertypes"));
app.use("/pharmacy/items", require("./routes/pharmacy/items"));



//States APIs

app.listen(8081, ()=>{
    console.log("HIMS back end running on http://localhost:8081");
});