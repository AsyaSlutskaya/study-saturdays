'use strict'

const Sequelize = require('sequelize');
const db = require('../db');


const Student = db.define('Student', {
  firstName: {
    type : Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
}
});

Student.beforeCreate((student) => {
  student.firstName[0] = student.firstName[0].toUpperCase();
  student.lastName[0] = student.lastName[0].toUpperCase();
});




module.exports = Student;
