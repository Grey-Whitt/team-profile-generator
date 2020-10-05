//global variables and imported functions
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const template = require('./src/html-template')
const { managerPrompt, nextQuestions, engineerQuestions, internQuestions } = require('./lib/prompt')
const fs = require('fs')

//array where users team will be stored
let teamMembers = []

//initial function to start the program
const init = () => {
  return managerPrompt()
}

//program starting logic
init()
.then(mData => {

  const manager = new Manager(
    mData.name,
    mData.id,
    mData.email,
    mData.mOffice
  )
  teamMembers.push(manager)
})
.then(() => {
  buildEmployee()
})

//after manager has been assigned, will loop asking for team members until they choose to finish the program
const buildEmployee = () => {

  nextQuestions()
    .then(data => {
      var data = data.nextRole

      //checks if the user wants to end or continue adding team members 
      if (checkEnd(data)) {
        console.log('All questions answered, generating html.')
        endQuest()
      } else if (data === 'Engineer') {
        engineerQuestions()
          .then(engiData => {
            buildEngineer(engiData)
            buildEmployee()
          })
      } else { //intern
        internQuestions()
          .then(internData => {
            buildIntern(internData)
            buildEmployee()
          })
      }
    })
}

//builds a new engineer then sends it to teamMembers array 
const buildEngineer = (data) => {
  const engineer = new Engineer(
    data.name,
    data.id,
    data.email,
    'Engineer',
    data.github
  )
  teamMembers.push(engineer)
}

//builds a new intern then sends it to teamMembers array 
const buildIntern = (data) => {
  const intern = new Intern(
    data.name,
    data.id,
    data.email,
    'Intern',
    data.school
  )
  teamMembers.push(intern)
}

//this is the function used to check if the user has selected to end the program
const checkEnd = (status) => {
  //if user wants to finish their team, move to writing the html file
  if (status === 'Finish My Team') {
    return true;
  } else {
    return false;
  }
}

//once the user chooses to end the program the file will be generated
const endQuest = () => {
  //write file here
  fs.writeFile('./dist/myTeam.html', template(teamMembers), function (err) {
    if (err) throw err;
    console.log('Check the dist folder!');
  });
}




