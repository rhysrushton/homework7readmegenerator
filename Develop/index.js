const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const gitAPI = require("./utils/gitAPI"); 
const makeRM = require("./utils/makeRM"); 




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


