// let sum = 0; 
// let n = 7;
// for (let i = 0; i <= n; i++) {
//     sum += 1;
// }

// console.log("sum is: ", sum);

// // ============================================================================

// // for-of loop - they help us to iterate on some special data types. works with strings and arrays.

// let str = "rishabh", size = 0;
// for (let val of str) { // val => iterator -> which is storing the characters
//     console.log(val);
//     size++;
// }
// console.log("number of characters = ", size);
// // ============================================================================

// // for-in loop

// let student = {
//     name: "Rishabh",
//     age: 22,
//     cgpa: 8.9,
//     isPass: true,
// };

// for (let key in student) {
//     console.log("key = ", key, "whose value is = ", student[key]); // student[key = name/age/cgpa...]

// }

// // ============================================================================

// // practice question;
// // Q.1 print all even numbers from 0 - 100
// let i = 0;
// while (i <= 100) {
//     if (i % 2 == 0) { // = = loose comparision, = = = strict comparision
//         console.log(i);
//     };  
//     i++;
// }

// // ============================================================================

// // Q.2 create a game where we start with any random number. ask the user to keep guessing the game number until the user enters correct value.
let guess = false; 

ans = prompt("should we start: yes/no");
if (ans == "yes") {
    do {
        randNo = Math.ceil(Math.random() * 10);
        // randNo = 6;
        userInp = prompt("enter your guess (a number): ")
    
        console.log("your guess = ", userInp, "Computer guess = ", randNo);
        if (randNo == userInp) {
            guess = true;
            alert("you guessed it right!");
        }
    } while (guess != true)
} else {
    alert("See ya later!")
}
