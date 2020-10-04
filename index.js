const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const {managerPrompt, nextQuestions} = require('./lib/prompt')

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
        mData.role,
        mData.mOffice
    )
    teamMembers.push(manager)
  })
  .then( () => {
    return nextQuestions()
  })
  .then(nextRole =>{
      if (nextRole === 'Finish My Team'){
        return
      } else {

      }
  })
 
  
  