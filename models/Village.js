let Database =require("./Database");

class Villages{
    constructor(){
        this.id = 0;
        this.name = "";
        this.talukaid = 0;
        this.sql = "";
        this.db = new Database();
    }
    
    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO villages(name, talukaid) ";
            this.sql += "VALUES('" + this.name.replace(/'/g, "''") + "', " + this.talukaid + ")";
        }
        else{
            this.sql = "UPDATE villages SET name = '" + this.name.replace(/'/g, "''") + "', talukaid = " + this.talukaid + " ";
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
        this.sql = "SELECT * FROM villages WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    list(){
        this.sql = "SELECT V.*, T.name AS talukaname ";
        this.sql += "FROM  villages AS V INNER JOIN talukas AS T ON T.id = V.talukaid ";
        if(this.talukaid != 0)
            this.sql += "WHERE V.talukaid = " + this.talukaid + " ";
        this.sql += "ORDER BY V.name";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM villages WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }
}

module.exports = Villages;