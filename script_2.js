// Assignments For Lessons 33 To 37

// Assignment 1
console.log("Assignment 1");
let numOne = 9; //009
if (numOne < 10) {
    console.log(`00${numOne}`);
}
let numTwo = 20; //020
if (numTwo < 100 && numTwo > 10) {
    console.log(`0${numTwo}`);
}
let numThree = 110; //110
if (numThree > 100) {
    console.log(`${numThree}`);
}

// Assignment 2
console.log("Assignment 2");
let num_1 = 9;
let str = "9";
let str2 = "20";

if (num_1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}
if (num_1 == str && typeof num_1 !== typeof str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num_1 !== str2) {
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str === typeof str2) {
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Assignment 3
console.log("Assignment 3");
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 !== typeof num2) {
    console.log(
        `${num3} Is Larger Than ${num1} And Not The Same Type As ${typeof(num2)}`
    );
}
if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
    console.log(
        `${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type Is Not The Same As ${num2}`
    );
}
if (num3 !== num1 && typeof num3 !== typeof num2) {
    console.log(
        `{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`
    );
}

// Assignment 4
console.log("Assignment 4");
// Edit What You Want Here
/*
old values
let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;
*/
// new values
let _num1 = 90;
let _num2 = 1;
let _num3 = +"90";
let _num4 = 200;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (_num1 > _num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (_num1 > _num2 && _num1 < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (_num1 > _num2 && _num1 === _num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((_num1 + _num2) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((_num1 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((_num1 + _num2 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (_num4 - (_num1 + _num3) + _num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}