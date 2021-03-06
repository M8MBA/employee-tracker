const connection = require('../db/connection');
const inquirer = require('inquirer');
require('console.table')

// function to add a job_title 
const addJob_title = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'job_title',
    message: "What job_title do you want to add?",
    validate: addJob_title => {
      if (addJob_title) {
        return true;
      } else {
        console.log('Please enter a job_title');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'salary',
    message: "What is the salary of this job_title?",
    validate: addSalary => {
      if (isNAN(addSalary)) {
        return true;
      } else {
        console.log('Please enter a salary');
        return false;
      }
    }
  }
  ])
    .then(answer => {
      const params = [answer.job_title, answer.salary];

      // grab dept from department table
      const job_titleSql = `SELECT name, id FROM department`;

      connection.promise().query(job_titleSql, (err, data) => {
        if (err) throw err;

        const dept = data.map(({
          name,
          id
        }) => ({
          name: name,
          value: id
        }));

        inquirer.prompt([{
          type: 'list',
          name: 'dept',
          message: "What department is this job_title in?",
          choices: dept
        }])
          .then(deptChoice => {
            const dept = deptChoice.dept;
            params.push(dept);

            const sql = `INSERT INTO job_title (title, salary, department_id)
                        VALUES (?, ?, ?)`;

            connection.query(sql, params, (err, result) => {
              if (err) throw err;
              console.log('Added' + answer.job_title + " to job_titles!");

              showJob_titles();
            });
          });
      });
    });
};


// grab job_titles from job_titles table
const job_titleSql = `SELECT job_title.id, job_title.title FROM job_title`;

// function to delete job_title
const deleteJob_title = () => {
  const job_titleSql = `SELECT * FROM job_title`;

  connection.promise().query(job_titleSql, (err, data) => {
    if (err) throw err;

    const job_title = data.map(({
      title,
      id
    }) => ({
      name: title,
      value: id
    }));

    inquirer.prompt([{
      type: 'list',
      name: 'job_title',
      message: "What job_title do you want to delete?",
      choices: job_title
    }])
      .then(job_titleChoice => {
        const job_title = job_titleChoice.job_title;
        const sql = `DELETE FROM job_title WHERE id = ?`;

        connection.query(sql, job_title, (err, result) => {
          if (err) throw err;
          console.log("Successfully deleted!");

          showJob_titles();
        });
      });
  });
};

module.exports = { deleteJob_title, addJob_title }