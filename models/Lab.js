let Database = require("./Database");

class Lab{
    constructor(){
        this.id = 0;
        this.name = "";
        this.db = new Database();
        this.sql ="";
    }

    save(){
        if(this.id == 0){
        this.sql = `INSERT INTO labs(name) VALUES ('${this.name.replace(/'/g, "''")}')`
        }
        else{
            this.sql = `UPDATE labs SET name='${this.name.replace(/'/g, "''")}' WHERE id = ${this.id}`
        }
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }).catch(err=>{
                reject(err)
            })
        })
    }

    list(){
        this.sql = `SELECT *,(SELECT COUNT(*) FROM labtests AS l2 WHERE l2.labid = l1.id ) AS labtestscount FROM labs AS l1 ORDER by id;`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    get(){
        this.sql = `SELECT * FROM labs WHERE id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    delete(){
        this.sql = `DELETE FROM labs WHERE id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}

module.exports = Lab;