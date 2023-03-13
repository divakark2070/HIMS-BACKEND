let Database =require("../Database");

class Item{
    constructor(){
        this.id = 0;
        this.mtype = "";
        this.name = "";
        this.description = "";
        this.manu_companyid = "";
        this.mark_companyid = "";
        this.subquantity = "";
        this.allowdiscount = "";
        this.gstpercent = "";
        this.sql = "";
        this.db = new Database();   
    }
    save(){
        if(this.id==0){
        this.sql=`INSERT INTO pha_items (mtype,name,description,manu_companyid,mark_companyid,subquantity,allowdiscount,gstpercent) `;
        this.sql += ` VALUES('${this.mtype}','${this.name}','${this.description}',${this.manu_companyid},${this.mark_companyid},${this.subquantity},${this.allowdiscount},${this.gstpercent})`;
        }
         else{
             this.sql=`UPDATE pha_items SET mtype='${this.mtype}',name='${this.name}',description='${this.description}',manu_companyid=${this.manu_companyid},mark_companyid=${this.mark_companyid},subquantity=${this.subquantity},allowdiscount=${this.allowdiscount},gstpercent=${this.gstpercent}`;
                
         }
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    };
    list(){
        this.sql = "SELECT * FROM pha_items ORDER BY id";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };
    get(){
        this.sql = "SELECT * FROM pha_items WHERE id=" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };
    delete(){
        this.sql = "DELETE FROM pha_items WHERE id=" +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };
}
module.exports=Item;