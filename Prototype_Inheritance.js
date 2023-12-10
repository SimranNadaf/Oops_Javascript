// Appoaches
// 1. using __proto__

let animal={
    animalEats:true,
};
let rabbit={
    rabbitJump:true,
};

rabbit.__proto__=animal;
console.log(rabbit.animalEats);
console.log(rabbit.rabbitJump);

console.log(animal.animalEats);
console.log(animal.rabbitJump);

// 2. using Object.setPrototypeOf

let person={
    name:"simran",
};
let student={
    id:10,
};
Object.setPrototypeOf(student,person);
console.log(student.name);
console.log(student.id);

console.log(person.name);
console.log(person.id); 
