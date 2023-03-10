const Database = require("./Database");

class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.username = "";
        this.password = "";
        this.mobileno = "";
        this.email = "";
        this.doctorid = 0;
        this.usertypeid = 0;
        this.query = "";
        this.db = new Database();
    }

    insert = () => {
        this.query = "INSERT INTO users(name, username, password, mobileno, email) ";
        this.query += "VALUES('" + this.name + "', '" + this.username + "', '" + this.password + "'," + this.mobileno + " , '" + this.email + "')";
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    save() {
        if (this.id == 0) {
            this.sql = `INSERT INTO users(name,username,password,mobileno,email,doctorid,usertypeid) VALUES('${this.name.replace(/'/g, "''")}','${this.username}','${this.password}',${this.mobileno},'${this.email}') ,doctorid = ${this.doctorid} ,usertypeid= ${this.usertypeid}  `;
        }
        else {
    
            this.sql = `UPDATE users SET name=  '${this.name.replace(/'/g, "''")}',username = '${this.username}',password = '${this.password}', mobileno='${this.mobileno}',email= '${this.email}' ,doctorid = ${this.doctorid} ,usertypeid= ${this.usertypeid}  WHERE id = ${this.id}`

        }
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result) => {
                resolve(result);
            }, (err) => {
                reject(err);
            })
        })
    }

    delete = () => {
        this.query = "DELETE FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    list = () => {
        this.query = "SELECT * FROM `users` ORDER BY id";
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    get = () => {
        this.query = "SELECT * FROM `users` WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(JSON.stringify({ status: "success", data: result[0] }));
            }, (err => {
                reject(JSON.stringify({ status: "failed", data: err }));
            }));
        });
    }

    getforlogin = () => {
        this.query = "SELECT * FROM `users` WHERE username = '" + this.username + "' AND password = '" + this.password + "'";
        return new Promise((resolve, reject) => {
            this.db.query(this.query).then((result) => {
                resolve(result);
            }, (err => {
                reject(err);
            }));
        });
    }
}

module.exports = User;