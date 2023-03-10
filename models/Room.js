let Database = require("./Database");

class Room{

    constructor(){
        this.id = 0;
        this.name = "";
        this.shortname = "";
        this.ocolor = "";
        this.vcolor = "";
        this.sql = "";
        this.db = new Database();
    }

    save(){
        if(this.id == 0){
            this.sql = `INSERT INTO rooms(name,shortname,ocolor,vcolor) VALUES('${ this.name.replace(/'/g, "''") }','${ this.shortname.replace(/'/g, "''") }', '${this.ocolor}','${this.vcolor}')`;
        }
        else{
            this.sql = `UPDATE rooms SET name = '${ this.name.replace(/'/g, "''") }', shortname = '${ this.shortname.replace(/'/g, "''") }', ocolor = '${this.ocolor}', vcolor = '${this.vcolor}'   WHERE id = ${this.id}`;
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
        this.sql = "SELECT *, (SELECT COUNT(*) FROM beds AS B WHERE B.roomid = R.id) AS bedcount FROM rooms AS R ORDER BY id";
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    get(){
        this.sql = "SELECT * FROM rooms WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }

    delete(){
        this.sql = "DELETE FROM rooms WHERE id = " + this.id;
        return new Promise((resolve, reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err)=>{
                reject(err);
            })
        })
    }
}
 
module.exports = Room;