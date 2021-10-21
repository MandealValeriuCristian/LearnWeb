var list = [1, 2, 3, 4, 5]
// var position;
// for(position=0; position < list.length; position++)
// console.log('Position => ' + position + ' Value => '+ list[position])

// break keyword
var position;
for(position=0; position < list.length; position++){
if(position >= 3) break
console.log('Position => ' + position + ' Value => '+ list[position])
}

// continue keyword
var position
for(position = 0; position < list.length; position++)
{if(position % 2 !==0) continue
    console.log('Position => ' + position + ' Value => '+ list[position])
}