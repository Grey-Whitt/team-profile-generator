const Employee  = require('../lib/Employee')
const employee = new Employee ('Gary', 2, 'gary@aol.com', 'Engineer')

test('Check that employee constructor is correct', () => {
    

    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toEqual(expect.any(String))
    expect(employee.getRole()).toEqual(expect.any(String))
})

test('Check that the employee values are correct', () => {

    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String))
    expect(employee.role).toEqual(expect.any(String))
})