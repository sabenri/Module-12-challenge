const{pool} = require('pg');

const client = new Pool({
    user: 'Sabely',
    host: 'localhost',
    database: 'Employee_db',
    password:'',
});

client.connect();

const getAllDepartments = async() => {
    const res = await client.query("SELECT * FROM department");
    return res.rows;
};

