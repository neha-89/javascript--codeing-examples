//charAt():The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
const str = "cat";
//console.log(str.charAt(1));
//charCodeAt():The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
//console.log(str.charCodeAt(2));
//codePointAt():The codePointAt() method returns a non-negative integer that is the UTF-16 code point value.
//console.log(str.codePointAt(1));
//concat():The concat() method concatenates the string arguments to the calling string and returns a new string.
const str1 = "top";
//console.log(str.concat(',',str1));
//endsWith():The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
//console.log(str.endsWith("t"));
//String.fromCharCode():The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
//console.log(String.fromCharCode(189,43,190,61));
//String.fromCodePoint(): The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.
//console.log(String.fromCodePoint(9731, 9733, 9842, 0x2F804));
//includes:The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
//console.log(str.includes("t"));
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
//console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
//indexOf():The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
//console.log(str.indexOf("t"));
//lastIndexOf():The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
//console.log(sentence.lastIndexOf("t"));
//localCompare():The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
//console.log(str.localeCompare(str1 ,  'en', { sensitivity: 'base' }));
//match():The match() method retrieves the result of matching a string against a regular expression.
const regex = /[A-Z a-z]/g;
//console.log(sentence.match(regex));
//matchAll():The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
const regexp = /t(e)(st(\d?))/g;
const str2 = 'test1test2';
const array = [...str2.matchAll(regexp)];
//console.log(array[0]);
//console.log(array[1]);
//normalize:The normalize() method returns the Unicode Normalization Form of the string.
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';
//console.log(`${name1}, ${name2}`);
// expected output: "Amélie, Amélie"
//console.log(name1 === name2);
// expected output: false
//console.log(name1.length === name2.length);
// expected output: false
const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');
//console.log(`${name1NFC}, ${name2NFC}`);
// expected output: "Amélie, Amélie"
//console.log(name1NFC === name2NFC);
// expected output: true
//console.log(name1NFC.length === name2NFC.length);
// expected output: true

//padEnd(): The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
//console.log(str.padEnd(25,"."));

//padStarts():The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
console.log(str.padStart(6,123));

//String.raw():The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template literals, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.
console.log()






