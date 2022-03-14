var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + this.address + this.age;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, address, age, Department) {
        var _this = _super.call(this, name, address, age) || this;
        _this.name = name;
        _this.address = address;
        _this.age = age;
        _this.Department = Department;
        return _this;
    }
    Employee.prototype.getAll = function () {
        console.log(_super.prototype.print.call(this) + this.Department);
    };
    return Employee;
}(Person));
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
