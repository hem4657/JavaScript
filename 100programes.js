// // Checke if a number is positive, nagetive, or zero //
// let num = "5";
// if (num > 0){
//     console.log("positive");
// }
// else if (num < 0){
//     console.log("nagetive");
// }
// else {
//     console.log("zero");
// }

// // Checke if a person is iligeble to vote //
// let age = "17";
// if (age >= 17){
//     console.log("eligible to vote");
// }
// else {
//     console.log("not eligible to vote");
// }

// // Find the largest of two numbers //
// let a = "15", b = "14";
// if (a > b){
//     console.log("largest:", a);
// }
// else{
//     console.log("largest:", b);
// }

// // Checke even or odd numbers //
// let number = 5;
// if (number %2 === 6){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// // Assigne grades based on marks //
// let marks = "75";
// if(marks >= 95){
//     console.log("grade: A");
// }
// else if(marks >= 85){
//     console.log("Grade: B");
// }
// else if(marks >=75){
//     console.log("Grade: C");
// }
// else if(marks >= 65){
//     console.log("Grade: D");
// }
// else{
//     console.log("Grade: F");
// }

// // Trafic light system //
// let light = "green";
// switch (light){
//     case "red":
//         console.log("stop");
//     break;
//     case "yellow":
//         console.log("slow down");
//     break;
//     case "green":
//         console.log("go");
//     break;
//     default:
//         console.log("invalid color");
// }

// // Check leep year //
// let year = "2024";
// if (year % 4 === 0 && year % 100 === 0 || year % 400 === 0){
//     console.log(year,"is a leep year");
// }
// else{
//     console.log(year, "is not a leep year");
// }

// // detect character type(vowel or conconant) //
// let char = "e";
// switch (char){
//     case 'a': case 'e': case 'i': case 'o':case 'u':
//     case 'A': case 'E': case 'I': case 'O': case 'U':
//         console.log("vowel");
//     break;
//     default:
//         console.log("consonant");
// }

// // Determine the largest of three numbers //
// let x = 5, y = 12, z = 8;
// if (x > y && x > z){
//     console.log("largest:", x);
// }
// else if (y > z){
//     console.log("largest:", y);
// }
// else {
//     console.log("largest:", z);
// }

// // Chack for uppercase or lowercase latter //
// let letter = "G";
// if (letter >= 'A' && letter <= 'Z'){
//     console.log("Uppercase Letter");
// }
// else if (letter >= 'a' && letter <= 'z'){
//     console.log('Lowercase Letter');
// }
// else {
//     console.log("not a Letter");
// }

// // check if a number is divisible by both 3 and 5 //
// let num1 = 15;
// if (num1 % 3 === 0 && num1 % 5 === 0){
//     console.log("Divisible by both 3 and 5");
// }
// else{
//     console.log("not divisible by both 3 and 5");
// }

// // Determine the day of the week //
// let day = 5;
// switch (day){
//     case 1: console.log("sunday"); break;
//     case 2: console.log("monday"); break;
//     case 3: console.log("tuesday"); break;
//     case 4: console.log("wednesday"); break;
//     case 5: console.log("thursday"); break;
//     case 6: console.log("friday"); break;
//     case 7: console.log("saterday"); break;
// default: console.log("invalid day");
// }

// Find if a year is a century year //
// let year = 2000;
// if (year % 100 === 0){
//     console.log(year, "is a century year");
// }
// else {
//     console.log(year, "is not a century year");
// }

// check wether a cheracter is an alphabet //
// let char = '9';
// if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")){
//     console.log("Alphabet");
// }
// else{
//     console.log("not a alphabet");
// }

// // Find the smallest of two numbers //
// let x = 5, y = 12, z = 8;
// if(x < y && x < z){
//     console.log("smallest", x);
// }
// else if(y < z){
//     console.log("smallest", y);
// }
// else{
//     console.log("smallest", z);
// }

// check if persone is a teenager (13-19 year old) //
// let age = 15;
// if(age >= 13 && age <= 19){
//     console.log("teenager");
// }
// else{
//     console.log("not a teenager");
// }

// check if a number is a multeple of 10 //
// let num = 40;
// if(num % 10 === 0){
//     console.log(num, "is a multple of 10");
// }
// else{
//     console.log(num, "is not a multple of 10");
// }

// Convert celsuis to faherneit or faherneit to celsuis //
// let temp = 100;
// let unit = "c";

// if(unit === "c"){
//     console.log("faherneit:", (temp * 9/5) + 32);
// }
// else if (unit === "f"){
//     console.log("celsuis", (temp - 32) * 5/9);
// }
// else{
//     console.log("Invalid unit");
// }

