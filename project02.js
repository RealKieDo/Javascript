class Vehicle {
    constructor(name,tmc,ID) {
        this.name = name;
        this.tmc = tmc;
        this.ID = ID;
    }

}

class Car extends Vehicle {


    isCar2() {
        return true;
    }

    isPlane2() {
        return false;
    }

    CarType(type) {
        this.type = type;
        return `${this.name} types is ${this.type}`
    }



   
}

class Plane extends Vehicle {
    isCar2() {
        return false;
    }

    isPlane2() {
        return true;
    }



    PlaneType(type) {
        this.type = type;
        return `${this.name} types is ${this.type}`
    }

}

class Employee {

    constructor(name,DateOfBitrh,ID) {
        this.name = name;
        this.DateOfBitrh = DateOfBitrh;
        this.ID = ID;
    }

}


class Driver extends Employee {

    isDriver2() {
        return true;
    }

    isPilot2() {
        return false;
    }

    licenseID(licenseID) {
        this.licenseID = licenseID;
        return `${this.name} licenseID is ${this.licenseID}`
    }

 

}

class Pilot extends Employee {

    isDriver2() {
        return false;
    }

    isPilot2() {
        return true;
    }


    licenseID(licenseID) {
        this.licenseID = licenseID;
        return `${this.name} licenseID is ${this.licenseID}`
    }

}

class Booking {

    constructor(reservationID, vehicleID, employeeID, reservationDate) {
        this.reservationDate = reservationDate;
        this.employeeID = employeeID;
        this.vehicleID = vehicleID;
        this.reservationID = reservationID;
    }

}

function isDriver1(driver) {
      if(driver.isDriver2() === true) {
        return true;
    } else {
        return false;
    }
}

function isPilot1(pilot) {
    if(pilot.isPilot2() === true) {
        return true;
      } else {
        return false;
      }
}

function isCar1(car) {
    if(car.isCar2() === true) {
        return true;
      } else {
        return false;
      }
}

function isPlane1(pilot) {
    if(pilot.isPlane2() === true) {
        return true;
      } else {
        return false;
      }
}



    function Check(employeeID,VehicleID) {
        if(isDriver1(employeeID) && isCar1(VehicleID)) {
            console.log("A5era")
        } 
    }


const car1 = new Car('Camry','Toyota','122')
const car2 = new Car('Corola','Toyota','144')
const car3 = new Car('Yars','Toyota','166')

const plane1 = new Plane('Plane1','Qatar','221')
const plane2 = new Plane('Plane2','Qatar','222')

const driver1 = new Driver('Mohammed','2001/2/1','22')
const pilot1 = new Pilot('Abdullah','2000/2/1','23')

console.log(car1)
console.log(car1.CarType('gas'));

console.log(car2)
console.log(car2.CarType('gas'));

console.log(car3)
console.log(car3.CarType('gas'));


console.log(plane1)
console.log(plane1.PlaneType('gas'));

console.log(plane2)
console.log(plane2.PlaneType('gas'));

console.log(Car.name)


Check(driver1,car1)

