/* #1 الدالة Test

const myString = 'I Love JavaScript'
const regex = /Kotlin/
const containsRegex = regex.test(myString)
console.log(containsRegex)

*/

/* #2 الدالة Replace

const myString = 'I love JavaScript'
const myRegex = /JavaScript/
let newString = myString.replace(myRegex, 'Koltin')
console.log(newString)

*/

/* #3 الدالة Search 

const myString = 'I love JavaScript'
let newRegex = myString.search(/JavaScript/)
console.log(newRegex)

*/

/* #4 الدالة Match

const str = 'Hello My name is mohammed abdullah alrehaili and this is my program'

let a = str.match(/is/g)
console.log(a)

*/



/* #5 مفهوم Synchronouns

console.log(1)
console.log(2)
setTimeout(()=> {
    console.log(3)
}, 3000)
console.log(4)
console.log(5)

*/

/* #6 مفهوم Asynchronous


console.log('Start')
function userInfo(name) {
    setTimeout(() => {
        console.log('** User info received **')
        return name
    },3000)
}

let userName = userInfo('Khalid')
console.log(userName)
console.log('End')

*/
/* #7 استخدام Callback في promise

console.log('Start')
function userInfo(name, callback) {
    setTimeout(() => {
        console.log('** User info received **')
        callback(name)
    },3000)
}

let userName = userInfo('Khalid',name => {
    console.log(`Your name is ${name}`)
})
console.log('End')
*/

/* #8 نظرة على مفهوم Promise

console.log('Start')

const newUser = new Promise((resolve, reject) =>{
setTimeout(() => {
    const userInfo = {
        name: 'Khalid',
        age: 19
    }
    resolve(userInfo)
},3000)
})
newUser.then(res => {
    console.log('** User info recieved**')
    console.log(res)
})

console.log('End')

*/

/* #9 التعامل مع Resolve

console.log('Start')

const newUser = new Promise((resolve, reject) =>{
setTimeout(() => {
    const userInfo = {
        name: 'Khalid',
        age: 19
    }
    resolve(userInfo)
},3000)
})

const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if(userAge >= 18) {
        adultAge = `${userInfo.name} is an Adult`
    } else {
        adultAge = `${userInfo.name} is NOT an adult`
    }
    return Promise.resolve(adultAge)
}
newUser
   .then(addNewUser)
   .then(res => {
    console.log('** User info recieved**')
    console.log(res)
})

console.log('End')

*/

/* #10 التعامل مع Catch

console.log('Start')

const newUser = new Promise((resolve, reject) =>{
setTimeout(() => {
    const userInfo = {
        name: 'Khalid',
        age: 11
    }
    resolve(userInfo)
},3000)
})

const addNewUser = userInfo => {
    let userAge = userInfo.age
    let adultAge;
    if(userAge >= 18) {
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else {
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }
}
newUser
   .then(addNewUser)
   .then(res => {
    console.log('** User info recieved**')
    console.log(res)
})
    .catch(err => {
        console.log(err.message)
    })

console.log('End')

*/

/* #11 مفهوم Destructuring

let ages = [25, 30, 32]

let [firstAge, secondAge, thirdAge] = ages

console.log(firstAge,secondAge, thirdAge)

*/

/* #12 تفكيك المصفوفات غير المعرفة

let colors = ['red','green']
let [firstColor, secondColor, thirdColor] = colors
console.log(firstColor,secondColor,thirdColor)
*/

/* #13 إضافة قيم افتراضية

let colors = ['red','green']
let [firstColor, secondColor, thirdColor = 'blue'] = colors
console.log(firstColor,secondColor,thirdColor)

*/

/* #14 تجاهل القيم في عملية Destructuring

let colors = ['red','green','blue']
let [,firstColor, secondColor] = colors

console.log(firstColor, secondColor)

*/

/* #15 عمل Destructing على Nested Arrays

let numbers = [1,2,[3,4]]
let [first, second, [firstValue, secondValue]] = numbers
console.log(first,second,firstValue, secondValue)

*/

/* #16 تبديل القيم باستخدام Destructing

let first = 5, second =7;
[first, second] = [second,first]
console.log(first,second)

*/

/* #17 مفهوم L Value و R Value

let colors = ['red','green'];
[colors[0],colors[1]] = ['blue','black','white']
console.log(colors)
*/

/* #18 عمل Destructing على Object

let student = {
    name : 'Ali',
    age : 25
}

let {name: yourName, age: yourAge} = student
console.log(yourName,yourAge)

*/

/* #19 استخراج القيم بنفس الاسم من Object

let student = {
    name : 'Ali',
    age : 25
    ,gender: true
}

let {name,age,gender} = student
console.log(name,age,gender)
*/

/* #20 المشاكل المحتمله عند عمل Destructing على Object


let student = {
    name : 'Ali',
    age : 25
}

let name = 'Saleh', age = 22;
({name,age} = student)

console.log(name,age)

*/

/* #21 عمل Destructing على Nested Object

let student = {
    name: {
        firstName: 'Ali',
        lastName: 'Nasser'
    },
    age: 25
}

let {name:{lastName: yourLastName}} = student
console.log(yourLastName)

*/

/* #22 عمل Destructuring على Object باستخدام String Key

let student = {
    name : {
        firstName : 'Ali',
        lastName: 'Nasser'
    },
    '@my age' : 25
}

console.log(student['@my age'])

*/

/* #23 مفهوم Rest Declartion

let numbers = [1,2,3,4,5];
let [first,second, ...others] = numbers
console.log(first,second,others)

*/

/* #24 مفهوم Spread Operator

let first = [1,2,3]
let second = [4,5]
let third = [...first,...second]

console.log(third)

*/

/* #25 الفرق بين Spread Operator و RestDeclaration

function sum(first,second,...others) {
    console.log(...others)
    return first+ second
}

console.log(sum(1,2,6,80, 75))

*/


/* #26 عمل Destructuring و Rest Declaration

let numbers = [1,2,3,4,5]

let [first,second, ...others] = numbers
console.log(first,second, ...others)

*/

/* #27 عمل RestDeclaration لمصفوفة لا تحتوي على قيم

let numbers = [1,2]

let [first, second, ...others] = numbers
console.log(first,second,others)

*/

/* #28 عمل Rest Declaration لعناصر Object

let student = {
    name: 'Salem',
    age : 18,
gender: false
}

let {name, ...others} = student
console.log(name,others)

*/

/* #29 عمل Destructuring على Object يحتوي على قيم افتراضية

let student = {
    name: 'Salem',
    age: 18


}

let {name, nickname = 'unknown'} = student
console.log(name,nickname)

*/
