interface Person{
    name:string;
    age:number;
    greet():string|Number;
}

class Student implements Person{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }




    greet(): string | Number {
        throw new Error("Method not implemented.");
    }
    
}