const Manager = require('../lib/Manager')

test('test manager input', () => {
    const manager = new Manager('Grey', 1, 'greywhitt@gmail.com', 123)
    console.log(manager)

    expect(manager.getName()).toEqual(expect.any(String))
    expect(manager.getId()).toEqual(expect.any(Number))
    expect(manager.getEmail()).toEqual(expect.any(String))
    expect(manager.getRole()).toEqual('Manager')
    expect(manager.officeNumber).toEqual(expect.any(Number))
})