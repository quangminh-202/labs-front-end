"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
var Transport;
(function (Transport) {
    let DocType;
    (function (DocType) {
        DocType["\u041F\u0430\u0441\u043F\u043E\u0440\u0442"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocType["\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocType["\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442"] = "\u0417\u0430\u0433\u0440\u0430\u043D\u043F\u0430\u0441\u043F\u043E\u0440\u0442";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    class Person {
        constructor(surname, name, patronymic, birthDate, documentType, documentSeries, documentNumber) {
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
        set surname(value) { this._surname = value; }
        set name(value) { this._name = value; }
        set patronymic(value) { this._patronymic = value; }
        set birthDate(value) { this._birthDate = value; }
        set documentType(value) { this._documentType = value; }
        set documentSeries(value) { this._documentSeries = value; }
        set documentNumber(value) { this._documentNumber = value; }
        printInfo() {
            console.log(`Фамилия: ${this._surname}, Имя: ${this._name}, Отчество: ${this._patronymic}, ` +
                `Дата рождения: ${this._birthDate.toLocaleDateString()}, ` +
                `Тип документа: ${this._documentType}, Серия: ${this._documentSeries}, Номер: ${this._documentNumber}`);
        }
    }
    Transport.Person = Person;
    class BasicVehicle {
        constructor(brand, model, year, vin, regNumber, owner) {
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
        set brand(value) { this._brand = value; }
        set model(value) { this._model = value; }
        set year(value) { this._year = value; }
        set vin(value) { this._vin = value; }
        set regNumber(value) { this._regNumber = value; }
        set owner(value) { this._owner = value; }
        printVehicleInfo() {
            console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}`);
        }
    }
    Transport.BasicVehicle = BasicVehicle;
    let CarBodyType;
    (function (CarBodyType) {
        CarBodyType["\u0421\u0435\u0434\u0430\u043D"] = "\u0421\u0435\u0434\u0430\u043D";
        CarBodyType["\u0425\u044D\u0442\u0447\u0431\u0435\u043A"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
        CarBodyType["\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    })(CarBodyType = Transport.CarBodyType || (Transport.CarBodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["A"] = "A";
        CarClass["B"] = "B";
        CarClass["C"] = "C";
        CarClass["D"] = "D";
        CarClass["E"] = "E";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    class CarVehicle {
        constructor(brand, model, year, vin, regNumber, owner, bodyType, carClass) {
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
        set brand(value) { this._brand = value; }
        set model(value) { this._model = value; }
        set year(value) { this._year = value; }
        set vin(value) { this._vin = value; }
        set regNumber(value) { this._regNumber = value; }
        set owner(value) { this._owner = value; }
        set bodyType(value) { this._bodyType = value; }
        set carClass(value) { this._carClass = value; }
        printVehicleInfo() {
            console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}, ` +
                `Тип кузова: ${this._bodyType}, Класс: ${this._carClass}`);
        }
    }
    Transport.CarVehicle = CarVehicle;
    class MotorbikeVehicle {
        constructor(brand, model, year, vin, regNumber, owner, frameType, isSport) {
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
        set brand(value) { this._brand = value; }
        set model(value) { this._model = value; }
        set year(value) { this._year = value; }
        set vin(value) { this._vin = value; }
        set regNumber(value) { this._regNumber = value; }
        set owner(value) { this._owner = value; }
        set frameType(value) { this._frameType = value; }
        set isSport(value) { this._isSport = value; }
        printVehicleInfo() {
            console.log(`Марка: ${this._brand}, Модель: ${this._model}, Год выпуска: ${this._year}, ` +
                `VIN: ${this._vin}, Регистрационный номер: ${this._regNumber}, ` +
                `Тип рамы: ${this._frameType}, Спортивный: ${this._isSport ? "Да" : "Нет"}`);
        }
    }
    Transport.MotorbikeVehicle = MotorbikeVehicle;
    class VehicleStorageImpl {
        constructor(creationDate, vehicles) {
            this._creationDate = creationDate;
            this._vehicles = vehicles;
        }
        get creationDate() { return this._creationDate; }
        get vehicles() { return this._vehicles; }
        set creationDate(value) { this._creationDate = value; }
        set vehicles(value) { this._vehicles = value; }
        getAllVehicles() {
            return this._vehicles;
        }
    }
    Transport.VehicleStorageImpl = VehicleStorageImpl;
})(Transport || (exports.Transport = Transport = {}));
