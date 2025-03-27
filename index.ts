// 2 Стрелочная функция для конкатенации трёх строк
const concatenateThreeStrings = (str1: string, str2: string, str3: string): string => {
  return str1 + str2 + str3;
};
console.log(concatenateThreeStrings("Привет, ", "мир ", "TypeScript!"));

// 3
const personName: string = "Минь"; 
let age: number = 25;
const isStudent: boolean = true;
const scores: number[] = [90, 85, 95];
const userStatus: "active" | "inactive" = "active";
let optionalValue: string | null = null;
const uniqueId: symbol = Symbol("id");
const anyValue: any = "Может быть чем угодно"; 

// 4
interface Entity {
  id: number;
}
interface ToJsonStringify extends Entity {
  e1: string;
  e2: string;
}
const data: ToJsonStringify = {
  id: 2,
  e1: "Поле 1",
  e2: "Поле 2",
};
const data_json = JSON.stringify(data);
console.log(data_json);