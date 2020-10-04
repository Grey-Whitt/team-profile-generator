const Manager = require('../lib/Manager')
const manager = new Manager('Grey', 1, 'greywhitt@gmail.com', 123)

test('test manager input', () => {
    
    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual('Manager')
    expect(manager.officeNumber).toEqual(expect.any(Number))
})

test('Check that the manager values are correct', () => {

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.role).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number))
})