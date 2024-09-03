DROP DATABASE IF EXISTS Employee_db;

CREATE DATABASE Employee_db;

CREATE TABLE Deparments (
    id SERIAL PRIMARY KEY, 
    names VARCHAR(30) UNIQUE NOT NULL
); 

CREATE TABLE Roles (
    id SERIAL PRIMARY KEY,
    Title VARCHAR(30) UNIQUE NOT NULL,
    Salary DECIMAL NOT NULL,
    Deparments_id INTEGER NOT NULL,
    FOREIGN KEY (Deparments_id) REFERENCES Departments(id)
);

CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    Frist_Name VARCHAR (30) NOT NULL,
    Last_Name VARCHAR (30) Not NULL,
    Roles_id INTEGER NOT NULL,
    FOREIGN key (Roles_id) REFERENCES Roles(id),
    Manager_id INTEGER DEFAULT NULL,
    FOREIGN KEY (Manager_id) REFERENCES Employees(id)
);