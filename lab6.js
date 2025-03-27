"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 2) Decorator for sealing the class prototype
function sealed(constructor) {
    Object.seal(constructor.prototype);
}
// 3) Decorator for converting method return value to uppercase
function toUpperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
// Class Automobile with decorators
let Automobile = class Automobile {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
};
__decorate([
    toUpperCase,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Automobile.prototype, "getDetails", null);
Automobile = __decorate([
    sealed,
    __metadata("design:paramtypes", [String, String])
], Automobile);
// Test function to verify the code
function testAutomobile() {
    // Create an instance
    const car = new Automobile("Toyota", "Camry");
    // Test the getDetails method with the toUpperCase decorator
    console.log(car.getDetails());
    // Output: "BRAND: TOYOTA, MODEL: CAMRY"
    try {
        // @ts-ignore
        car.newProperty = "test"; // This will fail because the prototype is sealed
        console.log("Property added successfully");
    }
    catch (error) {
        console.log("Cannot add new property: ", error.message);
    }
    // Check if the new property was added
    console.log("newProperty exists:", "newProperty" in car);
}
testAutomobile();
