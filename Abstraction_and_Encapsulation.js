// Encapsulation Example
class person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    add_Address(add){
        this.add=add;
    }
    getDetails(){
        console.log("First Name is",this.fname,"Last name is",this.lname,"and Address is",this.add);
    }
}

let person1=new person("Simran","Nadaf");
person1.add_Address("Sangameshwer");
person1.getDetails();


// Abstraction Example: there is no access modifier
function Student(rollno,subject,marks){
    this.rollno=rollno;
    this.subject=subject;
    this.marks=marks;

    let getDetails_noAccess=function(){
        console.log("My RollNo. is",this.rollno,"\n","Subject:",this.subject,"\n","Marks:",this.marks);
    }

    this.getDetails_access=function(){
        console.log("My RollNo. is",this.rollno,"\n","Subject:",this.subject,"\n","Marks:",this.marks);
    }
}

let student1=new Student(50,'BDA',75);
student1.getDetails_access();