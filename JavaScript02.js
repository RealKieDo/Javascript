/* #1 تمثيل التاريخ

const d = new Date(2020, 9, 17);
console.log(d.getDay());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getDay());
console.log(d.getFullYear());

*/

/* #2 تقريب الرقم الأقرب أكبر عدد صحيح

const number = Math.ceil(9.12);

console.log(number)
*/


/* #3 تقريب الرقم لأقرب أصغر عددد صحيح

const number = Math.floor(9.12);

console.log(number)

*/

/* #4 تقريب الرقم لأقرب رقم صحيح 

const number = Math.round(9.12);

console.log(number)

*/

/* #5 إيجاد القيمة المطلقة

const number = Math.abs(9.12);

console.log(number)

*/

/* #6 إيجاد اصغر قيمة رقمية

const numbers = [4,2,-9,9,7];

const num = Math.min(...numbers)
console.log(num);

*/
/* #7 إيجاد أكبر قيمة رقمية

const numbers = [4,2,-9,9,7];

const num = Math.max(...numbers)
console.log(num);

*/

/* #8 التحويل إلى float

const str = '1.45'

const floatNumber = parseFloat(str)
console.log(floatNumber + 1); 
*/

/* #9 التحويل إلى Int

const str = '9090'

const intNumber = parseInt(str)
console.log(intNumber + 1); 

*/

/* #10 إزالة الكسر

const number = Math.trunc(4.16)

console.log(number);

*/

/* #11 التحويل من نوع القيمة Integer

const number = 3

const isInt = Number.isInteger(number)
console.log(isInt);

*/


/* #12 التحقق من نوع القيمة غير رقمية

function square(number) {
    if(isNaN(number))
    return 'Invalid input'
return number * number
}
console.log(square('a'))

*/

/* #13 إضافة أس

const number = Math.pow(2,3)

console.log(number);
*/


/* #14 الجذر التربيعي

const number = 16

const sqrtNumber = Math.sqrt(number)
console.log(sqrtNumber);

*/



/* #15 التحقق من إشارة الرقم

// const number = 0

console.log(Math.sign('a'));


*/


/* #16 النوع Infinity

const result = -3/0
console.log(result);

*/


/* #17 إنشاء رقم عشواني

const randomNumber = Math.random()

console.log(randomNumber)

*/

/* #18 تسهيل قراءة الأرقام الكبيرة

const number = 357_643_912

console.log(number)

*/

/* #19 التحويل بين انواع الانظمة الرقمية


const number = 12

console.log(number.toString(2));

*/

/* #20 حالات لاستخدام Callback Function

function sum(firstNumber, secondNumber) {
    return `[${firstNumber + secondNumber}]`
}

function sub(firstNumber, secondNumber) {
    return `[${firstNumber - secondNumber}]`
}


console.log(sub(1,2))

*/

/* #21 نظرة على مفهوم Callback function

function sum(firstNumber, secondNumber) {
    return `[${firstNumber + secondNumber}]`
}

function sub(firstNumber, secondNumber) {
    return `[${firstNumber - secondNumber}]`
}

function operation(firstNumber,secondNumber, opCallback) {
    return `[:[${opCallback(firstNumber, secondNumber)}]:]`
}

console.log(operation(5,2,sub))

*/


/* #22 تطبيق على Callback function


function sum(firstNumber, secondNumber) {
    return `[${firstNumber + secondNumber}]`
}

function sub(firstNumber, secondNumber) {
    return `[${firstNumber - secondNumber}]`
}

function mul(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}


function operation(firstNumber,secondNumber, opCallback) {
    return `[:[${opCallback(firstNumber, secondNumber)}]:]`
}


console.log(operation(5,2,mul))
console.log(operation(5,2,sum))
console.log(operation(5,2,sub))

*/

