var Friends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
console.log(Friends)
console.log(typeof(Friends))

console.log(Friends[1])

// update a value
Friends[0] = 'Shawn'
console.log(Friends)

// add more items
Friends[6] = 'Alan'
console.log(Friends)

Friends[10] = 'Tiffany'
console.log(Friends)

Friends[Friends.length] = 'Rob'
console.log(Friends)

Friends.push('Jack')
console.log(Friends)

// delete a value
var name= Friends.pop()
console.log(name)
console.log(Friends)