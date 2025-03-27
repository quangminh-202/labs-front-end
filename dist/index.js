"use strict";
// 2 Стрелочная функция для конкатенации трёх строк
const concatenateThreeStrings = (str1, str2, str3) => {
    return str1 + str2 + str3;
};
console.log(concatenateThreeStrings("Привет, ", "мир ", "TypeScript!"));
// 3
const personName = "Минь";
let age = 25;
const isStudent = true;
const scores = [90, 85, 95];
const userStatus = "active";
let optionalValue = null;
const uniqueId = Symbol("id");
const anyValue = "Может быть чем угодно";
const data = {
    id: 2,
    e1: "Поле 1",
    e2: "Поле 2",
};
const data_json = JSON.stringify(data);
console.log(data_json);
