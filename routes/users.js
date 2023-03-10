var express = require("express");
const User = require("../models/User");
let bodyparser = require("body-parser");
const router = express.Router();

router.post("/", (req, res) => {
    let body = req.body;
    let user = new User();
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    user.mobileno = body.mobileno;
    user.email = body.email;
    user.insert().then(result => {
        res.end(result);
    }, err => {
        res.end(err);
    });
});

// router.put("/:id", (req, res) => {
//     let body = req.body;
//     let user = new User();
//     user.id = req.params.id;
//     user.name = body.name;
//     user.username = body.username;
//     user.password = body.password;
//     user.mobileno = body.mobileno;
//     user.email = body.email;
//     user.save().then(result => {
//         res.end(result);
//     }, err => {
//         res.end(err);
//     });
// });



router.put("/:id", (req, res)=>{
    let body = req.body;
    let user = new User();
    user.id = req.params.id;
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    user.mobileno = body.mobileno;
    user.email = body.email;
    user.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


router.delete("/:id", (req, res) => {
    let id = req.params.id;
    let user = new User();
    user.id = id;
    user.delete().then(result => {
        res.end(result);
    }, err => {
        res.end(err);
    });
});

router.get("/", (req, res) => {
    let user = new User();
    user.list().then(result => {
        res.end(result);
    }, err => {
        res.end(err);
    });
});

router.get("/:id", (req, res) => {
    let user = new User();
    user.id = req.params.id;
    user.get().then(result => {
        res.end(result);
    }, err => {
        res.end(err);
    });
})

module.exports = router;