console.log('Script Loaded')
var btn = document.getElementById('btn-click')
var mainDiv = document.querySelector("header div")
function onBtnClick(){
    var randomNum = Math.floor(Math.random() * 255)
    
    mainDiv.style.backgroundColor = "rgb("+Math.floor(Math.random() * 255)
    + "," + Math.floor(Math.random() * 255) + ","
     + Math.floor(Math.random() * 255)+")"
}
// btn.onclick = onBtnClick;
// btn.addEventListener('click', function(){
//     alert('Anonymous Function Called')
// })

btn.addEventListener('click', onBtnClick)