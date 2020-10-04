const Intern = require('../lib/Intern')

test('Check that the intern constructor was built correctly', () => {
    const intern = new Intern('Grey', 1, 'greywhitt@gmail.com', 123, 'westView academy')


    expect(Intern.getName()).toEqual(expect.any(String))
    expect(Intern.getId()).toEqual(expect.any(Number))
    expect(Intern.getEmail()).toEqual(expect.any(String))
    expect(Intern.getRole()).toEqual(expect.any(String))
    expect(Intern.getSchool()).toEqual(expect.any(String))
})