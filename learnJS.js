console.log("Script Loaded")
var mainHeading = document.getElementById("main-heading");
var btnDecreaseFont = document.getElementById("btn-decrease");
var btnIncreaseFont = document.getElementById("btn-increase");

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.Length - 2)));

// mainHeading.style.fontSize = parseInt(initialFontSize) +100 +"px"
btnIncreaseFont.onclick = function(){
    initialFontSize += 10;
    mainHeading.style.fontSize = initialFontSize+"px";
}
btnDecreaseFont.addEventListener("click", function(){
    initialFontSize -= 10;
    mainHeading.style.fontSize = initialFontSize+"px";
})
// console.log(btnDecreaseFont.style)
// console.log(btnIncreaseFont.style.marginRight)

// console.log(window.getComputedStyle(btnDecreaseFont).textdecoration)