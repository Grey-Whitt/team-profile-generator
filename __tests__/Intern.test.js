const Intern = require('../lib/Intern')
const intern = new Intern('Grey', 1, 'greywhitt@gmail.com', 'intern', 'westView academy')

test('Check that the intern constructor was built correctly', () => {

    expect(intern.getName()).toEqual(expect.any(String))
    expect(intern.getId()).toEqual(expect.any(Number))
    expect(intern.getEmail()).toEqual(expect.any(String))
    expect(intern.getRole()).toEqual(expect.any(String))
    expect(intern.getSchool()).toEqual(expect.any(String))
})

test('Check that the intern values are correct', () => {

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.role).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
})