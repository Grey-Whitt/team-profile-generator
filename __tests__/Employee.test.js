const Employee  = require('../lib/Employee')

test('Check that employee constructor is correct', () => {
    const employee = new Employee ('Gary', 2, 'gary@aol.com', 'Engineer')

    expect(employee.getName()).toEqual(expect.any(String))
    expect(employee.getId()).toEqual(expect.any(Number))
    expect(employee.getEmail()).toEqual(expect.any(String))
    expect(employee.getRole()).toEqual(expect.any(String))
})