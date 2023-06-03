const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
  it("Should return the id and github of the newly generated engineer.", () => {
    const id = 2
    const github = "My github"
    const engineer = new Engineer("test", id, "test@test.com", github)
    // expecting the unique extension from the constructor function. in this case github
    expect(engineer.id).toEqual(id)
    expect(engineer.github).toEqual(github)
  })
})