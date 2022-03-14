class Person
{
  constructor(public name: string, public address:string, 
              public age : number)
  {
  }
  print(): string
  {
   return this.name + this.address + this.age;
  }
}

class Employee extends Person
{
   constructor( name: string,  address:string, 
       age : number, public Department: string)
   {
      super(name, address,age);
   }

   getAll(): void{
      console.log(super.print() + this.Department );
   }

}

var e1 = new Employee("mahesh", "pune", 41, "training");
e1.getAll();

// var p1 = new Person();
// var p1 = new Person("Rahul", "Banglore", 49);
// p1.print();




// class Person
// {
//   private name : string ;
//   private address : string ;
//   private age : number ;

// //   constructor()
// //   {
// //       this.name = "Sachin";
// //       this.address = "Mumbai";
// //       this.age= 50;
// //   }

//   constructor(name: string, address:string, age : number)
//   {
//       this.name = name;
//       this.address = address;
//       this.age= age;
//   }
//   print()
//   {
//    console.log(this.name);
//    console.log(this.age);
//    console.log(this.address);
//   }
// }

// // var p1 = new Person();
// var p1 = new Person("Rahul", "Banglore", 49);
// p1.print();



// class Person
// {
//    name : string;
//    address : string;
//    age : number;
// }

// var p1 = new Person();
// p1.name = "Mahesh";
// p1.age = 41;
// p1.address = "pune";

// console.log(p1.name);
// console.log(p1.age);
// console.log(p1.address);