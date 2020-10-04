const Engineer  = require('../lib/Engineer')

test('Checks that Engineer constructor is correct', () => {
    const engineer = new Engineer ('Gary', 2, 'gary@aol.com', 'Engineer', 'Grey-Whitt')
    
    expect(engineer.getName()).toEqual(expect.any(String))
    expect(engineer.getId()).toEqual(expect.any(Number))
    expect(engineer.getEmail()).toEqual(expect.any(String))
    expect(engineer.getRole()).toEqual(expect.any(String))
    expect(engineer.getGithub()).toEqual(expect.any(String))
})