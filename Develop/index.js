const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");


const gitUsername = [ 
  {
  type: "input", 
  name: "githubusername",
  message: "What is your github username?"
  }
];


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
            "....", 
            "....", 
            "...."
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
        {   
        type: "input",
        message: "What is your email?",
        name: "email"       
        },
];

const apiCall = {
  async infoGit(username){
    try{
      const userData = await axios.get("https://api.github.com/users/" + username,{
        authentication:{
          username: "rhysrushton",
          password: "Wittgensteinkilledfrege1815!"
        }
      });
      const{email, avatar_url} = user.data; 
      return {email, avatar_url}; 
    } catch(error){
      return console.log("err")
    }
  }
}

console.log(apiCall)



//Function for generating readme. 
/*
function generatedRM(data){
  return ` 
  # ${.title}
  
  ## Description
  
  ${.Description}
  
  
  ## Table of Contents 
  
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Lisense](#License)
  -[Contribute](#Contribute)
  -[Tests](#Tests)
  -[Questions] (#Questions)
  
  
  ## Installation 
  
  ${.Installation}
  
  ## Usage
  
  ${.usage}
  
  ## License 
  
  ${.lisence}
  
  ## Contribute
  
  ${.contribute}
  
  ## Tests
  
  ${.tests}
  
  ## Questions
  
  ${.questions}
  
  ## Email 
  
  ${. email}
  ## Profile Picture
  
  ${.title}
  ` ; 
  } 
  */ 


/*

getUsername();

async function getUsername() {
  try {
    const { userName } = await inquirer.prompt({
      message: "What is your github Username?",
      name: "username"
    });

    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${movie}&apikey=trilogy`
    );

    console.log(data);
  
  } catch (err) {
    console.log(err);
  }
}
*/ 


