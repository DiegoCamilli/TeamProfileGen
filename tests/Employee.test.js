const Employee = require('../lib/Employee')

describe('Employee', ()=> {
    it("Should return the id, name, and email of the new generated employee.", () => {
        const name = "test"
        const id = 1
        const email = "test@test.com"
        const employee = new Employee("test",id,"test@test.com")
        
        expect(employee.id).toEqual(id)
        expect(employee.name).toEqual(name)
        expect(employee.email).toEqual(email)
    })
})