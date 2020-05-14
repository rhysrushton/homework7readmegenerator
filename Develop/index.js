const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

//Creates the gitUsername constant. 
//This will be used when we use axios to query the github api. 
//In the async function ' create'  use inquirer to trigger this question. 
const gitUsername = [ 
  {
  type: "input", 
  name: "githubusername",
  message: "What is your github username?"
  }
];


//These are the README.md questions
const readmeQuestions = [
        {
        type: "input",
        message: "What is the title of your project?",
        name: "Title",       
        },
        {
        type: "input",
        message: "Provide a Description for your project",
        name: "Description"       
        },
        {
        type: "input",
        message: "What is the installation protocol for this project?",
        name: "Installation"       
        },
        {
        type: "input",
        message: "What usage infromation would you like to provide?",
        name: "usage"       
        },
        {
        type: "list",
        message: "What is the liesence for your application?",
        name: "lisence" , 
        choices: [
            "MIT", 
            "Apache 2.0", 
            "BD-3", 
            "BD-2",
            "Mozilla Public License 2.0", 
            "Common Development and Distribution License",
            "Creative Commons License",
            "Eclipse Public License"
          ]      
        },
        {
        type: "input",
        message: "What are the contribution reuirments for this project?",
        name: "contribute"       
        },
        {
        type: "input",
        message: "What tests have you run with this application?",
        name: "tests"       
        },
        {
        type: "input",
        message: "What would you like to put in the questions section?",
        name: "questions"       
        },

];

//This async function creates the README
//We get the info from makeRM
//Takes data from makeRM and then creates the README 
async function createReadMe(fileName, data){
  var readMe = makeRM(data); 
  fs.writeFile(fileName, readMe, error => {
    if(error) throw error;
    console.log("ReadMe Created")
  })
}

//This is the key function.
//It is triggered below. 
//It calls other functions such as createReadME. It also starts the inquirer prompt for the readme questions. 
async function create(){
  try{
    var user = await inquirer.prompt(gitUsername);
    var userData = await gitAPI.user(user.githubusername);
    if (!userData){
      throw "Error"
    }
    const { email, avatar_url} = userData;
    console.log("success");
    const readmeData = await inquirer.prompt(readmeQuestions);
    readmeData.username = user.githubusername;
    readmeData.avatar_url = avatar_url;
    if(email === null) {
      readmeData.email = "Private";
    } else {
      readmeData.email = `<p> ${email}</p>`;
    }
    createReadMe("README.md", readmeData);
  } catch (error){
    console.log("error")
  }
}

create(); 

//Readme template, put in backticks and then filled in. 
function makeRM(data){
  return `
  # ${data.Title}
  ## Description
  ${data.Desciption}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  ## Installation 
  ${data.Installation}
  ## Usage 
  ${data.usage}
  ## Licence 
  ${data.lisence}
  ## Contribute
  ${data.contribute}
  ## Tests
  ${data.tests} 
  ## Questions
  ${data.questions}

  ## User Profile 
  Gihthub profile: <a href="https://github.com/${data.username}">${data.username}</a>   <img alt="GitHub followers" src="https://img.shields.io/github/followers/${data.username}"><br/>Email: ${data.email}
  `
}

//This is the gitapi call. 
//You have to enter your password and username below to authenticate. 
const gitAPI = {
  async user(username){
      try{
          var userInfo = await axios.get("https://api.github.com/users/" + username, { authentication: {
              userName: "InsertUsername", 
              pWord: "InsertPassword"
      }
          });
          var {email, avatar_url} = userInfo.data; 
          return {email, avatar_url}; 

      }  catch(err) {
          throw new Error(`Something failed`);
        } finally {
          console.log(`All Tasks is Done`);
        }
  }
}



