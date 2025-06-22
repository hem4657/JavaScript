// // square star pattern //
// const n = 5;
// let str = "";
// for(let i = 1; i <= n; i++){

//     for(let j = 1; j <= n; j++){
//         str += "*";
//     }

//     str += "\n";
// }
// console.log(str);

// Hellow square star pattern //
// const n = 5;
// let str = "";
// for(let i = 1; i <= n; i++){

//     for(let j = 1; j <= n; j++){
//         if(i === 1 || i === n || j === 1 || j === n){
//             str += "*";
//         }
//         else{
//             str += ' ';
//         }
//     }
//     str += "\n";
// }
// console.log(str);


// the while loop (condition - based loop) //
// let i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }


// the do while loop (Run at last one) //
// let i = 0;
// do{
//     console.log("hemant kumawat", i);
// }while(i < 10, i++);


// left triangle pattern programe //
// const n = 5;
// let str = '';
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         str += '* ';
//     }
//     str += '\n';
// }
// console.log(str);


// hellow left traingle pattern program //
// const n = 5;
// let str = "";
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         if(j === 1 || j === i || i === n){
//             str += '* ';
//         }else{
//             str += '  ';
//         }
//     }
//     str += '\n';
// }
// console.log(str);


// right trangle pattern program //
// const n = 5;
// let str = "";
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         if(j <= n - i){
//             str += '  ';
//         }else{
//             str += '* ';
//         }
//     }
//             str += '\n';
// }
// console.log(str);


// hellow right triangle pattern programm //
// const n = 5;
// let str = "";
// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         str += '  ';
//     }
//     for(let j = 1; j <= n; j++){
//         if(j === 1 || j === i || i === n){
//             str += '* ';
//         }
//         else{
//             str += '  ';
//         }
//     }
//         str += '\n';
// }
// console.log(str);


// inverted left traingle pattern program //
// const n = 5;
// let str = "";
// for(let i = n; i >= 1; i--){
//     for(let j = 1; j <= i; j++){
//         str += '* ';
//     }
//     str += '\n';
// }
// console.log(str);


// hellow left inverted traingle pattern program //
// const n = 5;
// let str = "";
// for(i = n; i >= 1; i--){
//     let row = '';
//     for(let j = 1; j <= i; j++){
//         if(j === 1 || j === i || i === n){
//             row += '* ';
//         }else{
//             row += '  ';
//         }
//     }
//        str += row + '\n';
// }
// console.log(str);


// // the for of loop (itriating over array & string) //
// let name = ["hemant", "kuldeep", "yeshveer", "shubham"];
// for(let i of name){
//     console.log(i);
// }


// // the for in loop (itriating over object properties) //
// const name = ["kumawat", "jaat", "kumawat", "sharma"];
// for(let i in name){
//     console.log(i);
//     console.log(name[i]);
// }


// // loop control statments (break & continue) //
// for(let i = 1; i <= 10; i++){
//     if(i === 7)
//     break;
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++){
//     if(i === 8)
//         continue;
//     console.log(i);
// }

// const cars = ["scrpio", "swift", "defender", "rang rover", "s11", "bolerio"];
// for(let i = 1; i <= i; i++){
//     if(i === 2)
//         break;
//     console.log(cars[i]);
// }

// const name = ["hemant", "kuldeep", "shubham", "vijay"];
// for(let i = 1; i <= i; i++){
//     if(i === 2)
//     console.log(name[i])
// }


// 1. array slicing using the slice operator //
// using the slice operator concept with sperad (...) //
// let numbers = [1,2,3,4,5,6,7,8,9];
// let [frist,...rest]= numbers;
// console.log(frist); // output 1;
// console.log(rest); // output 2,3,4,5,6,7,8,9;

// let [frist, second, third, ...remaning]= numbers;
// console.log(frist);
// console.log(second);
// console.log(third);
// console.log(remaning);

// let names1 = [1, 2, 3, 4, 5, 6, 7 , 8, 9]
// let names2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// let names3 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29,...names1];
// console.log(names3);

// for(let i = (names3.length-1); i >= 0 ; i--){
//     if(i === (names3.length-4)){
//         break;
//     }
//     console.log(names3[i]);
// }


// array method (detailed explation) //
// 1. slice method .
// let color = ["red", "blue", "pink", "yellow", "green", "white", "perpule"];
// let slicedcolor = color.slice(1, 4);
// console.log(color);
// console.log(slicedcolor);

// let lastTwo = color.slice(-2);
// console.log(lastTwo)


// // foreach() - excute function on each element.

// let names = ["hemant", "kuldeep", "ketan", "roopesh", "rajveer"];
// names.forEach((value,index,Array) => {
//       console.log(value);
//       console.log(index);
//       console.log(Array);
// })


// let marks = [45, 55, 65, 75, 85, 95];
// let total = 0 ;
// marks.forEach((value) =>{
//     total += value ;
// })
// console.log(total);


// let salary = [5000, 10000, 15000, 20000];
// let incSlary = [];

// salary.forEach((value) => {
//     let ins = value + 5000 ;
//     incSlary.push(ins);
// })
// console.log(salary);
// console.log(incSlary);


// let color = ["red", "blue", "pink", "yellow", "green", "white", "perpule"];

// color.forEach(function(value) {
//      if(value === "blue"){
//           console.log("true")
//      }
//      else{
//         console.log("false")
//      }
// })


// let oddeven = [20, 50, 65, 40, 30, 50, 80, 95];
// even = [];
// odd = [];
// oddeven.forEach((value) => {
//     if(value % 2 === 0){
//         even.push(value);
//     }
//     else{
//         odd.push(value);
//     }
// })
// console.log(oddeven);
// console.log(even);
// console.log(odd);


// let num = [20, 50, 65, 40, 30, 50, 80, 95];
// true = [];
// false = [];
// truefalse.forEach(function(value){
//     if(num >= 20){
//         true.push(value);
//     }
//     else{
//         false.push(value);
//     }
// })
// console.log(true);
// console.log(false);


// let primeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// let number = primeNum.map((value) => {
//     return value * 2;
// });
// console.log(number);




