import inquirer from 'inquirer';
inquirer
    .prompt([
        {type: 'number', name: 'age', message: 'How old are you?'},
        {type: 'input', name: 'name', message: 'What is your name?'},
        {type: 'confirm', name: 'confirm', message: 'Are you at least 18 years old?'},
        {type: 'list', name: 'list', message:'How many sibilings do you have?', choices:["0", "1", "2"]},
        {type: 'rawlist', name: 'raw', message: 'What is your favorite color?', choices:["blue", "black", "red", "white", "orange", "yellow", "green", "purple"]},
        {type: 'expand', name: 'expand', message: 'Do you like soda?', choices:[{key:"y", value:"Yes"}, {key:"n", value:"No"}]},
        {type: 'checkbox', name: 'checkbox', message: 'Are you right or left handed?', choices:["Right", "Left"]},
        {type: 'password', name: 'pass', message: 'Insert your password'},
        {type: 'editor', name: 'editor', message: 'Can you write me something'},
    ])
    .then((answers) => {
        console.log(`I am ${answers.age} years old`);
        console.log(`My name is ${answers.name} `);
        console.log(`${answers.confirm} `);
        console.log(`I am working ${answers.list} jobs`);
        console.log(`My favorite color is ${answers.raw} `);
        console.log(`${answers.expand}, i like dogs`);
        console.log(`My day is ${answers.checkbox} `);
        console.log(`My password is ${answers.pass} `);
        console.log(`My funny word is ${answers.editor} `);


});
