const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = () => {
};

const displayAverageSalary = (employeesArray) => {
};

const getRandomEmployee = (employeesArray) => {
};

const displayEmployees = (employeesArray) => {

  const employeeTable = document.querySelector('#employee-table');

  employeeTable.innerHTML = '';

  employeesArray.forEach((currentEmployee) => {
    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  });
};

const trackEmployeeData = () => {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

addEmployeesBtn.addEventListener('click', trackEmployeeData);
