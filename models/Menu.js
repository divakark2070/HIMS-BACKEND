let Database = require("./Database");

class Menu{
    constructor(){
        this.id=0;
        this.title="";
        this.canhavechilds="";
        this.menuid="";
        this.srno="";
        this.icon="";
        this.link="";
        this.sql="";
        this.db= new Database();
    };

    save(){
        if(this.id==0){
        this.sql=`INSERT INTO menus (title,canhavechilds,menuid,srno,icon,link)VALUES('${this.title}','${this.canhavechilds}',${this.menuid},${this.srno},'${this.icon}','${this.link}')`;
        }
        else{
            this.sql=`UPDATE menus SET title='${this.title}',canhavechilds='${this.canhavechilds}',menuid=${this.menuid},srno=${this.srno},icon='${this.icon}',link='${this.link}'`;
        }
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            }, (err) => {
                reject(err);
            })
        });
    };

    list(){
        this.sql="SELECT * FROM menus ORDER BY title";
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err)
            })
        })
    };

    get(){
        this.sql="SELECT * FROM menus WHERE id =" +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err)
            })
        })
    };

    delete(){
        this.sql="DELETE FROM menus WHERE id =" +this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.sql).then((result)=>{
                resolve(result);
            },(err)=>{
                reject(err)
            })
        })
    }

    
}
module.exports=Menu;