interface Person {
    firstName: string;
    lastName: string;
}

export let  greeter=(person: Person) =>{
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user))