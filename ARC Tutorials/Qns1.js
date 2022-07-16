
// How to define a class with properties and methods in JavaScript?


class Car {
  constructor(name,model){
     this.name = name
     this.model = model
  }

  start(){
    console.log("My car is ",this.name)
  }


}

 let Jeep = new Car("JEEP","JUV");

 Jeep.start()