let Database = require("./Database");
class Language{
constructor(){
    this.id = 0;
    this.name = "";
    this.sql = "";
    this.db = new Database();
   
}

save(){
    if(this.id == 0){
        this.sql = `INSERT INTO languages(name) VALUES ('${this.name.replace(/'/g, "''")}')`
    }
    else{
        this.sql = `UPDATE languages SET name='${this.name.replace(/'/g, "''")}' WHERE id =${this.id}`
    }
    return new Promise((resolve, reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result)
        },(err)=>{
            reject(err)
        })
    })
}

list(){
    this.sql = `SELECT * FROM languages ORDER BY name`;
    return new Promise((resolve,reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result)
        }).catch((err)=>{
            reject(err)
        })
    })
}
get(){
    this.sql = `SELECT * FROM languages WHERE id = ${this.id}`;
    return new Promise((resolve,reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result)
        }).catch((err)=>{
            reject(err)
        })
    })
}

delete(){
    this.sql = `DELETE FROM languages WHERE id = ${this.id}`
    return new Promise((resolve,reject)=>{
        this.db.query(this.sql).then((result)=>{
            resolve(result)
        }).catch((err)=>{
            reject(err)
        })
    })
}



}

module.exports = Language;