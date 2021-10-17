var myFirstString = "This is a string for Javascript string functions"

// retunrs the length of the string
console.log(myFirstString.length)

// find index of a string insde another string
console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('This'))

// find LAST index of a string inside another string
console.log(myFirstString.lastIndexOf('Javascript'))
console.log(myFirstString.lastIndexOf('This'))

// get a part of our string slice(start, end)
console.log(myFirstString.slice(0,4))
console.log(myFirstString.slice(21,31))
console.log(myFirstString.slice(-10)) 
console.log(myFirstString.slice(5))

// get sub string function - substr(startPos, length)
console.log(myFirstString.substr(0,4))
console.log(myFirstString.substr(21,10))
console.log(myFirstString.substr(21))
