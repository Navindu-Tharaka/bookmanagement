

const pool = require("../config/db");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `INSERT INTO books(title,description,publish_year,code)
      VALUES(?,?,?,?)`,
      [
        data.title,
        data.description,
        data.publish_year,
        data.code
      ],
      (error, results, fields) => {
        if(error){
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getBooks: callback => {
    pool.query(
      `SELECT id,title,description,publish_year,code from books`,
      [],
      (error, results, fields) => {
        if(error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  getBooksById: (id, callback) => {
    pool.query(
      `SELECT id,title,description,publish_year,code from books where id = ?`,
      [id],
      (error, results, fields) => {
        if(error) {
           callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
   updateBooks: (data, callback) => {
    pool.query(
      `UPDATE books SET title=?,description=?,publish_year=?,code=? where id = ?`,
      [
        
        data.title,
        data.description,
        data.publish_year,
        data.code,
        data.id
      ],
      (error, results, fields) => {
        if(error) {
           callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteBooks: (data, callback) => {
    pool.query(
      `DELETE from books where id = ?`,
      [data.id],
      (error, results, fields) => {
        if(error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
   getAuthorsByName: (name, callback) => {
    pool.query(
      `SELECT * from authors where name=?`,
      [name],
      (error, results, fields) => {
        if(error) {
           callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};