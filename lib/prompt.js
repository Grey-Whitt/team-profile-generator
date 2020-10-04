const inquirer = require('inquirer');
const { choices } = require('yargs');


const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: managerName => {
                if (managerName) {
                return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your ID number (required)',
            validate: mId => {
                if (mId) {
                    return true;
                } else {
                    console.log('Please enter a number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (required)',
            validate: mEmail => {
                if (mEmail) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'mOffice',
            message: 'Enter your office number (required)',
            validate: mOffice => {
                if (mOffice) {
                    return true;
                } else {
                    console.log('Please enter a number!')
                    return false;
                }
            }
        }


    ])
}

const nextQuestions = () => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextRole',
            message: 'Select the next role, or finish and generate your teams profile',
            choices: ['Engineer', 'Intern', 'Finish My Team']
        }
    ])
}



module.exports = {
    managerPrompt,
    nextQuestions
}



