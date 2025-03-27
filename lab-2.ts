// 1.1) Одномерные массивы: Find min in array
const findMinNumber = (arr: number[]): number => {
    if (arr.length === 0) throw new Error("Array empty");
    return Math.min(...arr);
};
console.log(findMinNumber([5.5, 2.3, 9.1, -1.2, 0.8])); // Output: -1.2

// 1.2) Двумерные массивы: Count 0 in matrix
const countZerosInMatrix = (matrix: number[][]): number => {
    let count = 0;
    for (const row of matrix) {
        for (const num of row) {
            if (num === 0) count++;
        }
    }
    return count;
};
console.log(countZerosInMatrix([[1, 0, 3], [4, 0, 0], [7, 8, 9]])); // Output: 3

// 2) Tuple
type StringTuple = [string, string, string];
const concatenateTupleStrings = (tuple: StringTuple): string => {
    return tuple[0] + tuple[1] + tuple[2];
};
const myTuple: StringTuple = ["Hello ", "Minh ", "Quang"];
console.log(concatenateTupleStrings(myTuple)); 

// 3) Enum: Enum cho các loại máy in
enum PrinterType {
    Струйный = "Струйный",
    Лазерный = "Лазерный", 
    Матричный = "Матричный",
}
console.log(PrinterType.Лазерный); // Output: "Лазерный"

// 4) Generics
class Pet {
    name: string = "Some pet";
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    name = "Barsik";
    age = 2;
    speak() {
        return "Miyau!";
    }
}
const printPetInfo = <T extends Pet>(pet: T): void => {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};
const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog); // Output: Name: Some pet, Age: 8, Speak: Yaw-Gaw!
printPetInfo(myCat); // Output: Name: Barsik, Age: 2, Speak: Miyau!

// 5) Кастомные типы
type Printer = {
    type: PrinterType;
    brand: string;
    isColor: boolean;
};
const myPrinter: Printer = {
    type: PrinterType.Лазерный,
    brand: "HP",
    isColor: true,
};
console.log(JSON.stringify(myPrinter)); // Output: {"type":"Лазерный","brand":"HP","isColor":true}