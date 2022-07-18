const employee = {
    name: "",
    address: "",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmp = {...employee};
    newEmp[key] = value;
    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value ) {
    let empl = employee;
    empl[key] = value;
    return employee

    };

function deleteFromEmployeeByKey(employee ) {
    let emplo = Object.assign({}, emplo);
    delete employee.key;
    return emplo;

}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    let employ = employee;
    employ[key] = value;
    return employee
}


