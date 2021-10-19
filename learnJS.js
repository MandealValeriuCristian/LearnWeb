var Friends = ['Shaw', 'Clara', 'Vab', 'Kun', 'Jacob', 'Dina']
Friends.splice(3, 0, 'Donna', 'Rachel')
console.log(Friends)

// 1st tells where to start
// 2nd tells how many items to be deleted
// 3rt and 4th and so on tells what items to be added
console.log(Friends)

Friends.splice(0, 0, 'Harvey')

// delete item at specific position
Friends.splice(2,1)
console.log(Friends)

Friends.splice(0,2)
console.log(Friends)

// concatenation
var OfficeFriends = ['Nina', 'Aron', 'Katie', 'Vic', 'Paul']
var AllFriends = Friends.concat(OfficeFriends)
console.log('==========================')
console.log(Friends)
console.log(OfficeFriends)
console.log(AllFriends)

// sorting ascending and descending

AllFriends.sort();
console.log(AllFriends)

AllFriends.reverse()
console.log(AllFriends)