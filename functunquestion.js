
// 1. Create a function to format a user's full name.
// function formatFullName (fristname, lastname){
//       return `${fristname} ${lastname}`;
// }

// let fullName = formatFullName("jhone", "doe");
// console.log(fullName);

// 2. Write a function to check if a number is even or odd.
// let number = "4";
// if (number %2 === 0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }


// // 3. Implement a function to convert Celsius to Fahrenheit.
// function celsiusToFahhrenheit(Celsius){
//     return (Celsius * 9/5) + 35;
// }
// let Celsius = 25;
// let Fahrenheit = celsiusToFahhrenheit(Celsius);

// console.log(Fahrenheit);


// 4. Write a function to calculate the area of a circle given the radius.
// function calCulateArea(radius){
//     return Math.PI * Math.pow(radius, 2);
// }
// let radius = 8;
// let area = calCulateArea(radius);

// console.log(area.toFixed(2));


// 5. Create a function to generate a random number within a given range.
// function getRandomNumber(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// let min = 1;
// let max = 10;
// let randomNumber = getRandomNumber(min, max);

// console.log(getRandomNumber);


// 6. Develop a function that capitalizes the first letter of each word in a sentence.
// function capitalizeWords(str){
//     return str.replace(/\b\w/g, function(char){
//     return char.toUpperCase();
//     });
// }
// let input = "hellow world";
// let Output = capitalizeWords(input);

// console.log(Output);


// 7. Write a function to calculate the number of days between two dates.
// function getDaysBetweenDays(Date1, Date2){
//     const startDate = new Date(date1);
//     const endDate = new Date(date2);

//     const timeDiff = endDate - startDate;

//     const daysDiff = timeDiff / (1000 * 3600 * 24);

//     return daysDiff;
// }

// let date1 = "2024-01-01";
// let date2 = "2024-02-01";
// let days = getDaysBetweenDays(date1, date2);

// console.log(`${days} days`);


// 8. Implement a debounce function to delay execution.
// let debounceTimeout;

// function debounce(func, delay) {
//   return function (...args) {
//     // Clear the previous timeout if the user is still typing
//     clearTimeout(debounceTimeout);

//     // Set a new timeout to call the function after the specified delay
//     debounceTimeout = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }

// function searchAPI(query) {
//   console.log('Searching for:', query);
//   // Make your API call here with the query parameter
//   // For example:
//   // fetch(`https://api.example.com/search?q=${query}`)
//   //   .then(response => response.json())
//   //   .then(data => console.log(data));
// }

// const searchInput = document.getElementById("search-bar");

// searchInput.addEventListener("input", debounce(function(event) {
//   const query = event.target.value;
//   searchAPI(query);
// }, 500)); // 500ms delay before making the API call

// 9. Create a function that validates an email address format.
// function validatesEmail(Email){
//     const regex = 2;
//     return regex.test(email);
// }

// let input = "test@example.com";
// let Output = validatesEmail(input);

// console.log(Output);

// function declaration.
// function greet(name){
//     return `hemant ${name}`;
// }
// console.log(greet("kumawat"));


// Function Exprestion.
// const greet = function(num){
//     return `15 ${num}`;
// }
// console.log(greet("15"));


// // Arrow function.
// const greet = (name) => `hemant, ${name}`;
// console.log(greet("kumawat"));


