let Item = require("../../models/pharmacy/Item");
let express = require("express");

let router = express.Router();
router.post("/",(req,res)=>{
    let body=req.body;
    let object =new Item();
    object.id=0;
    object.mtype = body.mtype;
    object.name = body.name;
    object.description = body.description;
    object.manu_companyid = body.manu_companyid;
    object.mark_companyid = body.mark_companyid;
    object.subquantity = body.subquantity;
    object.allowdiscount = body.allowdiscount;
    object.gstpercent = body.gstpercent; 
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })

});
router.put("/",(req,res)=>{
    let body=req.body;
    let object =new Item();
    object.id=req.params.id;
    object.mtype = body.mtype;
    object.name = body.name;
    object.description = body.description;
    object.manu_companyid = body.manu_companyid;
    object.mark_companyid = body.mark_companyid;
    object.subquantity = body.subquantity;
    object.allowdiscount = body.allowdiscount;
    object.gstpercent = body.gstpercent; 
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })

});
router.get("/",(req,res)=>{ 
    let object =new Item();
    object.id=req.params.id;
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })

});
router.get("/:id",(req,res)=>{ 
    let object =new Item();
    object.id=req.params.id;
    object.get().then((result)=>{
        if(result.length>0)
        res.end(JSON.stringify({status:"success",data:result[0]}))
        else
        res.end(JSON.stringify({status:"failed",data:"Record not found"}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })

});
router.delete("/:id",(req,res)=>{ 
    let object =new Item();
    object.id=req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success",data:result}))
    },(err)=>{
        res.end(JSON.stringify({status:"failed",data:err}))
    })

});



module.exports = router;