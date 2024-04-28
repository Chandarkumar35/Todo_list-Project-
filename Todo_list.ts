import inquirer from 'inquirer';

let todo_list: string[] = [];
let while_condition: boolean = true;

while(while_condition === true){

// ............... option.........................
let option = await inquirer.prompt([{
    type: 'list',
    name: 'user_option',
    message: 'select option',
    choices: ['Add', 'Remove']
}])

// ............... add.........................

if(option.user_option === "Add"){
    let ans = await inquirer.prompt([{
type: 'input',
name: 'usr_ans',
message: 'write something to add in this task list'

    }])
    if(ans.usr_ans !== ''){
        todo_list.push(ans.usr_ans);
        console.log(todo_list);

    } else{
        console.log('plz write atlest one word');
    }

}
// ...............remove.........................

else if(option.user_option === "Remove"){
    let removechoice = await inquirer.prompt([{
type: 'list',
name: 'remove',
message: 'select item to remove',
choices: todo_list

    }]);
    let index_to_remove =todo_list.indexOf(removechoice.remove);
    if(index_to_remove >= 0){
        todo_list.splice(removechoice.remove, 1);
        console.log('you removed : ', removechoice.remove);
        console.log(todo_list);
    }
}
// ...............comformation.........................

let user_ans = await inquirer.prompt([{
    type: 'confirm',
    name: 'selection',
    message: 'do you want to contine ?',
    default: true
}])
if(user_ans.selection === false){
    while_condition = false;
}
}
console.log(`thank you for using todo list`);