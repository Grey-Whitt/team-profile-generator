const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const { managerPrompt, nextQuestions, engineerQuestions, internQuestions } = require('./lib/prompt')

let teamMembers = []

const init = () => {
  return managerPrompt()
}

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

const buildEmployee = () => {

  nextQuestions()
    .then(data => {
      var data = data.nextRole

      if (checkEnd(data)) {
        console.log('All questions answered, generating html.')
        endQuest()
      } else if (data === 'Engineer') {
        console.log('engineer')
        engineerQuestions()
          .then(engiData => {
            buildEngineer(engiData)
            buildEmployee()
          })
      } else { //intern
        console.log('Intern')
        internQuestions()
          .then(internData => {
            buildIntern(internData)
            buildEmployee()
          })
      }
    })
}

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

const checkEnd = (status) => {
  //if user wants to finish their team, move to writing the html file
  console.log('check end')
  if (status === 'Finish My Team') {
    return true;
  } else {
    return false;
  }
}

const endQuest = () => {
  //write file here
  console.log(teamMembers)
  console.log('end')
}