// Check if a triangle is equilateral, isosceles, or scalene //
// let a = 5, b = 5, c = 5;
// if(a === b && b === c){
//     console.log("equilateral triangle");
// }
// else if(a === b || b === c || a === c){
//     console.log("Isosceles triangle");
// }
// else{
//     console.log("scalene tringle");
// }

// Find the absolute value of a number //
// let num = 15;
// if(num < 0){
//     console.log("absolute value:", num);
// }
// else{
//     console.log("absolute value:", num);
// }

// simple calulate using switch //
// let num1 = 10, num2 = 5, operator = "/";

// switch(operator){
//     case "+": console.log("result:", num1 + num2); break;
//     case "-": console.log("result:", num1 - num2); break;
//     case "*": console.log("result:", num1 * num2); break;
//     case "/": console.log("result:", num1 / num2); break;
//     default: console.log("invalid operator");
// }

// // Check if a number is a perfect square //
// let num = 25;
// let sqrt = Math.sqrt(num);

// if(sqrt === Math.floor(sqrt)){
//     console.log(num, "is a perfect square");
// }
// else{
//     console.log(num, "is not a perfect square");
// }

// Determine the time of the day (morning, afternoon, evening) //
// let hour = 14;

// if(hour >= 5 && hour <= 12){
//     console.log("morning");
// }
// else if(hour >= 12 && hour <= 17){
//     console.log("Afternoon");
// }
// else if(hour >= 17 && hour <= 21){
//     console.log("Evening");
// }
// else{
//     console.log("Night");
// }

// Check if a character is a digit //
// let char = "5";
// if(char >= "0" && char <= "9"){
//     console.log("it is a digit");
// }
// else{
//     console.log("it is not a digit");
// }

// Determine the number of days in a month //
// let month = 2;
// let year = 2024;

// if (month === 2){
//     if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0){
//         console.log("29 days");
//     }
//     else{
//         console.log("28 days");
//     }
// }
// else if(month === 4 || month === 6 || month === 9 || month === 11){
//     console.log("30 days");
// }
// else{
//     console.log("31 days");
// }

// Conver lowercase letter to uppercase //
// let letter = 'b';
// if(letter >= 'a' && letter <= 'z'){
//     console.log("uppercase:", letter.toUpperCase());
// }
// else{
//     console.log("not a lowercase letter");
// }


// check if a person is a senior citizen (age 60 or above) //
// let age = 65;
// if(age >= 60){
//     console.log("senior citizen");
// }
// else{
//     console.log("not a senior citizen");
// }


// Check if a number is positive, negetive, or zero using switch //
// let num = 0;
// switch (true){
//     case (num > 0): console.log("positive"); break;
//     case (num < 0): console.log("negetive"); break;
//     default: console.log("zero"); break;
// }


// Convert a number to its word repesentation (0 - 5) //
// let num = 3;
// switch (num) {
//     case 0: console.log("zero"); break;
//     case 1: console.log("ONE"); break;
//     case 2: console.log("two"); break;
//     case 3: console.log("three"); break;
//     case 4: console.log("four"); break;
//     case 5: console.log("five"); break;
//     default: console.log("number out of ranfe"); break;
//  }


 // Determine if a number is prime (basic approach)//note: related to for loop topic//
// let num = 7;
// let isPrime = true;

// if(true < 7){
//     isPrime = false;
// }
// else{
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     console.log(num, "is a prime number");
// }
// else{
//     console.log(num, "is not a prime number");
// }


// Check if a number is within a given range (10-50)//
// let num = 30;
// if (num >= 10 && num <= 50){
//     console.log(num, "is within the range (10-50)");
// }
// else{
//     console.log(num, "is not within the range (10-50)");
// }


// Check if a year is a millennium year (1000, 2000, etc.) //
// let year = 2000;
// if(year % 1000 === 0){
//     console.log(year, "is a millennium year");
// }
// else{
//     console.log(year, "is not a millennum year");
// }


// // Find the greatest among four numbers //
// let a = 10, b = 15, c = 25, d = 45;
// if(a >= b && a > c && a > d){
//     console.log("gretest:", a);
// }
// else if(b > c && b > d){
//     console.log("greatest:", b);
// }
// else if(c > d){
//     console.log("gratest:", c);
// }
// else{
//     console.log("greatest:", d);
// }


// // Check if a number is a power of 2 //
// let num = 18;
// if(num & (num - 1) === 0 && num > 0 ){
//     console.log(num, "if a number is a power of 2");
// }
// else{
//     console.log(num, "if not a number is a power of 2");
// }

let num1 = prompt();
let num2 = prompt() +1;
console.log(num1 * num2 % 2 );
