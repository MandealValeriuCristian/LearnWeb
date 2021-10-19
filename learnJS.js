var nAgera = {
    name: "Agera",
    manufacturer:{
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function(){
        setTimeout(function(){
            console.log('Car Stopped')        
        }, 5000)
    }
}

console.log(nAgera.name)
console.log(nAgera.topSpeed)
console.log(nAgera.manufacturer)
console.log(nAgera.manufacturer.name)
// console.log(nAgera.applyBrakes())
console.log(nAgera.applyBrakes)