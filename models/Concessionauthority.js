let Database  = require("./Database")

class Concessionauthority{
    constructor(){
        this.id = 0;
        this.name = "";

        this.sql = "";
        this.db = new Database();
    }

  save(){
    if (this.id == 0){
        this.sql = `INSERT INTO concessionauthorities(name) VALUES('${this.name.replace(/'/g,"''")}')`;
    }
    else{
        this.sql = `UPDATE concessionauthorities SET name = '${ this.name.replace(/'/g, "''") }' WHERE id = ${this.id}`;
    }
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })  
  }
  
    
  list(){
    this.sql = "SELECT * FROM concessionauthorities ORDER BY name";
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })
}

get(){
    this.sql = "SELECT * FROM concessionauthorities WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })
  } 

  delete(){
    this.sql = "DELETE FROM concessionauthorities WHERE id = " + this.id;
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result);
        }, (err)=>{
            reject(err);
        })
    })
  }
}
module.exports = Concessionauthority  