import inquirer from 'inquirer';
inquirer
    .prompt([ 
        {typer:'input',name:'age',message:'How old are you?'},
        {typer:'input',name:'height',message:'How tall are you?'},
        {typer:'input',name:'music',message:'What music do you like?'},
        {typer:'input',name:'nr',message:'What is your number?'},
        {typer:'input',name:'home',message:'Where do you live?'},
        {typer:'input',name:'bug',message:'What color is your bugatti?'},
    ])
    .then((answers)=>{
        console.log(`You are ${answers.age}years old`);
        console.log(`You are  ${answers.height} cm tall`);
        console.log(`I like ${answers.music} too`);
        console.log(`Your number is ${answers.nr} correct?`);
        console.log(`So you live in ${answers.home} right?`);
        console.log(`So you own a bugatti ${answers.bug} correct?`);
    })
