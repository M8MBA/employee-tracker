# Employee Tracker
  
  ## ![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)  

  ## Description
  ### A command-line application used to manage a company's employee database, using Node.js, Inquirer, and MySQL. 

  ## Table of Contents:
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Questions](#questions)

  ## Installation
  ### You must install the following for this app to function:

  ### You must have Node.js installed on your local machine. You can find installation instructions here: https://nodejs.org/en/ . You will also need to install the command line utility which can be found here: https://www.npmjs.com/package/inquirer or by simply typing: npm install inquirer, on the command line. 
  ### Learn all about Node.js https://nodejs.dev/learn/introduction-to-nodejs

  ### Install Node.js
  ### Install inquirer ( npm i inquirer )
  ### Install Express.js ( npm i express )
  ### Install mysql2 ( npm i mysql2 )   
  ### Install Console Table ( npm i console.table const cTable = require('console.table'); )

  ## Usage
  ### Set up the database and seed the tables using mysql
  ### Using mysql ...
  ### Use the following commands: 
  ### mysql --version (to check version you are running)
  ### mysql -u root -p (run mysql shell in terminal)
  ### CREATE DATABASE nameOfDatabase;
  ### USE nameOfDatabase;  must select the election database so that any tables that are created will be associated with that database.
  ### CREATE TABLE
  ### CREATE TABLE department (
  ### id INT NOT NULL AUTO_INCREMENT,
  ### name VARCHAR(30) NOT NULL,
  ### PRIMARY KEY (id)
  ### );
  ### etc. refer to seeds.sql
  ### To verify that the table was created successfully run command: DESCRIBE nameOfTable
  ### INSERT DATA into tables
  ### INSERT INTO department (id, name)
  ### VALUES (1, "Accounting");
  ### INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
  ### VALUES (1, "frank", "zappa", 1, 3);
  ### Query the table to retrieve all the data by typing the following command:
  ### SELECT * FROM nameOfTable;
  ### Invoke the app by running > node server.js in the command line
  ### Walkthrough Video - https://youtu.be/QnB7sjItOoA

  ## Contributors
  ### inquirer https://www.npmjs.com/package/inquirer
  ### mysql2 https://www.npmjs.com/package/mysql2
  ### console.table https://www.npmjs.com/package/console.table

  ## License MIT  
  ### https://choosealicense.com/licenses/mit/

  ## Tests
  ### Run the following commands in your terminal to test this app:
  ### 

  ## Questions
  ### If you have any questions, please contact me at
  ### Github: https://github.com/m8mba
  ### or
  ### Email: sauce.ix@gmail.com