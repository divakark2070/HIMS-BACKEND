let Bed = require("../models/Bed");
let express = require("express");

let router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let object = new Bed();
    object.id = 0;
    object.name = body.name;
    object.roomid = body.roomid;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:roomid", (req, res)=>{
    let object = new Bed();
    object.roomid = req.params.roomid;
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new Bed();
    object.id = req.params.id;
    object.name = body.name;
    object.roomid = body.roomid;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


router.get("/:roomid/:id", (req, res)=>{
    let object = new Bed();
    object.id = req.params.id;
    object.roomid = req.params.roomid;
    object.get().then((result)=>{
        if(result.length > 0)
            res.end(JSON.stringify({status:"success", data:result[0]}));
        else
            res.end(JSON.stringify({status:"failed", data:"Record not found"}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


router.delete("/:roomid/:id", (req, res)=>{
    let object = new Bed();
    object.roomid = req.params.roomid;
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


module.exports = router;