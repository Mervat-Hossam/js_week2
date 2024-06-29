// Assignments For Lessons 40 To 47
// Assignment 1
console.log("Assignment 1");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Assignment 2
console.log("Assignment 2");
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

// Assignment 3
console.log("Assignment 3");
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// Assignment 4
console.log("Assignment 4");
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].toUpperCase().slice(website.length)); // ZERO

// Assignment 5
console.log("Assignment 5");
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
    console.log("Found");
}

// Assignment 6
console.log("Assignment 6");
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().slice(arr2.length).join("").toLowerCase();

console.log(allArrs); // fxy