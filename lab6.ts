// 2) Decorator for sealing the class prototype
function sealed(constructor: Function) {
    Object.seal(constructor.prototype);
}

// 3) Decorator for converting method return value to uppercase
function toUpperCase(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}

// Class Automobile with decorators
@sealed
class Automobile {
    private brand: string;
    private model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    @toUpperCase
    getDetails(): string {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }
}

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
    } catch (error) {
        console.log("Cannot add new property: ", (error as Error).message);
    }

    // Check if the new property was added
    console.log("newProperty exists:", "newProperty" in car);
}

testAutomobile();