let Database = require("./Database");

class Labtest {
    constructor() {
        this.id = 0;
        this.name = "";
        this.labid = 0;
        this.testtype = "";
        this.rate = 0;
        this.db = new Database();
        this.sql = "";

    }

    save() {
        if(this.id == 0){
            this.sql = `INSERT INTO labtests(name, labid, testtype, rate) `
        this.sql += `VALUES ('${this.name.replace(/'/g, "''")}',${this.labid},'${this.testtype.replace(/'/g, "''")}', ${this.rate})`
        }
        else{
            this.sql = `UPDATE labtests SET name='${this.name.replace(/'/g, "''")}',labid=${this.labid},`
            this.sql += `testtype='${this.testtype.replace(/'/g, "''")}',rate=${this.rate} WHERE id = ${this.id}`
        }

        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result);
            }).catch(err=>{
                reject(err)
            })
        })
    }

    list(){
        this.sql = `SELECT l1.*, l2.name AS labname `;
        this.sql += `FROM labtests AS l1 INNER JOIN labs AS l2 on l1.labid = l2.id`;
        if(this.labid  !=0){
        this.sql += ` WHERE l2.id = ${this.labid} ORDER BY l1.name;`;
        }
            
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result);
            }).catch(err=>{
                reject(err)
            })
        })
    }

    get(){
        this.sql = `SELECT * FROM labtests WHERE labid = ${this.labid} AND id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result);
            }).catch(err=>{
                reject(err)
            })
        })
    }

    delete(){
        this.sql = `DELETE FROM labtests WHERE id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result);
            }).catch(err=>{
                reject(err)
            })
        })
    }
}

module.exports = Labtest;