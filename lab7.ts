//Variance 2
// Interface for Vehicle
interface IVehicle {
    brand: string;
    model: string;
    owner: string;
    vin: string;
    registrationNumber: string;
}

// Interface for VehicleStorage (renamed from IStorage)
interface IVehicleStorage {
    getAll(): IVehicle[];
    sortByModelDescending(): IVehicle[];
    filterByBrand(brand: string): IVehicle[];
}

// Vehicle class
class Vehicle implements IVehicle {
    constructor(
        public brand: string,
        public model: string,
        public owner: string,
        public vin: string,
        public registrationNumber: string
    ) {}
}

// Automobile class extending Vehicle
class Automobile extends Vehicle {
    constructor(
        brand: string,
        model: string,
        owner: string,
        vin: string,
        registrationNumber: string,
        private bodyType: string,
        private carClass: string
    ) {
        super(brand, model, owner, vin, registrationNumber);
    }

    // Method to return body type and car class (no parameters)
    getBodyAndClassInfo(): string {
        return `Body Type: ${this.bodyType}, Car Class: ${this.carClass}`;
    }
}

// VehicleStorage class (renamed from Storage)
class VehicleStorage implements IVehicleStorage {
    private vehicles: IVehicle[] = [];

    constructor(initialVehicles: IVehicle[] = []) {
        this.vehicles = initialVehicles;
    }

    getAll(): IVehicle[] {
        return [...this.vehicles];
    }

    sortByModelDescending(): IVehicle[] {
        return [...this.vehicles].sort((a, b) => b.model.localeCompare(a.model));
    }

    filterByBrand(brand: string): IVehicle[] {
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