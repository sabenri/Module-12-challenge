INSERT INTO Departments (names) VALUES
('Customer Service'),
('Marketing'),
('Human resources'),
('Administrative');

INSERT INTO Roles (Title, Salary, Departments_id) VALUES
('Sales Associate', 10000, 1),
('Sales Manager', 15000, 2),
('Media Representative', 15000, 3),
('Senior Media Rep', 20000, 4);

INSERT INTO Employees(Frist_Name, Last_Name, Roles_id, Manager_id) VALUES
('Sabely','Enriquez', 1 , NULL),
('Chris','Smith', 2, NULL),
('Lilly','Davis', 1, NULL),
('Sam','June', 3, NULL),
('Kody', 'Jones', 4, NULL);
