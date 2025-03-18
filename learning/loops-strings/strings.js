let str = "Rishabh Jaiswal" // escape characters (\n,\t) - though being 2 in characters are still counted as one in the run time.
let strTrim = " Rishabh   "
console.log(str)
console.log(str.length)

// string methods/functions - method means kuch kaam karna

console.log("new value: ", str.toUpperCase()); // (methods does not alter the actual value, instead it always returns a new value.)
console.log("original string: ", str);

console.log("str.toUppercase: ", str.toUpperCase())
console.log("str.toLowercase: ", str.toLowerCase())
console.log("original before trim: ", strTrim)
console.log("str.trim: original ( Rishabh   ): ", strTrim.trim()) // removes extra/ not important white spaces from the string.

console.log("str.slice(start,end): ", str.slice(4,9)) // end index is non-inclusive. 

console.log("str1.concat(str2): ", str.concat(strTrim))
console.log("concat using + (str + strTrim): ", str + strTrim)

let rep = "bhbhakti"

console.log("str.replace(searchVal, replaceVal): ", rep.replace("b", "s"))
console.log("str.replaceAll(searchVal, replaceVal): ", rep.replaceAll("b", "s"))

// strings are immutable
let estr = "immutable";
estr[0] = "m"
console.log(estr)

// PRACTICE =====================================

let userName = prompt("enter you name here to generate your username:")
// remove spaces - using regex.
let noSpace = userName.replace(/\s+/g, ""); // regex are not enclosed in "".
// let noSpace = userName.split(" ").join("")
let lowercase = noSpace.toLowerCase();
alert(`@${lowercase}${lowercase.length}`)