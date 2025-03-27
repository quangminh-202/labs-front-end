"use strict";
// 1.1) Одномерные массивы: Find min in array
const findMinNumber = (arr) => {
    if (arr.length === 0)
        throw new Error("Array empty");
    return Math.min(...arr);
};
console.log(findMinNumber([5.5, 2.3, 9.1, -1.2, 0.8])); // Output: -1.2
// 1.2) Двумерные массивы: Count 0 in matrix
const countZerosInMatrix = (matrix) => {
    let count = 0;
    for (const row of matrix) {
        for (const num of row) {
            if (num === 0)
                count++;
        }
    }
    return count;
};
console.log(countZerosInMatrix([[1, 0, 3], [4, 0, 0], [7, 8, 9]])); // Output: 3
const concatenateTupleStrings = (tuple) => {
    return tuple[0] + tuple[1] + tuple[2];
};
const myTuple = ["Hello ", "Minh ", "Quang"];
console.log(concatenateTupleStrings(myTuple));
// 3) Enum: Enum cho các loại máy in
var PrinterType;
(function (PrinterType) {
    PrinterType["\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439";
    PrinterType["\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439";
    PrinterType["\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439"] = "\u041C\u0430\u0442\u0440\u0438\u0447\u043D\u044B\u0439";
})(PrinterType || (PrinterType = {}));
console.log(PrinterType.Лазерный); // Output: "Лазерный"
// 4) Generics
class Pet {
    constructor() {
        this.name = "Some pet";
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = "Barsik";
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const printPetInfo = (pet) => {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Speak: ${pet.speak()}`);
};
const myDog = new Dog();
const myCat = new Cat();
printPetInfo(myDog); // Output: Name: Some pet, Age: 8, Speak: Yaw-Gaw!
printPetInfo(myCat); // Output: Name: Barsik, Age: 2, Speak: Miyau!
const myPrinter = {
    type: PrinterType.Лазерный,
    brand: "HP",
    isColor: true,
};
console.log(JSON.stringify(myPrinter)); // Output: {"type":"Лазерный","brand":"HP","isColor":true}