/* #23 أساليب كتابة Callback


function sum(firstNumber, secondNumber) {
    return `[${firstNumber + secondNumber}]`
}

function sub(firstNumber, secondNumber) {
    return `[${firstNumber - secondNumber}]`
}

function mul(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}


function operation(firstNumber,secondNumber, opCallback) {
    return ` result = [[${opCallback(firstNumber, secondNumber)}]]`
}


console.log(operation(5,2,function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}))

console.log(operation(9,7,function (firstNumber, secondNumber) {
    return firstNumber + secondNumber
}))


console.log(operation(5,2,sub))

*/


/* #24 كتابة Callback function بالدوال السهمية Arrow function

function operation(firstNumber,secondNumber, opCallback) {
    return ` result = [[${opCallback(firstNumber, secondNumber)}]]`
}

console.log(operation(5,2,(firstNumber,secondNumber) => firstNumber + secondNumber ))

*/

/* #25 كتابة Callback function بدالة سهمية خارجية


function operation(firstNumber,secondNumber, opCallback) {
    return ` result = [[${opCallback(firstNumber, secondNumber)}]]`
}

const sum = (firstNumber,secondNumber) => firstNumber + secondNumber

console.log(operation(5,2,sum ))
console.log(operation(15,12,sum ))

*/


/* #26 تنسيقات النص في Callback function

function format(message,formatCallback) {
    return formatCallback(message)
}

function htmlFormat(message) {
    return `<div>${message}</div>`
}

function jsonFormat(message) {
    return `{"message": "${message}"}`
}

console.log(format('Welcome to JavaScript', jsonFormat))

*/


/* #27 دالة forEach

const colors = ['red','green','blue']

colors.forEach(function(currentValue, index, array){
    console.log(index, currentValue);
})

*/

/* #28 دالة some

const age = [11, 13, 15, 12]

const hasAdult = age.some(function(element){
    return element >= 18
})

console.log(hasAdult);


*/

/* #29 دالة every

const age = [21, 23, 27, 25, 22]

const areAdults = age.every(function(element) {
    return element >= 18
})

console.log(areAdults);


*/


/* #30 دالة includes

const colors = ['red', 'green', 'blue']

const isContainRed = colors.includes('red',1)
console.log(isContainRed);

*/

/* #31 دالة indexOf

const colors = ['red','green','blue','green']

const index = colors.indexOf('green' , 2)

console.log(index);

*/

/* #32 دالة LastIndexOf

const colors = ['red','green','blue','green']

const index = colors.lastIndexOf('green', 2)

console.log(index);

*/


/* #33 دالة Findindex

const ages = [12, 14, 19, 21]

const index = ages.findIndex(function(element) {
    return element >= 18
})
console.log(index);

*/

/* #34 دالة find

const numbers = [11, 7, 9, 15]

const el = numbers.find(function(element) {
    return element % 3 === 0
})

console.log(el);

*/


/* #35 دالة filter

const numbers = [2, 3, 7, 4, 9]

const evenNumbers = numbers.filter(function(currentValue) {
    return currentValue % 2 === 0
})

console.log(evenNumbers);

*/

/* #36 دالة concat

const primaryColors = ['red', 'yellow', 'blue']
const secondaryColors = ['green','orange','violet']

const colors = primaryColors.concat(secondaryColors, 'black','white')

console.log(colors);

*/

/* #37 دالة slice

const colors = ['black', 'red','green','blue','white']

const rgbColors = colors.slice(1, 4)

console.log(rgbColors);

*/

/* #38 دالة splice

const colors = ['black', 'red','green','blue','white']

colors.splice(2,2, 'gray', 'yellow')

console.log(colors);

*/

/* #39 دالة join


const arrColors = ['red','green','blue']

const strColors = arrColors.join('-')

console.log(strColors);

*/


/* #40 دالة sort

const colors = ['red','black','green','white']
const numbers = [921, 735, 840]

colors.sort()
numbers.sort()
console.log(numbers);
console.log(colors);

*/



/* #41 دالة reverse

const colors = ['red','green','blue']

colors.reverse()

console.log(colors);


*/


/* #42 دالة map

const numbers = [3, 7, 9]

const squaredNumbers = numbers.map(function(currentValue){
    return currentValue * currentValue
})

console.log(squaredNumbers);

*/

