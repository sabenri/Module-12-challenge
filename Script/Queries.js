const{pool} = require('pg');

const client = new Pool({
    user: 'Sabely',
    host: 'localhost',
    database: 'Employee_db',
    password:'',
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

const addDepartment = async(Names) => {
    await client.query("INSERT INTO Department (Names) VALUES ($1)",[Names]);
}

 const addRole = async (Title, Salary, Departments_id) => {
    await client.query("INSERT INTO Roles (TItle, Salary, Departments_id) VALUES ($1,$2,$3)",[Title, Salary,Departments_id]);
 };

 const addEmployee = async (First_Name, Last_Name, Roles_id, Manager_id) => {
    await client.query ("INSERT INTO Employees (First_Name, Last_Name, Roles_id, Manger_id) Values ($1, $2, $3, $4)",[First_Name, Last_Name, Roles_id, Manager_id])
};

const UpdateEmployeeRoles = async (Employees_id, Roles_id) => {
    await client.query ("UPDATE Employees SET Roles_id = $1 WHERE id = $2", [Roles_id, Employees_id]);
};

module.ex = {getAllDepartments, getALLRoles, getALLEmployess, addDepartments, addEmployees, addRoles};