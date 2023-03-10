let Module = require("../models/Module");
let express = require("express");
let fs = require("fs");

let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let object = new Module();
    object.id=0;
    object.srno=body.srno;
    object.name=body.name;
    object.link=body.link;

    let image = body.image;
    if(image !== ""){
        // console.log(image);
        let filename = (Math.random() + 1).toString(36).substring(7);
        fs.writeFile("public/modules/" + filename + ".png", image, 'base64', (err)=>{
            // console.log(err);
        });
        object.picpath = "modules/" + filename + ".png";
    }
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })
});

router.put("/:id",(req,res)=>{
    let body=req.body;
    let object=new Module();
    object.id=req.params.id;
    object.srno=body.srno;
    object.name=body.name;    
    let image = body.image;
    if(image !== ""){
        // console.log(image);
        let filename = (Math.random() + 1).toString(36).substring(7);
        fs.writeFile("public/modules/" + filename + ".png", image, 'base64', (err)=>{
            // console.log(err);
        });
        object.picpath = "modules/" + filename + ".png";
    }
    
    object.link=body.link;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })
    
});

router.get("/",(req,res)=>{
    let object=new Module();
    object.id=req.params.id;
   object.list().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}));
   },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
   })
});

router.get("/:id",(req,res)=>{
    let object=new Module();
    object.id=req.params.id;
   object.get().then((result)=>{
    if(result.length>0)
        res.end(JSON.stringify({status:"success",data:result[0]}));
    else
        res.end(JSON.stringify({status:"failed",data:"Record not found"}))
   },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
   })
});

router.delete("/:id", (req, res)=>{
    let object = new Module();
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
})


  





module.exports = router;