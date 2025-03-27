import { Transport } from "./lab4_module";

const owner = new Transport.Person("Nguyen", "Quang", "Minh", new Date("1999-01-01"), 
                                  Transport.DocType.Паспорт, "AB", "123456");
const car = new Transport.CarVehicle("Toyota", "Camry", 2020, "VIN123", "ABC-123", owner, 
                                     Transport.CarBodyType.Седан, Transport.CarClass.D);
const motorbike = new Transport.MotorbikeVehicle("Honda", "CBR", 2021, "VIN456", "XYZ-789", owner, 
                                                 "Carbon", true);

owner.printInfo();
car.printVehicleInfo();
motorbike.printVehicleInfo();

const carStorage = new Transport.VehicleStorageImpl<Transport.Car>(new Date(), [car]);
console.log("Автомобили в хранилище:", carStorage.getAllVehicles());
const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.Motorbike>(new Date(), [motorbike]);
console.log("Мотоциклы в хранилище:", motorbikeStorage.getAllVehicles());