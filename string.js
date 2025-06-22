// // creating string //
// 1  // using singal and double quotes //
// let str1 = "Hellow, World";
// let str2 = "JavaScript String";


// // Using template literals (Backticks ``) //
// let name = "Hemant";
// let greeting = `Hello, ${name}`;
// console.log(greeting);


// // 2. String Properties //
// // Length - Returns the Length of a string //
// let text = "JavaScript";
// console.log(text.length);


// // 3. Basic String Method //
// // toUppercase() & toLowercase()- change case //
// let str = "Hemant";
// console.log(str.toUpperCase() && str.toLowerCase());


// // Trim() -Removes Whitespace From both ends //
// let text1 = "    hemant kumawat     "
// console.log(text1.trim());


// // ChartAT(index) -Returns character at aspecific index //
// let text2 = "JavaScript";
// console.log(text2.charAt(5))

// // indexof(substring) -Finds The frist accurrence of a substring //
// let text3 = "Hello Kurshed sir!";
// console.log(text3.indexOf("Kurshed"))

// // Last indexof(substring) -Finds the last accurrence of a substring //
// let text4 = "my name is hemant kumawat. and my friend is ketan";
// console.log(text4.lastIndexOf("kuldeep"));

// // 4. String Menipulation Method //
// // Slice(Start, end) -Extract part of a string //
// let text6 = "javaScript";
// console.log(text6.slice(0, 4));

// // Substring(start, end) -similar to slice() but doesn't accept negetive indexes //
// let text7 = "hemant kumawat";
// console.log(text7.substring(0, 4));

// // Replace(search, replacment) -replace a substring //
// let text8 = "I love javascript";
// console.log(text8.replace("javascript", "react"));

// // Split(separater) -Splits a strong into an array //
// let text9 = "hemant,kuldeep,yashveer";
// console.log(text9.split(","));

// // 5. Advanced String Method //
// // includes(substring) -Checks if a string contains a substring //
// let text10 = "javascript is fun";
// console.log(text10.includes("fun"));

// // Startwith(substring) & ebdwith(substring) -checke the start and and //
// let text11 = "hemant";
// console.log(text11.startsWith("hemant") && text11.endsWith("hemant"));


// //  reapt(count) -reapts a string multipel time //
// let text12 = "hemant";
// console.log(text12.repeat(5))

// // padstart(targetlength, padstring) & padend(targetlength, padstring) //
// let num = "5";
// console.log(num.padStart(3, "5") && num.padEnd(5, "0"));

// // Match(regex) -Finds matchs using regular expressions //
// let text13 = "hemant 458 kuldeep 985";
// console.log(text13.match(/\d+/g));

// // replaceAll(search, replacement) -replaces all accurrences //
// let text14 = "react is amezing, react is fun.";
// console.log(text14.replaceAll("react", "paythen"));

// function formatFullName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// // Example usage:
// let fullName = formatFullName("John", "Doe");
// console.log(fullName);  // Output: "John Doe"
