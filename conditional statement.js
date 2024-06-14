// // condiional statement if
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting);
// }


// //conditional statement with if/else
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }


// example from a.i to better undertand conditional statement 
let hour = new Date().getHours(); // get the current hour
let greeting;

if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
} else {
    greeting = "Good evening";
}

console.log(greeting);
