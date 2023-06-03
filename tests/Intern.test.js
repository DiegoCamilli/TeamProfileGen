const Intern = require("../lib/Intern")

describe('Intern', ()=>
it("Should return the id and school of the new Intern.", () => {
    const id = 3
    const school = "UCLA"
    const intern = new Intern("test",id,"email@email.com",school)
    // going to expect the unique extension from the constructor function. in this case School
    expect(intern.id).toEqual(id)
    expect(intern.school).toEqual(school)
})
)