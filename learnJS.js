var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-item')
var inputBox = document.getElementById('todo-input')
var currentInputValue = '';
inputBox.addEventListener('input', function(e){
    currentInputValue = e.target.value;
})

inputBox.addEventListener('keyup', function(e){
    if(e.keyCode == 13)
    {
        addListItem();
    }
    // alert('Enter Clicked')
})
function addListItem(){
    if(currentInputValue !== undefined && currentInputValue !== null 
        && currentInputValue !== '')
        {
            var newListElement = document.createElement('li')
            var textNode = document.createTextNode(currentInputValue);
            newListElement.appendChild(textNode)
            newListElement.id = "item" + (list.childElementCount + 1);
            
            
            list.appendChild(newListElement)
            console.log(list.childElementCount)
            inputBox.value = ''
            currentInputValue = ''
        
        }
        else{
            alert('Please enter a valid TODO item')
        }
    }
btnAdd.addEventListener('click', addListItem)
