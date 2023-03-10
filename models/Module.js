let Database = require("./Database");

class Module{
    constructor(){
        this.id = 0;
        this.srno ="";
        this.name ="";
        this.picpath = "";
        this.link = "";
        this.sql = "";
        this.db = new Database();
    }

    save(){
        if(this.id==0){
        this.sql = `INSERT INTO modules(srno,name,picpath,link) VALUES(${this.srno},'${this.name.replace(/'/g, "''")}','${this.picpath}','${this.link}')`;
        }
        else{
            this.sql =`UPDATE modules SET srno=${this.srno},name='${this.name.replace(/'/g, "''")}', `;
            if(this.picpath !== ""){
                this.sql += `picpath='${this.picpath}', `;
            }
            this.sql += `link='${this.link}' WHERE id = ${this.id}`;        
        }

        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    list(){
        this.sql = "SELECT * FROM modules ORDER BY srno";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    get(){
        this.sql = "SELECT * FROM modules WHERE id = " +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    };

    delete(){
        this.sql = "DELETE FROM modules WHERE id = " +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }
}

module.exports = Module;