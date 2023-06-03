const Employee = require('../lib/Employee')

describe('Employee', ()=> {
    it("Should return the id of the new generated employee.", () => {
        const id = 1
        const employee = new Employee("test",id);
        
        expect(employee.id).toEqual(id)
    })
})