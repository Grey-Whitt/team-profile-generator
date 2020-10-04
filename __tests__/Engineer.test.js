const Engineer  = require('../lib/Engineer')
const engineer = new Engineer ('Gary', 2, 'gary@aol.com', 'Engineer', 'Grey-Whitt')

test('Checks that Engineer constructor is correct', () => {
    
    expect(engineer.getName()).toEqual(expect.any(String))
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual(expect.any(String))
    expect(engineer.getGithub()).toEqual(expect.any(String))
})

test('Check that the engineer values are correct', () => {

    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String))
    expect(engineer.role).toEqual(expect.any(String))
    expect(engineer.github).toEqual(expect.any(String))
})