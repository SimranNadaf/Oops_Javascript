let person = {
  fName: "Simran",
  lName: "Nadaf",
  displayInfo: function () {
    return this.fName + " " + this.lName;
  },
};
// 1. Object Literal
console.log(person.fName);
console.log(person.fName);
console.log(person.displayInfo());

//2. Object Constructor
function Name(fname, lname) {
  this.fname = fname;
  this.lName = lname;
}
let p = new Name("Bhakti", "Sawant");

console.log(p.fname);
console.log(p.lName);

// 3. using object.create()  method
let person1 = Object.create(person);

console.log(person1.displayInfo());

// To verify if a property is an object’s Own property, we can use the hasOwnProperty method.
console.log(person.hasOwnProperty("fName"));

// Accessing Object Members
// 1. dot notation
console.log(person.fName);
// 2. [] bracket
console.log(person["fName"]);

person1.age = 21;
person1.nationality = "Indian";
console.log(person1.age);
console.log(person1.nationality);

// Deleting Properties
person.age = 21;
console.log(delete person.age);
console.log(person.age);

console.log(delete person1.age);
console.log(person1.age);
