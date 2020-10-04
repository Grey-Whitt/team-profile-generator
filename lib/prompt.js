const inquirer = require('inquirer');

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name? (Required)",
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
            message: "Enter your team manager's ID number (required)",
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
            message: "Enter your team manager's email address (required)",
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
            message: "Enter your team manager's office number (required)",
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

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name? (Required)",
            validate: name => {
                if (name) {
                return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter your engineer's ID number (required)",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter a number!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your engineer's email address (required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "github",
            message: "Enter your engineer's GitHub username (required)",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log("Please enter a username!")
                    return false;
                }
            }
        }
    ])
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name? (Required)",
            validate: name => {
                if (name) {
                return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter your intern's ID number (required)",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter a number!")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your intern's email address (required)",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "school",
            message: "Enter your intern's school (required)",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log("Please enter a school!")
                    return false;
                }
            }
        }
    ])
}


module.exports = {
    managerPrompt,
    nextQuestions,
    engineerQuestions,
    internQuestions
}



