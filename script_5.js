// Assignments For Lessons 48 To 53

// Assignment 1
console.log("Assignment 1");
let start = 10;
let end = 100;
let exclude = 40;

/*
out
10
20
30
50
60
70
80
90
100
*/
for (let i = start; i <= end; i += start) {
    if (i === exclude) {continue;}
    else {console.log(i);}
}
// Assignment 2
console.log("Assignment 2");
let start_1 = 10;
let end_1 = 0;
let stop_1 = 3;

/*
out
10
09
08
07
06
05
04
03
*/

for (let i = start_1; i >= end_1; i--) {
    i === start_1 ? console.log(`${i}`) : console.log(`${end_1}${i}`);
    if (i === stop_1) {break;}
}

// Assignment 3
console.log("Assignment 3");
let start_2 = 1;
let end_2 = 6;
let breaker = 2;
/*
// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4
*/
for (let i = start_2; i <= end_2; i++) {
    console.log(i);
    for (let j = breaker; j <= breaker + breaker; j += breaker) {
        console.log(`-- ${j}`);
    }
}

// Assignment 4
console.log("Assignment 4");
let index = 10;
let end_3 = 6;
let jump = 2;
/* 
Output:
10
8
6
4
*/
for (;;) {
    console.log(`${index}`);
    index -= jump;
    if (index <= jump) break;
}

// Assignment 5
console.log("Assignment 5");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
/*
Output:
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/
let counter = +false;
for (let i = counter; i < friends.length; i++) {
  if (!friends[i].toLowerCase().startsWith(letter)) {
    console.log(`${++counter} => ${friends[i]}`);
  }
}


// Assignment 6
console.log("Assignment 6");
let start_3 = 0;
let swappedName = "elZerO";
// Output => "ELzERo"
let result = [];
for (i = start_3; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toLowerCase()
    ? result.push(swappedName[i].toUpperCase())
    : result.push(swappedName[i].toLowerCase());
}
let final = result.join("");

console.log(final);

// Assignment 7
console.log("Assignment 7");
let start_4 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
/*
Output:
2
3
4
*/
for (let i = start_4; i < mix.length; i++) {
    if (typeof mix[i] === "number" && mix[i] !== mix[start_4]) console.log(mix[i]);
}