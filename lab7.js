"use strict";
// Vehicle class
class Vehicle {
    constructor(brand, model, owner, vin, registrationNumber) {
        this.brand = brand;
        this.model = model;
        this.owner = owner;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
    }
}
// Automobile class extending Vehicle
class Automobile extends Vehicle {
    constructor(brand, model, owner, vin, registrationNumber, bodyType, carClass) {
        super(brand, model, owner, vin, registrationNumber);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    // Method to return body type and car class (no parameters)
    getBodyAndClassInfo() {
        return `Body Type: ${this.bodyType}, Car Class: ${this.carClass}`;
    }
}
// VehicleStorage class (renamed from Storage)
class VehicleStorage {
    constructor(initialVehicles = []) {
        this.vehicles = [];
        this.vehicles = initialVehicles;
    }
    getAll() {
        return [...this.vehicles];
    }
    sortByModelDescending() {
        return [...this.vehicles].sort((a, b) => b.model.localeCompare(a.model));
    }
    filterByBrand(brand) {
        return this.vehicles.filter(vehicle => vehicle.brand === brand);
    }
}
// Test the implementation
function testVariant2() {
    const vehicles = [
        new Automobile("Toyota", "Camry", "John Doe", "VIN123", "ABC123", "Sedan", "D"),
        new Automobile("Toyota", "RAV4", "Jane Smith", "VIN124", "ABC124", "SUV", "C"),
        new Automobile("Honda", "Civic", "Bob Johnson", "VIN125", "ABC125", "Sedan", "B"),
        new Automobile("Honda", "CR-V", "Alice Brown", "VIN126", "ABC126", "SUV", "C")
    ];
    const storage = new VehicleStorage(vehicles);
    console.log("Sorted by model (Z to A):");
    const sortedVehicles = storage.sortByModelDescending();
    sortedVehicles.forEach(v => console.log(`${v.brand} ${v.model}`));
    console.log("\nFiltered by brand 'Toyota':");
    const toyotaVehicles = storage.filterByBrand("Toyota");
    toyotaVehicles.forEach(v => console.log(`${v.brand} ${v.model}`));
    console.log("\nFiltered by brand 'toyota':");
    const lowercaseToyotaVehicles = storage.filterByBrand("toyota");
    console.log(lowercaseToyotaVehicles.length === 0 ? "No matches (case-sensitive)" : lowercaseToyotaVehicles);
    const car = new Automobile("Toyota", "Camry", "John Doe", "VIN123", "ABC123", "Sedan", "D");
    console.log("\nBody and Class Info:");
    console.log(car.getBodyAndClassInfo()); // No arguments passed
}
testVariant2();
