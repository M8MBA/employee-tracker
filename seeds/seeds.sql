
USE db_employee_tracker;


----- Department Seeds -----

INSERT INTO department (id, name)
VALUES (1, "Accounting");

INSERT INTO department (id, name)
VALUES (2, "Lawyer");

INSERT INTO department (id, name)
VALUES (3, "Engineering");

INSERT INTO department (id, name)
VALUES (4, "Graphic Design");

----- Job_title Seeds -----

INSERT INTO job_title (id, title, salary, department_id)
VALUES (1, "accounting intern", 42000, 1);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (2, "Assistant accountant", 60000, 1);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (3, "accountant", 75000, 1);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (4, "lawyer", 65000, 2);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (5, "it specialist", 70000, 3);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (6, "senior engineer", 100000, 3);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (7, "graphic design lead", 80000, 4);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (8, "regional manager", 52000, 4);

INSERT INTO job_title (id, title, salary, department_id)
VALUES (9, "branch Manager", 105000, 4);

----- Employees Seeds -----

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (4, "anna", "smith", 3, null);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (5, "ben", "simmons", 4, null);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (7, "joe", "smooth", 6, null);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (10, "daniel", "hailey", 9, null);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (3, "fred", "hampton", 2, 4);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (1, "frank", "zappa", 1, 3);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (2, "jimi", "brown", 1, 3);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (6, "jeff", "scott", 5, 7);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (8, "mike", "rogers", 7, 10);

INSERT INTO employee (id, first_name, last_name, job_title_id, manager_id)
VALUES (9, "bones", "jackson", 8, 10);