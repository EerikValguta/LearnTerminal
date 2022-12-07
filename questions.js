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
        console.log(`You are ${answers.age} years old`);
        console.log(`Your name is ${answers.name} `);
        console.log(`${answers.confirm} `);
        console.log(`I have ${answers.list} sibilings`);
        console.log(`My favorite color is ${answers.raw} `);
        console.log(`${answers.expand}, i like soda`);
        console.log(`You are ${answers.checkbox} handed `);
        console.log(`Your password is ${answers.pass} `);
        console.log(`You wrote ${answers.editor} `);


});
