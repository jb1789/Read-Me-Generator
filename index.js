var inquirer = require('inquirer');
var fs = require('fs');
inquirer.prompt([
  {
    type:'input',
    name: 'Title',
    message: 'What is the tite of your project?' 
 },
 {
     type:'input',
     name: 'Description',
     message: 'Please give a brief description!' 
  },
  {
     type:'input',
     name: 'tableOfContents',
     message: 'Please give Table of Contents to your project.' 
  },
  {
     type:'input',
     name: 'Installation',
     message: 'Please explain installation.' 
  },
  {
     type:'input',
     name: 'Usage',
     message: 'Please explain usage.' 
  },
  {
     type:'input',
     name: 'License',
     message: 'Please explain licensing.'
  },
  {
     type:'input',
     name: 'Contributing',
     message: 'Please list your contributors and/or contibuting factors.'
  },
  {
     type:'input',
     name: 'Tests',
     message: 'Please explain testing.' 
  },
  {
     type:'input',
     name: 'Tests',
     message: 'Please explain testing.' 
  },
  {
     type:'input',
     name: 'Tests',
     message: 'Please explain testing.' 
  },
  {
     type:'input',
     name: 'Questions',
     message: 'Any Questions?' 
  },
  {
     type:'input',
     name: 'Questions',
     message: 'Any Questions?' 
  },
  ])
  .then(function(answers)  {
      console.log( answers); 
      var readMeString = `
      # Title ${answers.Title}
      # Description ${answers.Description}
      # Table of Contents ${answers.tableOfContents}
      # Installation ${answers.Installation}
      # Usage ${answers.Usage}
      # Usage ${answers.Usage}
      `

      https://img.shields.io/badge/License-MJ-red
      
      fs.writeFile('readMe.md',readMeString , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
