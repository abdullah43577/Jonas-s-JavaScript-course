/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = 27;

//Variable name convention
let Person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the powre of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assingments operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// Template Strings or Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String with 
multiple
lines`);

// Coding Challenge 1
// Test data one
let marksHeight = 1.69;
let marksMass = 78;

let johnHeight = 1.95;
let johnMass = 92;

let markBMI = marksMass / (marksHeight * marksHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

// Test data two
marksHeight = 1.88;
marksMass = 95;

johnHeight = 1.76;
johnMass = 85;

markBMI = marksMass / (marksHeight * marksHeight);
johnBMI = johnMass / (johnHeight * johnHeight);

// Coding challenge 2
if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's! ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);
}

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license :)");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1; // converts to string "11"
n = n - 1; // converts to number because of the minus operator, so it becomes 11 - 1 = 10
console.log(n);


// In javascript there are 5 falsy values: 0, ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all :)");
} else {
  console.log("You should get a job!");
}

let height = 0; // height is undfined and a falsy value so it executes the else statement
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UDNEFINED");
}


const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 23 == 23
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");


const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else shoud drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else shoud drive...");
}

//CODING CHALLENGE 3
let DolphinsAverageScore = (96 + 108 + 89) / 3;
let Koalas = (88 + 91 + 110) / 3;
console.log(DolphinsAverageScore, Koalas);

if (DolphinsAverageScore > Koalas) {
  console.log("The Dolphins Wins!");
} else if (Koalas > DolphinsAverageScore) {
  console.log("The Koalas Wins!");
} else {
  console.log("It's a tie!");
}

DolphinsAverageScore = (97 + 112 + 101) / 3;
Koalas = (109 + 95 + 123) / 3;
console.log(DolphinsAverageScore, Koalas);

let minimumScore = 100;

if (DolphinsAverageScore > Koalas && DolphinsAverageScore >= minimumScore) {
  console.log("The Dolphins Wins!");
} else if (Koalas > DolphinsAverageScore && Koalas >= minimumScore) {
  console.log("The Koalas Wins!");
} else if (
  DolphinsAverageScore === Koalas &&
  DolphinsAverageScore >= 100 &&
  Koalas >= minimumScore
) {
  console.log("It's a tie!");
}

DolphinsAverageScore = (97 + 112 + 101) / 3;
Koalas = (109 + 95 + 106) / 3;
console.log(DolphinsAverageScore, Koalas);

minimumScore = 100;

if (DolphinsAverageScore > Koalas && DolphinsAverageScore >= 100) {
  console.log("The Dolphins Wins!");
} else if (Koalas > DolphinsAverageScore && Koalas >= 100) {
  console.log("The Koalas Wins!");
} else if (
  DolphinsAverageScore === Koalas &&
  DolphinsAverageScore >= 100 &&
  Koalas >= 100
) {
  console.log("It's a tie!");
} else {
  console.log("no team wins");
}

// SWITCH STATEMENTS
const day = "friday";

switch (day) {
  case "monday": // this literally means if (day === 'monday')
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday": // if (day === 'tuesday')
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}


const age = 23;
// age >= 18
//   ? console.log("I like to drink wine🍷")
//   : console.log("I like to drink wine💧");

const drink = age >= 18 ? "wine " : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine " : "water"}`);
*/

//CODING CHALLENGE 4
let tip;
let bill = 275;
let tip15 = (bill * 15) / 100;
let tip20 = (bill * 20) / 100;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip15}, and the total value ${
        bill + tip15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip20}, and the total value ${
        bill + tip20
      }`
    );

tip;
bill = 40;
tip15 = (bill * 15) / 100;
tip20 = (bill * 20) / 100;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip15}, and the total value ${
        bill + tip15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip20}, and the total value ${
        bill + tip20
      }`
    );

tip;
bill = 430;
tip15 = (bill * 15) / 100;
tip20 = (bill * 20) / 100;
bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip15}, and the total value ${
        bill + tip15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip20}, and the total value ${
        bill + tip20
      }`
    );
