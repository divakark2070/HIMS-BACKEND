let Database = require("./Database");
class Configurations{

    constructor(){
        this.id = 0;
        this.cname = "";
        this.cvalue = "";
        this.sql = "";
        this.db = new Database();
    }

    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO configurations(cname,cvalue)";
            this.sql += "VALUES('"+this.cname.replace(/'/g,"''") +"', '"+ this.cvalue.replace(/'/g,"''")+"')";
        }
        else {
            this.sql = "UPDATE configurations SET cname = '" + this.cname.replace(/'/g, "''") + "',";
            this.sql += "cvalue = " + this.cvalue.replace(/'/g,"''") + " ";
            this.sql += "WHERE id =" + this.id;
        }

        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    get(){
        this.sql = "SELECT * FROM configurations WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT * FROM configurations ORDER BY id";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM configurations WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

}

module.exports = Configurations;