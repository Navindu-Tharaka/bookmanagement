

const { create, getBooksById, getBooks, updateBooks, deleteBooks, getAuthorsByName } = require("../models/Book");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createBooks: (req, res) => {
    const body = req.body;

      if (!body.code) {
    return res.status(400).json({
      success: 0,
      message: "Code is required to create a book"
    });
  }
    const salt = genSaltSync(10);
    body.code = hashSync(body.code, salt);
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection error"
        });
      }
      return res.status(200).json({
        success:1,
        data: results
      })
    });
  },
  getBooksById: (req, res) => {
    const id = req.params.id;
    getBooksById(id, (err, results) => {
      if(err) {
        console.log(err);
        return;
      }
      if(!results){
        return res.json({
          success: 0,
          message: "Record not found"
        });
      }
      return res.json({
        success: 1,
        data: results
      })
    });
  },
  getBooks: (req, res) => {
 
    getBooks((err, results) => {
      if(err) {
        console.log(err);
        return;
      }
      
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  updateBooks: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.code = hashSync(body.code, salt);
    updateBooks(body, (err, results) => {
      if (err) {
        console.log(err);
       return;
      }
      return res.json({
        success:1,
        message: "Updated Successfully"
      });
    });
  },
  deleteBooks: (req, res) => {
    const data = req.body;
    deleteBooks(data, (err, results) => {
      if (err) {
        console.log(err);
       return;
      }
      if(!results) {
        return res.json({
          success: 0,
          message: "Record not found"
        });
      }
      return res.json({
        success:1,
        message: "Book deleted Successfully"
      });
    });
  },
  login: (req, res) => {
  const body = req.body;
  getAuthorsByName(body.name, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Internal server error"
      });
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "invalid author"
      });
    }

 
    if (body.name === results.name) {
      const jsontoken = sign({ result: results }, "abcd123", {
        expiresIn: "1h"
      });
      return res.json({
        success: 1,
        message: "login success",
        token: jsontoken
      });
    } else {
      return res.json({
        success: 0,
        message: "login failed invalid name"
      });
    }
  });
},

};