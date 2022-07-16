//How to implement class inheritance in JavaScript?

 class Parent {
    constructor(name){
        this.name = name
    }

    start(){
        console.log(this.name)
    }
 }

 class Child extends Parent{
    start(){
        super.start()
    }
 }

 let Enc = new Child("KJKJ");
 Enc.start()