const db = require("../db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM lists", (error, result) => {
    if (error) {
      console.log("error", error);
      callback(error, null);
      return;
    }
    callback(null, result);
  });
};

exports.getOne = (id, callback) => {
  db.query(
    `select * from tasks inner join lists on lists.list_id = tasks.list_id where tasks.list_id = ${id};`,
    (error, result) => {
      if (error) {
        console.log("error", error);
        callback(error, null);
        return;
      }   
        
      callback(null, result);
    }
  );
};
exports.create = (list, callback)=>{
  db.query(`INSERT INTO lists(name) VALUES ("${list.name}")`, (error, result)=>{
    if (error) {
      console.log("error", error);
      callback(error, null);
      return;
    }   
      
    callback(null, result);
  })
}

