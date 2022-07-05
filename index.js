const employee = {
    name: "",
    address: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value ) {
    var empl = employee;
    empl[key] = value;
    return employee

    };

function deleteFromEmployeeByKey(employee, key, ) {
    var emplo = Object.assign({}, emplo);
    delete employee.key;
    return emplo;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    var employ = employee;
    employ[key] = value;
    return employee
}


