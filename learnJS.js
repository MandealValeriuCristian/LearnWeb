var exampleString = "This is Javascript tutorial"

// toUpperCase() - it converts our string -> uppercase characters
console.log(exampleString.toUpperCase())

// toLowerCase() - it converts our string -> lowercase characters
console.log(exampleString.toLocaleLowerCase())

// concat() - it merges two or more strings
var firstName = "JavaScript"
var lastName = "Playground"
console.log(exampleString.concat(firstName))
console.log(exampleString.concat(' ',firstName,' ' ,lastName))

// we can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)

// trim() - it removes extra spaces
var extraSpaceString = '               my string         '
console.log(extraSpaceString.trim())

var extraSpaceStringExample2 = '             mystring        '
console.log(extraSpaceStringExample2.trim())

// charAt() -> this take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))
console.log(charAtExampleString.charAt(11))

// split() - splits our string on the bases of the arguments passed
var sampleString = "This is my sample string"
console.log(sampleString.split(' '))

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(','))

var sampleString3 = "This is awesome"
console.log(sampleString3.split())