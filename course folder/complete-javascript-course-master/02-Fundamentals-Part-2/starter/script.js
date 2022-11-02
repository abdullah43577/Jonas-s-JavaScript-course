// this activates strict mode on javascript
"use strict";
/*
 hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio";
// const private = 534;



function logger() {
  console.log("My name is Jonas");
}

//calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//function declaration

const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

//function expression or anonymous function
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //return retirement;
  return `${firstName} retires in ${retirement}`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement}`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


//CODING CHALLENGE
// Test data one
let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

scoreDolphins = calcAverage(44, 23, 71);
scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test data two
calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins!`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(y[y.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ['bob', 'alice']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const calcAge = (birthYear) => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


const friends = ["Michael", "Steven", "Peter"];

//Add elements to the array
const newLength = friends.push("Jay"); // last
console.log(friends);
console.log(newLength);

friends.unshift("John"); // first
console.log(friends);

// Remove elements from the array
friends.pop(); // last
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}


// CODING CHALLENGE 2
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    bill = (bill * 15) / 100;
  } else {
    bill = (bill * 20) / 100;
  }
  return bill;
};

const bills = new Array(125, 555, 44);

const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));

console.log(bills, tips);

const total = new Array(
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
);
console.log(total);


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);


// Challenge
//jonas has 3 friends, and his best friend is called Michael

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend his called ${jonas.friends[0]}`
);


const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);


//Challenge
// 'jonas is a 46-year old teacher. and he has a driver's license'

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   },

  //   calcAge: function () {
  //     return 2037 - this.birthYear;
  //   },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.getSummary());


//Coding Challange
const markOBJ = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(markOBJ.calcBMI());

const johnOBJ = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
console.log(johnOBJ.calcBMI());

if (markOBJ.calcBMI() > johnOBJ.calcBMI()) {
  console.log(
    `${markOBJ.firstName} ${
      markOBJ.lastName
    } (${markOBJ.calcBMI()}) is higher than ${johnOBJ.firstName} ${
      johnOBJ.lastName
    } (${johnOBJ.calcBMI()})!`
  );
} else if (johnOBJ.calcBMI() > markOBJ.calcBMI()) {
  console.log(
    `${johnOBJ.firstName} ${
      johnOBJ.lastName
    } (${johnOBJ.calcBMI()}) is higher than ${markOBJ.firstName} ${
      markOBJ.lastName
    } (${markOBJ.calcBMI()})!`
  );
}


// console.log("Lifting weights repetition 1🏋️");
// console.log("Lifting weights repetition 2🏋️");
// console.log("Lifting weights repetition 3🏋️");
// console.log("Lifting weights repetition 4🏋️");
// console.log("Lifting weights repetition 5🏋️");
// console.log("Lifting weights repetition 6🏋️");
// console.log("Lifting weights repetition 7🏋️");
// console.log("Lifting weights repetition 8🏋️");
// console.log("Lifting weights repetition 9🏋️");
// console.log("Lifting weights repetition 10🏋️");

// for loops keeps running while condition is true
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);

  // filling types array
  //   types[i] = typeof jonasArray[i];

  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  //ages[i] = 2037 - years[i];
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("---- ONLY STRING -----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  // reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("---- BREAK WITH NUMBER -----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  // reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);
}


const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------- STARTING EXERCISE ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️`);
  }
}
// this is what it prints out
`--------- STARTING EXERCISE 1
 Exercise 1 Lifting weight repetition 1 🏋️
 Exercise 1 Lifting weight repetition 2 🏋️
 Exercise 1 Lifting weight repetition 3 🏋️
 Exercise 1 Lifting weight repetition 4 🏋️
 Exercise 1 Lifting weight repetition 5 🏋️
--------- STARTING EXERCISE 2
 Exercise 2 Lifting weight repetition 1 🏋️
 Exercise 2 Lifting weight repetition 2 🏋️
 Exercise 2 Lifting weight repetition 3 🏋️
 Exercise 2 Lifting weight repetition 4 🏋️
 Exercise 2 Lifting weight repetition 5 🏋️
--------- STARTING EXERCISE 3
 Exercise 3 Lifting weight repetition 1 🏋️
 Exercise 3 Lifting weight repetition 2 🏋️
 Exercise 3 Lifting weight repetition 3 🏋️
 Exercise 3 Lifting weight repetition 4 🏋️
 Exercise 3 Lifting weight repetition 5 🏋️`;


// console.log(`------- WHILE LOOP --------`);
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
// FINAL CODING CHALLENGE ON FUNDAMENTALS OF JAVASCRIPT // CODING CHALLENGE 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bills.length);
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    bill = (bill * 15) / 100;
  } else {
    bill = (bill * 20) / 100;
  }
  return bill;
};

for (let i = 0; i < bills.length; i++) {
  const tipCalc = calcTip(bills[i]);
  tips.push(tipCalc);

  totals.push(bills[i] + tips[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips));
