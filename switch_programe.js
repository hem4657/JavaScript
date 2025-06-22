// Weekday Finder //
let day = "sunday";
 switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");
 }

 // month name finder //
 let month = "jaunery"
 switch (month){
    case 0:
        console.log("jaunery");
    break;
    case 1:
        console.log("february");
    break;
    case 2:
        console.log("march");
    break;
    case 3:
        console.log("aprial");
    break;
    case 4:
        console.log("may");
    break;
    case 5:
    console.log("june");
    break;
    case 6:
        console.log("july");
    break;
    case 7:
        console.log("august");
    break;
    case 8:
        console.log("september");
    break;
    case 9:
        console.log("october");
    break;
    case 10:
        console.log("november");
    break;
    case 11:
        console.log("december");
    break;
    default :
    console.log("invalid month");
 }

 // Traffic Light System //
 let signal = "red";
 switch (signal){
    case "red":
        console.log("stop");
    break;
    case "yellow":
        console.log("get ready");
    break;
    case "green":
        console.log("go");
    break;
    default :
    console.log("invalid signal");
 }

 // Grade System //
 let marks = 85;
 switch (true){
    case (marks >= 90):
      console.log("grade: A");
    break;
    case (marks >= 80):
        console.log("grade: B");
    break;
    case (marks >= 70):
        console.log("grade: C");
    break;
    case (marks >= 60):
        console.log("grade: D");
    break;
    default:
        console.log("grade: F");
 }

 // Currency Converter //
 let Currency = "USD";
 switch (Currency){
    case "USD":
        console.log("Doller");
    break;
    case "EUR":
        console.log("Euro");
    break;
    case "INR":
        console.log("Indian rupee");
    break;
    case "JPY":
        console.log("Japanese Yen");
    break;
    default:
        console.log("Unknown currency");
 }

 // Movie Ticket Price Based on Age //
 let age = 17;
 switch (true){
    case (age < 12):
        console.log("Childe ticket: $5");
    break;
    case (age >= 12 && age < 60):
        console.log("Audult ticket: $10");
    break;
    case (age >= 60):
        console.log("Senior ticket: $7");
    break;
    default:
        console.log("Invalid age");
 }

 // E-Commerce Discount System //
 let membership = "gold";
 switch (membership){
    case "silver":
        console.log("5% discount");
    break;
    case "gold":
        console.log("10% discount");
    break;
    case "platinum":
        console.log("20% discount");
    break;
    default:
        console.log("No discount");
 }

 // Water Bill Calculator //
 let units = 120;
 switch (true){
    case (units <= 50):
        console.log("bill: $10");
    break;
    case (units <= 100):
        console.log("bill: $20");
    break;
    case (units <= 200):
        console.log("bill: $30");
    break;
    default:
        console.log("bill: $50");
 }

 // El