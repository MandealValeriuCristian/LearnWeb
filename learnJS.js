var currentDay = 'Sun'
if (currentDay == 'Mon')
console.log('Timmings: 10:00-6:00')
else if(currentDay == 'Tue')
console.log('Timmings: 9:00-5:00')
else if(currentDay == 'Wed')
console.log('Timmings: 9:30-5:30')
else if(currentDay == 'Thu')
console.log('Timmings: 10:15-6:15')
else if(currentDay == 'Fri')
console.log('Timmings: 9:05-5:05')
else if(currentDay == 'Sat')
console.log('Timmings: 9:00-5:00')
else if(currentDay == 'Sun')
console.log('Timmings: 9:00-1:00')

switch(currentDay){
    case 'Mon':
        console.log('Timmings: 10:00-6:00')
        break;
    case 'Tue':
        console.log('Timmings: 9:00-5:00')
        break;
    case 'Wed':
        console.log('Timmings: 9:30-5:30')
        break;
    case 'Thu':
        console.log('Timmings: 10:15-6:15')
        break;
    case 'Fri':
        console.log('Timmings: 9:05-5:05')
        break;
    case 'Sat':
        console.log('Timmings: 9:00-5:00')
        break;
    case 'Sun':
        console.log('Timmings: 9:00-1:00')
        break;
}

