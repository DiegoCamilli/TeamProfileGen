const fs = require("fs")

const teamPage = function (teamMemberCards) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="./styles.css" rel="stylesheet">
    <title>Team Profile</title>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>My Team</h1>
        </header>
        <main>
            <div class="team-card" id="teamMemberCards">
                ${teamMemberCards}
            </div>
        </main>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`
}

const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Team Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="${manager.email}">${manager.email}</a></p>
                <p class="office-Number">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
}

const createEmployee = function (employee) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Employee</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${employee.id}</p>
                <p class="email">Email: <a href="${employee.email}">${employee.email}</a></p>
            </div>
        </div>
    </div>
    `
}

const createEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

const createIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

generateHTML = (data) => {
    teamCardsArray = []

    for (let i = 0; i < data.length; i++) {
        const employee = data[i]
      
        if (employee.getRole() === "Manager") {
          const managerCard = createManager(employee)
          teamCardsArray.push(managerCard)
        }
      
        if (employee.getRole() === "Employee") {
          const employeeCard = createEmployee(employee)
          teamCardsArray.push(employeeCard)
        }
      
        if (employee.getRole() === "Engineer") {
          const engineerCard = createEngineer(employee)
          teamCardsArray.push(engineerCard)
        }
      
        if (employee.getRole() === "Intern") {
          const internCard = createIntern(employee)
          teamCardsArray.push(internCard)
        }
      }
    
    const teamMemberCards = teamCardsArray.join("")
    const createTeam = teamPage(teamMemberCards)
    return createTeam
}

module.exports = generateHTML