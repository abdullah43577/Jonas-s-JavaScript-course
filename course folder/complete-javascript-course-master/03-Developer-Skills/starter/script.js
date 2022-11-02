// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;
// if (x === 23) console.log(23);

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1991));

// 4 Steps to solve any problem

// make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.

// Divide an conquer. Break a big problem into smaller sub-problems.

// Don't be afraid to do as much research as you have to

// For bigger problem, write pseudo-code before writing the actual code;

// finding the maximum or largest number in an array
/* const age = [-1, -2, -3, -5, -6, 40, 50, 60, 70, "erro1"];

const year = [1991, 1992, 1993];

const maximum = (temps) => {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

maximum(age);

// finding the  minimum or lesser number in an array

const minimum = (temps) => {
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) min = temps[i];
  }
  console.log(min);
};

minimum(age);

let totals = [];
totals = age.concat(year);
console.log(totals);


// DEBUGGING
const measureKelvin = () => {
  const measurement = {
    type: "temperature",
    unit: "celsius",
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };

  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY THE BUG
console.log(measureKelvin());
*/

//CODING CHALLENGE 1
// pseudo code
// test data 1 [17, 21, 23]
// test data 2 [12, 5, -5, 0, 4]

// step 1) create a function 'printForecast which takes in an array 'arr'
// step 2) use a for loop to iterate through the array
// step 3) log the string '17°C in  i days given the data from the Array °

let temperatures = [17, 21, 23];
let temperaturesB = [12, 5, -5, 0, 4];

// debugger;
const printForecast = (arr) => {
  let concatenator = "";
  for (let i = 0; i < arr.length; i++) {
    concatenator += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(`... ${concatenator}`);
};

printForecast(temperatures);
console.log(`-------SECOND TEMPERATURE------`);
printForecast(temperaturesB);

let temp = temperatures.concat(temperaturesB);
const printforecast = (arr) => {
  console.log(temp);
  let concatenator = "";
  for (let i = 0; i < arr.length; i++) {
    concatenator += `${arr[i]}°C in ${i + 1} days... `;
  }
  console.log(`... ${concatenator}`);
};

printforecast(temp);
