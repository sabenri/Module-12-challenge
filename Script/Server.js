const inquirer = require ('inquirer');
const {getAllDepartments, getALLRoles, getALLEmployees, addDeparment, addRole, addEmployee, UpdateEmployeeRoles} = require ('./Queries');
const { default: Choices } = require('inquirer/lib/objects/choices');

const mainMenu = async() => {
    const {action} = await inquirer.prompt ([
        {
            type: 'list',
            name: 'Actions',
            massage: "Please select what you would like to do",
            choices: [
                "View employees",
                "Add new employee",
                "Update the employee role",
                "View roles",
                "Add a new role",
                "View departments",
                "Add a new department",

            ],
        },
    ]);

    switch (action) {
        case 'View employess':
            console.table(await getALLEmployees());
            break;

            case 'Add employee':
                const EmployeesData = await inquirer.prompt([
                      {name: 'First_Name', message: "Please enter the employee's first name:"},
                      {name: 'Last_Name', message: "Please enter the employee's last name:"},
                      {name: 'Roles_id', message: "Please enter role ID:"},
                      {name: 'Manager_id', message: "Please enter a manager Id if needed", default: null},
                    ]);
        if (EmployeesData.manager_id =="") EmployeesData.manager_id = null;
        await addEmployee(EmployeesData.First_Name, EmployeesData.Last_Name, EmployeesData.Role_id, EmployeesData.Manager_id);
        console.log("A new employee has been added");
        break;

        case 'Update Employee Roles':
            const updateData = await inquirer.prompt([
                {name: 'Employee_id', message:"Please enter employee id to update:"},
                {name: 'Roles_id', message:"Please enter the new role id"},
            ]);
            await UpdateEmployeeRoles(updateData.Employees_id, updateData.Role_id);
            console.log("Empoyee's role was updated");
            break;
        
        case 'View all Roles':
            console.table(await getALLRoles());
            break;

        case 'Add a new role':
            const RolesData= await inquirer.prompt([
                {name: 'Title', message: "Please enter title for new role:"},
                {name: 'Salary', message: "Please enter the salary for new role"},
                {name: 'Deparment_id', message: "Please enter a department ID"},
            ]);

            await addRole(RolesData.title, RolesData.Salary, RolesData.Deparment_id);
            console.log ("A new role has been added");
            break;

        case 'view all departments':
            console.table(await getAllDepartments());
            break;

        case 'Add a new department':
            const DepartmentsData = await inquirer.prompt([
                {name: 'Name', message: "Enter a name for the department:"},
            ]);
        
        await addDeparment (DepartmentsData.name); 
        console.log ("A new department has been added");
        break;
    }

    mainMenu();
};

mainMenu();
