/* Chapter 1: Arrays and Strings Practice Problems */

/* 1.1 Is Unique:

Implement an algorithm to determine if a string has all unique characters.

What if you cannot use additional data structures?

*/
// INPUT - string
// OUTPUT - true or false

// break apart the string into each character
// all to lowercase so equal
// determine if there are any repeating characters

// with additional array
function uniqueChar(str){
let splitStr = str.toLowerCase().split('')
for (i = 0; i < splitStr.length; i++) {
  for (j = i+1; j < splitStr.length; j++){
    if (splitStr[i] != splitStr[j]) {
      continue
    } else {
      return false
    }
  }
}
return true
}


// w/o additional data structures - sort
function uniqueCharTwo(str) {
  let sortedStr = str.split('').sort()
  for (i = 0; i < sortedStr.length; i++) {
    if (sortedStr[i] === sortedStr[(i + 1)]) {
      return false
    } 
  }
  return true
}

console.log(uniqueChar('abfcde')) 
console.log(uniqueCharTwo('dab')) 


/* 1.2 Check Permutation:

Given two strings, write a method to decide if one is a permutation of the other.

*/

/* 1.3 URLify:

Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

EXAMPLE
Input: "Mr John Smith  ", 13
Output: "Mr%20John%20Smith"

*/

/* 1.4 Palindrome Permutation:

Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.

EXAMPLE
Input: Tact Coa
Output: True (permutations: 'taco cat', 'atco cta', etc.)

*/

/* 1.5 One Away:

There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

EXAMPLE
pale, ple => true
pales, pale => true
pale, bale => true
pale, bake => false

*/

/* 1.6 String Compression:

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string. You can assume the string has only upper and lowercase letters (a-z)

*/

/* 1.7 Rotate Matrix:

Given an image represented by an N X N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

*/

/* 1.8 Zero Matrix:

Write an algorithm such that if an element in an M X N matrix is 0, its entire row and columns are set to 0.

*/

/* 1.9 String Rotation:

Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.

EXAMPLE
'waterbottle' is a rotation of 'erbottlewat'

*/
