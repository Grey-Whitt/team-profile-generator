//this loops through the array of team members and sends the data to the corresponding function to be built
//then returns the template with all data in its correct place
const buildCards = (team) => {
  const length = team.length
  
  for (i = 0; i < length; i++) {
    const role = team[i].role
    if (role === 'Manager') {
      managerCard(team[i])
    } else if (role === 'Engineer') {
      engineerCard(team[i])
    } else {
      internCard(team[i])
    }
  }

  return template(teamCards)
}

//this is where the cards get stored after they have been built
const teamCards = []

//cards get built then sent  pushed to array
//builds manager card
const managerCard = (manager) => {
    
    let mCard = `
    <div class="card m-3 shadow border border-dark bg-primary" style="width: 18rem;">
                <div class="card-body text-light">
                  <h5 class="card-title">${manager.name}</h5>
                  <p class="card-text">${manager.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${manager.email}">${manager.email}</a></li>
                  <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
    `

    teamCards.push(mCard)
}

//builds engineer card
const engineerCard = (engineer) => {
    
  let eCard = `
  <div class="card m-3 shadow border border-dark bg-primary" style="width: 18rem;">
  <div class="card-body text-light">
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.role}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">GitHub: <a href='https://github.com/${engineer.github}' target="_blank">${engineer.github}</a></li>
  </ul>
  </div>
  `
  teamCards.push(eCard)

}

//builds intern card
const internCard = (intern) => {
    
  let iCard = `
  <div class="card m-3 shadow border border-dark bg-primary" style="width: 18rem;">
              <div class="card-body text-light">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">${intern.role}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</a></li>
              </ul>
          </div>
    `
  teamCards.push(iCard)
}

//this is the main html template where the cards get inserted
const template = (yourTeam) => {

  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body class="bg-secondary">
      <nav class="mb-5 justify-content-center navbar navbar-dark bg-dark shadow">
          <span class="navbar-brand mb-0 h1"><h1>Your Team</h1></span>
      </nav>

      <div class="container">
          <div class="row justify-content-center">
              
              ${yourTeam.join('')}

          </div>
      </div>
  </body>
  </html>`
}

module.exports = buildCards