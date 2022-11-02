'use strict';

// const print = name => alert(`Happy New Year ${name}`);

// print('everyone');

// Definition of Closures
// A closure is the closed-over variable environment of the execution context in which a function was created, even after the exectution context is gone.

// A closure gives a function acccess to all the variables of it's parent function, even after that parent funciton has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// A closure makes sure that a function doesn't loose connection to variables that existed at the function's birth place;

// A closure is like  backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the enviroment where the function was created.

// We do not have to manually create closures, this is a JavaScript feature that happens atuomatically. We can't even access clsoed-over variables explicitly. A closure is NOT a tangible JavaScript object.

//console.dir(booker)

// More Closure Examples

/*
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigned by the h function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// const perGroup = 1000;
boardPassengers(180, 3);
*/
// Coding Challenge (Closures)

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const bodyEl = document.querySelector('body');

  bodyEl.addEventListener('click', () => {
    header.style.color = 'blue';
  });
})();
