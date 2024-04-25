import inquirer from "inquirer";
let todos:string[]= ["alwaz"]
async function createtodo (todos:string[]) {
    do{
    let welcome = console.log("wellcome to the todolist app!")
    let operation = await inquirer.prompt({
        type:"list",
        name:"operator",
        message:"what you want to do?",
        choices:["Add","view","update","Delete"]
    })
    if(operation.operator==="Add"){
        let add = await inquirer.prompt({
            type:"input",
            name:"additems",
            message:"please add items"
        })
        todos.push(add.additems)
        console.log(todos);
    }
    if(operation.operator==="view"){
        console.log(todos);
    }

    if(operation.operator==="update"){
        let update = await inquirer.prompt({
        type:"list",
        name:"updateitems",
        message:"select item to update",
        choices:todos 
    }
)
let update2 = await inquirer.prompt({
    type:"input",
    name:"updateitems2",
    message:"update item"  
})
let newtodos = todos.filter(val=>val !=update.updateitems)
todos=[...newtodos,update2.updateitems2]
} 
if (operation.operator === "Delete"){
    let remove = await inquirer.prompt({
        type:"list",
        name:"remove items",
        message:"select item to delete",
        choices:todos 
} 
    )   
}
}
while(true) 
}
createtodo(todos)




