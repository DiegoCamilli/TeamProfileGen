const Manager = require("../lib/Manager")

describe('Manager', ()=>
it("Should return the id and officeNumber of the new Manager.", () => {
    const id = 4
    const officeNumber = 1234
    const manager = new Manager("test",id,"email@email.com",officeNumber)
    // going to expect the unique extension from the constructor function. in this case the officeNumber
    expect(manager.id).toEqual(id)
    expect(manager.officeNumber).toEqual(officeNumber)
})
)