let Database = require("./Database");

class Ipdoption {

   constructor() {
      this.id = 0;
      this.srno = 0;
      this.title = "";
      this.link = "";
      this.optionfor = "";

      this.sql = "";
      this.db = new Database;
   }
   save() {
      if (this.id == 0) {
         this.sql = `INSERT INTO ipdoptions(srno,title,link,optionfor) VALUE(${this.srno},'${this.title.replace(/'/g, "''")}','${this.link.replace(/'/g, "''")}','${this.optionfor.replace(/'/g, "''")}')`
      }
      else {
         this.sql = `UPDATE ipdoptions SET srno =${this.srno}, title='${this.title.replace(/'/g, "''")}',link='${this.link.replace(/'/g, "''")}',optionfor='${this.optionfor.replace(/'/g, "''")}' WHERE id =${this.id}`
      }
      return new Promise((resolve, reject) => {
         this.db.query(this.sql).then((result) => {
            resolve(result);
         }, (err) => {
            reject(err);
         }
         )
      })
   }

list(){
   this.sql = "SELECT * FROM ipdoptions ORDER BY srno,title,link,optionfor";
   return new Promise((resolve, reject) => {
      this.db.query(this.sql).then((result) => {
         resolve(result);
      }, (err) => {
         reject(err);
      })
   })
}
get(){
   this.sql = "SELECT * FROM ipdoptions WHERE id = " + this.id;
   return new Promise((resolve, reject) => {
      this.db.query(this.sql).then((result) =>{
         resolve(result);
      },(err)=>{
         reject(err);
      })
   })
}
delete(){
   this.sql = "DELETE FROM ipdoptions WHERE id = " + this.id;
   return new Promise((resolve, reject) => {
      this.db.query(this.sql).then((result)=>{
         resolve(result);
      },(err)=>{
         reject(err);
      })
   })
}

}




module.exports = Ipdoption;