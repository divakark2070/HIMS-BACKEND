let Database =require("./Database");

class Bed{
    constructor(){
        this.id = 0;
        this.name = "";
        this.roomid = 0;
        this.sql = "";
        this.db = new Database();
    }
    
    save(){
        if(this.id == 0){
            this.sql = "INSERT INTO beds(name, roomid) ";
            this.sql += `VALUES('${this.name.replace(/'/g, "''")}',${this.roomid})`;
        }
        else{
            this.sql = `UPDATE beds SET name = '${this.name.replace(/'/g, "''")}', `;
            this.sql += `roomid = ${this.roomid} WHERE id = ${this.id} ;`
        }
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            });
        });
    }

    list(){
        this.sql = `SELECT b.*, r.name AS roomname `;
        this.sql += `FROM beds AS b INNER JOIN rooms AS r on b.roomid = r.id `;
        if(this.roomid !=0){
            this.sql +=`WHERE r.id = ${this.roomid} ORDER BY b.name`
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
        this.sql = `SELECT * FROM beds WHERE roomid =  ${this.roomid} AND id = ${this.id};`
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = `DELETE FROM beds WHERE id = ${this.id};`
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }
}

module.exports = Bed;