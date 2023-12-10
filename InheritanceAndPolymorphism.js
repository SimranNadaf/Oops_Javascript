class person{
    constructor(name){
        this.name=name;
    }
    toString(){
        return (`Name of Person ${this.name}`);
    }
}
class student extends person{           // Inheritance
    constructor(name,id){
        super(name);
        this.id=id;
    }
    toString(){                                                           // Polymorphism
        return (`${super.toString()}, Student Id: ${this.id}`);
    }
}

let student1=new student("simran",50);
console.log(student1.toString());


// Exmple of inheritance polymorphism
class firstClass{
    add(){
        console.log("First Class");
    }
}
class secondClass extends firstClass{
    add(){
        console.log("second Class");
    }
}
class thirdClass extends secondClass{
    add(){
        console.log("third Class");
    }
}

let obj1=new firstClass;
let obj2=new secondClass;
let obj3=new thirdClass;

obj1.add();
obj2.add();
obj3.add();