const fs = require("fs")
const inquirer = require("inquirer")
const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const createTeamPage = require("./lib/htmlGen")

const teamArray = []

const addManager = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is the team Managers name? ",
            validate: managerName => {
                if ( managerName ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter a name. ")
                    return false
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the managers ID?",
            validate: managerId => {
                if ( managerId ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an ID.")
                    return false
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "What is the Managers Email? ",
            validate: managerEmail => {
                if (managerEmail) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an Email adress. ")
                    return false
                }
            }
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: "What is your Managers Office Number? ",
            validate: managerOfficeNumber => {
                if ( managerOfficeNumber ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an Office Number. ")
                    return false
                }
            }
        }
    ])
    .then(managerInfo => {
        const { name, id, email, officeNumber } = managerInfo
        const manager = new Manager (name, id, email, officeNumber)
        teamArray.push(manager)
    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is this Employees name? ",
            validate: employeeName => {
                if ( employeeName ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter a name. ")
                    return false
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the Employees ID?",
            validate: employeeId => {
                if ( employeeId ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an ID.")
                    return false
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "What is the Employees Email? ",
            validate: employeeEmail => {
                if ( employeeEmail ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an Email adress. ")
                    return false
                }
            }
        }
    ])
    .then(employeeInfo => {
        const { name, id, email } = employeeInfo
        const employee = new Employee (name, id, email)
        teamArray.push(employee)
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is the Engineers name? ",
            validate: engineerName => {
                if ( engineerName ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter a name. ")
                    return false
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the Engineers ID?",
            validate: engineerId => {
                if ( engineerId ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an ID.")
                    return false
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "What is the Engineers Email? ",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an Email adress. ")
                    return false
                }
            }
        },
        {
            name: 'github',
            type: 'input',
            message: "What is your Engineers GitHub? Plese enter a link or username. ",
            validate: engineerGithub => {
                if ( engineerGithub ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter a GitHub link or username. ")
                    return false
                }
            }
        }
    ])
    .then(engineerInfo => {
        const { name, id, email, github } = engineerInfo
        const engineer = new Engineer (name, id, email, github)
        teamArray.push(engineer)
    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: "What is the Interns name? ",
            validate: internName => {
                if ( internName ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter a name. ")
                    return false
                }
            }
        },
        {
            name: 'id',
            type: 'input',
            message: "What is the Interns ID?",
            validate: internId => {
                if ( internId ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an ID.")
                    return false
                }
            }
        },
        {
            name: 'email',
            type: 'email',
            message: "What is the Interns Email? ",
            validate: internEmail => {
                if (internEmail) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter an Email adress. ")
                    return false
                }
            }
        },
        {
            name: 'school',
            type: 'input',
            message: "What is your Interns school name? ",
            validate: internSchool => {
                if ( internSchool ) {
                    return true
                } else {
                    console.log("Uh Oh! Please enter the schools name. ")
                    return false
                }
            }
        }
    ])
    .then(internInfo => {
        const { name, id, email, school } = internInfo
        const intern = new Intern (name, id, email, school)
        teamArray.push(intern)
    })
}

// create function to create HTML page using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log("Your HTML file has been created. Go to the 'dist' folder to vier.")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(addEngineer)
  .then(addIntern)
  .then(teamArray => {
    return generateHTML(teamArray)
  })
  .then(pageHTML => {
    return writeFile(pageHTML)
  })
  .catch(err => {
 console.log(err)
  })