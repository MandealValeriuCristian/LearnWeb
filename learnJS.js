var username = document.getElementById('username');
var loginForm = document.getElementById('login-form');
username.addEventListener('input', function(){
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    username.value=currentValue;
    console.log(currentValue)
})
username.addEventListener('focus', function(){
    console.log('Element Focussed')
})
username.addEventListener('blur', function(){
    console.log('Element Lost Focus')
})

loginForm.addEventListener('submit', function(e){
    alert('Submit Button Clicked')
    e.preventDefault();
})