/* #43 دالة split

const strColors = 'red green blue black'

const arrColors = strColors.split(' ')

console.log(arrColors);

*/


/* #44 دالة reduce

const numbers = [2,4,1,3,5]

const total = numbers.reduce(function(accumulator, currentValue,index,array){
    return accumulator + currentValue
}, 100)

console.log(total);

*/

/* #45  إنشاء Object , الكلمة المفتاحية this

const car =  {
    name: 'cmary',
    color: 'white',
    currentSpeed: 0,
    move: function(speed){
        this.currentSpeed = speed
        return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
    },
    stop: function(){
        this.currentSpeed = 0
        return `The ${this.name} stopped`
    }
}

console.log(car.name);
console.log(car.move(100));
console.log(car.stop());
*/


/* #46 إنشاء class وإضافة دوال وإضافة static

class Car {
static numberOfCars = 0

constructor(name, color, currentSpeed) {
    //        console.log('constructor');
            this.name = name
            this.color = color
            this.currentSpeed = currentSpeed
            Car.incrementNumberOfCars()
        }
        move(speed) {
            this.currentSpeed = speed
            return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
        }
    
        stop (){
            this.currentSpeed = 0
            return `The ${this.name} stopped`
        }

        static incrementNumberOfCars() {
            Car.numberOfCars++
        }
}
    
    
    const car1 = new Car('camry','white',0)
    const car2 = new Car('corella','black',0)
    console.log(Car.numberOfCars);
    console.log(car1.move(100));
*/
    

/* #47 مفهوم الوراثة
class Animal {
    constructor(name,color) {
        this.name = name
        this.color = color
        this.speed = 0
    }

    run(speed) {
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }
}

class Cat extends Animal {

    makeSound() {
        return 'meow ...'
    }
}


class Fox extends Animal {
    makeSound() {
        return 'bark ...'
    }
}

const cat = new Cat('snowy','white')
console.log(cat)

*/

/* #48 دالة Call دالة Apply دالة Bind

let user1 = {
    firstName: "Fatimah",
    lastName: "Khalid"
}

let user2 = {
    firstName: "Asmaa",
    lastName: "Mohammed"
}

let user3 = {
    firstName: "Mohammed",
    lastName: "Saad"
}

let printFullName = function(age) {
    console.log("Hello, "+this.firstName+" "+this.lastName+". you age is: "+age);
}

printFullName.call(user1, "25");
printFullName.apply(user2, [20]);
let newFunction = printFullName.bind(user3)
newFunction("24")

*/
/* #49 الدوال السهمية

let add = (num1, num2, num3) => num1+num2+num3

let result = num1 => {let result = num1}

let print = () => console.log("This arrow function has no parameters")

*/

/* #50 الدوال بنمط IIFES

(function(n) {
    console.log(n);
})("Reem");

*/

/* #51 الدوال في الكائنات

let obj = {
    title: "How to write a function in an object",

    function1 : function() {
        return console.log("First function")
    },
    function2 : () => {
        return console.log("Second function")
    },
    function3() {
        return console.log("Third function")
    }
}

obj.function1()
obj.function2()
obj.function3()

*/

/* #52 تمرير Arguments أقل أو اكثر من المطلوب

function rectangleArea(w, l) {
    console.log(w,l);
    let a  = w * l;
    return a;
}

let area = rectangleArea(4)
console.log(area);

*/

/* #53 القيمة الافتراضية في Argument

function rectangleOrSquareArea(w, l=w) {
    let a  = w * l;
    return a;
}

let area = rectangleOrSquareArea(4)
console.log(area);

*/

/* #54 معامل البقية 

let studentsNames = function(name1,name2, ...names){
    console.log(name1, name2,names);
}

studentsNames("Hind","Khalid","Abdullah","Reem");

*/

/* #55 معامل النشر

let studentsNames = function(name1,name2, name3,name4){
    console.log(name1, name2,name3,name4);
}

names = ["nora",'Sara',"Eman","Ghadah"]
studentsNames(...names)

*/