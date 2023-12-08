// ESC6
class Vehicle{
    constructor(type,color,model){
        this.type=type;
        this.color=color;
        this.model=model;
    }
    getDetails(){
        console.log("Vehicle Type:",this.type,"\n","Color:",this.color,"\n","Model:",this.model);
    }
}

let v1=new Vehicle("4-wheeler","black","BMW123");
v1.getDetails();

// // Defining class in a Traditional Way through object;
function Car(type,color,model){
    this.type=type;
    this.color=color;
    this.model=model;
}
Car.prototype.getDetails= function(){
    return "Car Type:"+this.type+"\n"+"Color:"+this.color+"\n"+"Model:"+this.model;
}

let car1=new Car("7-seater","blue","EDR#$");
console.log(car1.type);
console.log(car1.color);
console.log(car1.model);
console.log(car1.getDetails());
