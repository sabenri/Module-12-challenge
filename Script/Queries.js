const inquirer = require('inquirer');
const{pool} = require('pg');

const client = new pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Employee_db',
    password:'loveyou626',
});

client.connect();

const getAllDepartments = async() => {
    const res = await client.query("SELECT * FROM Departments");
    return res.rows;
};

const getALLRoles = async() => {
    const res = await client.query("SELECT * FROM Role");
    return res.rows;
};

const getALLEmployess = async() => {
    const res = await client.query("SELECT * FROM Employees");
    return res.rows;
};

const addDepartments = async(Names) => {
    await client.query("INSERT INTO Department (Names) VALUES ($1)",[Names]);
}

 const addRoles = async (Title, Salary, Departments_id) => {
    await client.query("INSERT INTO Roles (TItle, Salary, Departments_id) VALUES ($1,$2,$3)",[Title, Salary,Departments_id]);
 };

 const addEmployees = async (First_Name, Last_Name, Roles_id, Manager_id) => {
    await client.query ("INSERT INTO Employees (First_Name, Last_Name, Roles_id, Manger_id) Values ($1, $2, $3, $4)",[First_Name, Last_Name, Roles_id, Manager_id])
};

module.ex = {getAllDepartments, getALLRoles, getALLEmployess, addDepartments, addEmployees, addRoles};