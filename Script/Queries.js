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

