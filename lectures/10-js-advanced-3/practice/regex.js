// Regular Expressions
// There are two ways of defining a regular expression in JavaScript.

// Regular Expression Literal
//  You can use a regular expression literal and enclose the pattern between slashes.
// This is evaluated at compile time and provides better performance if the regular expression stays constant.
let rgx = /^(\d+)/;

// Constructor Function
//  The constructor function is useful when the regular expression may change programmatically. These are compiled during runtime.
let regex = new RegExp("^(d+)");

// test()
// The test() method executes a search for a match between a regular expression and a specified string.
// Returns true or false.
let str1 = "Hello, world!";
let regex1 = /world/;
console.log(regex1.test(str1)); // Output: true

// search()
// The search() method executes a search for a match between a regular expression and this String object.
// Returns the index of the start of the match, or -1 if no match was found.
let str2 = "Hello, world!";
let regex2 = /world/;
console.log(str2.search(regex2)); // Output: 7

// match()
// The match() method retrieves the result of matching a string against a regular expression.
// If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.
let str3 = "Hello, world, world!";
let regex3 = /world/g;
console.log(str3.match(regex3)); // Output: ["world", "world"]

// exec()
// The exec() method executes a search for a match in a specified string.
// Returns a result array, or null. The resulting array has an extra input property, which includes the original string that was parsed.
let str4 = "Hello, world!";
let regex4 = /world/;
console.log(regex4.exec(str4)[0]); // Output: world

// replace()
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
// The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
let str5 = "Hello, world!";
let regex5 = /world/;
console.log(str5.replace(regex5, "universe")); // Output: Hello, universe!

// split()
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
// The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.
let str6 = "Hello1world2!";
let regex6 = /\d/;
console.log(str6.split(regex6)); // Output: ["Hello", "world", "!"]
