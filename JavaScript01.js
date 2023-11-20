
/* #1 تعريف المتغيرات
let color = 'green';

console.log(color);
console.log(color);
console.log(color);

color ='black';

console.log(color);
*/

/* #2 المتغيرات
let name = 'Ali';
console.log(name);
*/

/* #3 الثوابت
let age = 25;
const yearOfBirth = 1995;

console.log(yearOfBirth);
age = 26;
console.log(age);
*/
/* #4 التعليقات

console.log("Welcome to JavaScript"); // JavaScript
*/
/*
Welcome
to
JavaScript
*/

/* #5 مقدمة في انواع البيانات

let name = 'Nassar';
let age =  30;

console.log(typeof name);
console.log(typeof age);

*/

/* #6 البيانات من نوع boolean

let result = 2 < 3;
console.log(result);
console.log(typeof result);
*/

/* # 7البيانات من نوع String

let message = 'Welcome to JavaScript';
console.log(typeof message);
console.log(message);
*/

/* #8 القوالب النصية

let language = 'JavaScript';
let message = `Welcome to ${language}`;

console.log(message);
console.log(typeof message);
*/

/* #9 القيمة Undefined

let name;
console.log(name);
*/

/* #10 البيانات من نوع Number

let value = -5.2;
console.log(typeof value);

*/

/* #11 القيمة Nan

let value = 2;
console.log(value *'JavaScript');
*/

/* #12 القيمة Null

let value = null;
console.log(value);

*/

/* #13 نظرة على String Length

let language = 'JavaScript';
console.log(language.length);
*/


/* #14 دمج النصوص String Concentation

let language = 'JavaScript';
let message = 'Welcome to ' + language;

console.log(message);

*/

/* #15 الوصول إلى العناصر باستخدام Bracket Notation


let language = 'JavaScript';

console.log(language[4]);

*/

/* #16 نظرة على المصفوفات

let color = 'red';
let colors = ['red','green','blue'];

console.log(color);
console.log(colors);
console.log(colors[1]);

*/

/* #17 تحديث عناصر المصفوفة

let colors = ['red','green','blue'];
console.log(colors[1]);
colors[1] = 'black';
console.log(colors[1]);
*/

/* #18 طول المصفوفة

let colors = ['red','green','blue','black'];

console.log(colors.length);
*/

/* #19 التحقق من وجود العناصر

let colors = ['red','green','blue'];

console.log(colors.includes('black'));

*/

/* #20 إضافة عنصر باستخدام Unshit

let colors = ['red','green','blue'];

colors.unshift('black');
colors.unshift('white');
console.log(colors);

*/


/* #21 حذف عنصر باستخدام Shift

let colors = ['red','green','blue'];

const redColor = colors.shift();
console.log(colors);
console.log(redColor);
*/

/* #22 إضافة عنصر باستخدام Push

let colors = ['red','green','blue'];

colors.push('black');

console.log(colors);
*/

/* #23 حذف عنصر باستخدام Pop

let colors = ['red','green','blue'];

let blueColor = colors.pop();
console.log(colors);
console.log(blueColor);

*/


/* #24 التحقق من نوع البيانات IsArray

let color = 'black';
let colors = ['red','green','blue'];

console.log(Array.isArray(colors));
console.log(Array.isArray(color));

*/

/* #25 المصفوفات ثنائية الأبعاد

const values = 
[[1,2,3],
[4,5,6], 
[7,8,9]];

console.log(values[2][2]);
*/

/* #26 تقسيم المصفوفات

let message = 'Welcome to JavaScript';

let result = message.split(' ');

console.log(result);
*/

/* #27 دمج المصفوفات

let message = ['Welcome', 'to', 'JavaScript'];

let result = message.join(' ');

console.log(result);

*/

/* #28 , #29 else مقدمة في جملة If

let age = 14;

if(age < 12) {
   console.log('Sorry, you are not old enough to play this game');
} else { 
   console.log('Welcome to the game');
}

*/


/* #30 جملة IF else


let number = -1;

if(number > 0) {
   console.log('+');
} else if(number<0) {
   console.log('-');
} else {
   console.log('zero');
}

*/

/* #31 , #32 , #33  إضافة عملية واحدة لعدة حالات, Default ,  مقدمة إلى Switch

const colors = ['red', 'green', 'blue'];

let colorNumber = 6;

switch(colorNumber) {

   case 1:
      console.log([colors[0]]);
      break;
   case 2:
      console.log([colors[1]]);
      break;
   case 3:
      console.log([colors[2]]);
      break;
   case 4:
   case 5:
   case 6:
      console.log('black');
      break;

   default:
   console.log('white');
   break;
}  
*/

/* #34 , #35 نظرة على مفهوم التكرار Loop

for(let i = 1; i<=5; i++) {
   console.log(i);
}
*/

/* #36 نظرة على Drecrement For

for(let i = 5; i>=1; i--) {
   console.log(i);
}

*/

/* #37 , #38 For Of  استخدام المصفوفات For loop
let colors = ['red','green','blue'];

for(let i = 0; i<colors.length; i++) {
   console.log(colors[i]);
}

for(let color of colors) {
   console.log(color);
}
*/

/* #39 استخدام For of مع النصوص

const message = 'Welcome To JavaScript';

for(let characters of message) {
   console.log(characters);
}

*/

// #40 , #41 Do while ,  التكرار باستخدام While

//const colors = ['red','green','blue'];

/*
let i = 0;
while(i<colors.length) {
   console.log(colors[i]);
   i++;
}
*/
/*
let i = 0;

do {

   console.log(colors[i]);
   i++;
} while(i<colors.length);
*/

/* #42 نظرة على مفهوم Break

const numbers = [1,2,3,0,4,5];

for(let i = 0; i < numbers.length; i++) {
   if(numbers[i] == 0) {
      break;
   }
   console.log(numbers[i]);
}
console.log('***');
*/


/* #42 نظرة على مفهوم Continue
const numbers = [1,2,3,0,4,5];

for(let i = 0; i < numbers.length; i++) {
   if(numbers[i] == 0) {
      continue;
   }
   console.log(numbers[i]);
}
console.log('***');

*/

/* #43 نظرة على مفهوم الدوال Functions

function printNumbers() {
   console.log(1);
   console.log(2);
   console.log(3);
}

printNumbers();

*/

/* #44 مدخل الدالة Paramater

function printNumbers(to) {
   for(let i = 1; i <= to; i++) {
      console.log(i);
   }
}

printNumbers(3);
printNumbers(4);
printNumbers(5);

*/


/* #45 تمرير اكثر من مدخل للدالة
function add(firstNumber, secondNumber) {
   console.log(firstNumber + secondNumber);
}

add(2,7);

*/

/* #46 إرجاع قيمة من الدالة Return

function add(firstNumber, secondNumber) {
   let result = firstNumber + secondNumber;
   return result;
}

console.log(add(2,7));

*/

/* #47 استخدام Return أكثر من مرة في الدالة

function printNumbers(to) {
   if(to > 10) {
      return;
   }

   for(let i = 1; i <= to; i++) { 
      console.log(i);
   }
   return;
}

printNumbers(5);
printNumbers(11);

*/
