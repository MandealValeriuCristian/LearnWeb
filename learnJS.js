console.log('Script Loaded')

var countdownElement=document.getElementById('countdown')
var bgImageElement = document.getElementById('bg-image')

var initialCountdownVal = countdownElement.innerHTML

setInterval(function() {
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal -1 : 0;

    countdownElement.innerHTML=initialCountdownVal;
    var backImgPath = initialCountdownVal % 2 === 0? '/assets/background-1.jpg' : '/assets/background-2.jpg'
    bgImageElement.className = 'BackImage'
    bgImageElement.src = backImgPath;
}, 1000);
