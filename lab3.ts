// 1) Реализация интерфейсов и классов

enum DocType {
    Паспорт = "Паспорт",
    ВодительскоеУдостоверение = "Водительское удостоверение",
    Загранпаспорт = "Загранпаспорт"
}

interface Owner {
    readonly surname: string;
    readonly name: string;
    readonly patronymic: string;
    readonly birthDate: Date;
    readonly documentType: DocType;
    readonly documentSeries: string;
    readonly documentNumber: string;
    printInfo(): void;
}

class Person implements Owner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: DocType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(surname: string, name: string, patronymic: string, birthDate: Date, 
                documentType: DocType, documentSeries: string, documentNumber: string) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get surname() { return this._surname; }
    get name() { return this._name; }
    get patronymic() { return this._patronymic; }
    get birthDate() { return this._birthDate; }
    get documentType() { return this._documentType; }
    get documentSeries() { return this._documentSeries; }
    get documentNumber() { return this._documentNumber; }

    set surname(value: string) { this._surname = value; }
    set name(value: string) { this._name = value; }
    set patronymic(value: string) { this._patronymic = value; }
    set birthDate(value: Date) { this._birthDate = value; }
    set documentType(value: DocType) { this._documentType = value; }
    set documentSeries(value: string) { this._documentSeries = value; }
    set documentNumber(value: string) { this._documentNumber = value; }

    printInfo(): void {
        console.log(`Фамилия: ${this._surname}, Имя: ${this._name}, Отчество: ${this._patronymic}, ` +
                    `Дата рождения: ${this._birthDate.toLocaleDateString()}, ` +
                    `Тип документа: ${this._documentType}, Серия: ${this._documentSeries}, Номер: ${this._documentNumber}`);
    }
}

interface Vehicle {
    readonly brand: string;
    readonly model: string;
    readonly year: number;
    readonly vin: string;
    readonly regNumber: string;
    readonly owner: Owner;
    printVehicleInfo(): void;
}

class BasicVehicle implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regNumber: string;
    private _owner: Owner;

    constructor(brand: string, model: string, year: number, vin: string, regNumber: string, owner: Owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regNumber = regNumber;
        this._owner = owner;
    }

    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get regNumber() { return this._regNumber; }
    get owner() { return this._owner; }

    set brand(value: string) { this._brand = value; }
    set model(value: string) { this._model = value; }
    set year(value: number) { this._year = value; }
    set vin(value: string) { this._vin = value; }
    set regNumber(value: string) { this._regNumber = value; }
    set owner(value: Owner) { this._owner = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                    `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}`);
    }
}

// 2) Наследование

enum CarBodyType {
    Седан = "Седан",
    Хэтчбек = "Хэтчбек",
    Внедорожник = "Внедорожник"
}
enum CarClass {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E"
}

interface Car extends Vehicle {
    readonly bodyType: CarBodyType;
    readonly carClass: CarClass;
}

class CarVehicle implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regNumber: string;
    private _owner: Owner;
    private _bodyType: CarBodyType;
    private _carClass: CarClass;

    constructor(brand: string, model: string, year: number, vin: string, regNumber: string, 
                owner: Owner, bodyType: CarBodyType, carClass: CarClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regNumber = regNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get regNumber() { return this._regNumber; }
    get owner() { return this._owner; }
    get bodyType() { return this._bodyType; }
    get carClass() { return this._carClass; }

    set brand(value: string) { this._brand = value; }
    set model(value: string) { this._model = value; }
    set year(value: number) { this._year = value; }
    set vin(value: string) { this._vin = value; }
    set regNumber(value: string) { this._regNumber = value; }
    set owner(value: Owner) { this._owner = value; }
    set bodyType(value: CarBodyType) { this._bodyType = value; }
    set carClass(value: CarClass) { this._carClass = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                    `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}, ` +
                    `Тип кузова: ${this._bodyType}, Класс: ${this._carClass}`);
    }
}

interface Motorbike extends Vehicle {
    readonly frameType: string;
    readonly isSport: boolean;
}

class MotorbikeVehicle implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _regNumber: string;
    private _owner: Owner;
    private _frameType: string;
    private _isSport: boolean;

    constructor(brand: string, model: string, year: number, vin: string, regNumber: string, 
                owner: Owner, frameType: string, isSport: boolean) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._regNumber = regNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isSport = isSport;
    }

    get brand() { return this._brand; }
    get model() { return this._model; }
    get year() { return this._year; }
    get vin() { return this._vin; }
    get regNumber() { return this._regNumber; }
    get owner() { return this._owner; }
    get frameType() { return this._frameType; }
    get isSport() { return this._isSport; }

    set brand(value: string) { this._brand = value; }
    set model(value: string) { this._model = value; }
    set year(value: number) { this._year = value; }
    set vin(value: string) { this._vin = value; }
    set regNumber(value: string) { this._regNumber = value; }
    set owner(value: Owner) { this._owner = value; }
    set frameType(value: string) { this._frameType = value; }
    set isSport(value: boolean) { this._isSport = value; }

    printVehicleInfo(): void {
        console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                    `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}, ` +
                    `Тип рамы: ${this._frameType}, Спортивный: ${this._isSport ? "Да" : "Нет"}`);
    }
}

// 3) Обобщения (Generics)

interface VehicleStorage<T extends Vehicle> {
    readonly creationDate: Date;
    readonly vehicles: T[];
    getAllVehicles(): T[];
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor(creationDate: Date, vehicles: T[]) {
        this._creationDate = creationDate;
        this._vehicles = vehicles;
    }

    get creationDate() { return this._creationDate; }
    get vehicles() { return this._vehicles; }

    set creationDate(value: Date) { this._creationDate = value; }
    set vehicles(value: T[]) { this._vehicles = value; }

    getAllVehicles(): T[] {
        return this._vehicles;
    }
}

// Пример использования
const owner = new Person("Tran", "Quang", "Minh", new Date("1999-01-01"), 
                        DocType.Паспорт, "AB", "123456");
const car = new CarVehicle("Toyota", "Camry", 2020, "VIN123", "ABC-123", owner, 
                           CarBodyType.Седан, CarClass.D);
const motorbike = new MotorbikeVehicle("Honda", "CBR", 2021, "VIN456", "XYZ-789", owner, 
                                       "Carbon", true);

owner.printInfo();
car.printVehicleInfo();
motorbike.printVehicleInfo();

const carStorage = new VehicleStorageImpl<Car>(new Date(), [car]);
console.log("Автомобили в хранилище:", carStorage.getAllVehicles());
const motorbikeStorage = new VehicleStorageImpl<Motorbike>(new Date(), [motorbike]);
console.log("Мотоциклы в хранилище:", motorbikeStorage.getAllVehicles());