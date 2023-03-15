let Database =require("./Database");

class Talukas{
    constructor(){
        this.id = 0;
        this.name = "";
        this.districtid = 0;
        this.sql = "";
        this.db = new Database();
    }
    
    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO talukas(name, districtid) ";
            this.sql += "VALUES('" + this.name.replace(/'/g, "''") + "', " + this.districtid + ")";
        }
        else{
            this.sql = "UPDATE talukas SET name = '" + this.name.replace(/'/g, "''") + "', districtid = " + this.districtid + " ";
            this.sql += "WHERE id = " + this.id;
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            });
        });
    }

    get(){
        this.sql = "SELECT * FROM talukas WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT T.*, D.name AS districtname ";
        this.sql += "FROM talukas AS T INNER JOIN districts AS D ON D.id = T.districtid ";
        if(this.districtid != 0)
            this.sql += "WHERE T.districtid = " + this.districtid + " ";
        this.sql += "ORDER BY T.name";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM talukas WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }
}

module.exports = Talukas;