const fs = require("fs")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const htmlGen = require("./lib/htmlGen")

const teamArray = []

const addManager = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the team Manager's name? ",
        validate: (managerName) => {
          if (managerName) {
            return true
          } else {
            console.log("Uh Oh! Please enter a name. ")
            return false
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is the manager's ID?",
        validate: (managerId) => {
          if (managerId) {
            return true
          } else {
            console.log("Uh Oh! Please enter an ID.")
            return false
          }
        },
      },
      {
        name: "email",
        type: "email",
        message: "What is the Manager's Email? ",
        validate: (managerEmail) => {
          if (managerEmail) {
            return true
          } else {
            console.log("Uh Oh! Please enter an Email address. ")
            return false
          }
        },
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is your Manager's Office Number? ",
        validate: (managerOfficeNumber) => {
          if (managerOfficeNumber) {
            return true
          } else {
            console.log("Uh Oh! Please enter an Office Number. ")
            return false
          }
        },
      },
    ])
    .then((managerInfo) => {
      const { name, id, email, officeNumber } = managerInfo
      const manager = new Manager(name, id, email, officeNumber)
      teamArray.push(manager)
    })
}

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is this Employee's name? ",
        validate: (employeeName) => {
          if (employeeName) {
            return true
          } else {
            console.log("Uh Oh! Please enter a name. ")
            return false
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is the Employee's ID?",
        validate: (employeeId) => {
          if (employeeId) {
            return true
          } else {
            console.log("Uh Oh! Please enter an ID.")
            return false
          }
        },
      },
      {
        name: "email",
        type: "email",
        message: "What is the Employee's Email? ",
        validate: (employeeEmail) => {
          if (employeeEmail) {
            return true
          } else {
            console.log("Uh Oh! Please enter an Email address. ")
            return false
          }
        },
      },
    ])
    .then((employeeInfo) => {
      const { name, id, email } = employeeInfo
      const employee = new Employee(name, id, email)
      teamArray.push(employee)
    })
}

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the Engineer's name? ",
        validate: (engineerName) => {
          if (engineerName) {
            return true
          } else {
            console.log("Uh Oh! Please enter a name. ")
            return false
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is the Engineer's ID?",
        validate: (engineerId) => {
          if (engineerId) {
            return true
          } else {
            console.log("Uh Oh! Please enter an ID.")
            return false
          }
        },
      },
      {
        name: "email",
        type: "email",
        message: "What is the Engineer's Email? ",
        validate: (engineerEmail) => {
          if (engineerEmail) {
            return true
          } else {
            console.log("Uh Oh! Please enter an Email address. ")
            return false
          }
        },
      },
      {
        name: "github",
        type: "input",
        message: "What is your Engineer's GitHub username? ",
        validate: (engineerGithub) => {
          if (engineerGithub) {
            return true
          } else {
            console.log("Uh Oh! Please enter a username. ")
            return false
          }
        },
      },
    ])
    .then((engineerInfo) => {
      const { name, id, email, github } = engineerInfo
      const engineer = new Engineer(name, id, email, github)
      teamArray.push(engineer)
    })
}

const addIntern = () => {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the Intern's name? ",
        validate: (internName) => {
          if (internName) {
            return true
          } else {
            console.log("Uh Oh! Please enter a name. ")
            return false
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is the Intern's ID?",
        validate: (internId) => {
          if (internId) {
            return true
          } else {
            console.log("Uh Oh! Please enter an ID.")
            return false
          }
        },
      },
      {
        name: "email",
        type: "email",
        message: "What is the Intern's Email? ",
        validate: (internEmail) => {
          if (internEmail) {
            return true
          } else {
            console.log("Uh Oh! Please enter an Email address. ")
            return false
          }
        },
      },
      {
        name: "school",
        type: "input",
        message: "What is your Intern's school name? ",
        validate: (internSchool) => {
          if (internSchool) {
            return true
          } else {
            console.log("Uh Oh! Please enter the school's name. ")
            return false
          }
        },
      },
    ])
    .then((internInfo) => {
      const { name, id, email, school } = internInfo
      const intern = new Intern(name, id, email, school)
      teamArray.push(intern)
    })
}

const generateHTML = () => {
  const html = htmlGen(teamArray)
  writeFile(html)
  return
}

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err)
      return
    } else {
      console.log("Your HTML file has been created. Go to the 'dist' folder to view.")
    }
  })
}

addManager()
  .then(addEmployee)
  .then(addEngineer)
  .then(addIntern)
  .then(generateHTML)
  .catch((err) => {
    console.log(err)
  })