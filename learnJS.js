var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-item')
var inputBox = document.getElementById('todo-input')
var currentInputValue = '';
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')
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
            var newListElement = createNewNode();
            
            
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
function createNewNode(){
    var newListElement = document.createElement('li')
            var textNode = document.createTextNode(currentInputValue);
            newListElement.appendChild(textNode)
            newListElement.id = "item" + (list.childElementCount + 1);
            return newListElement; 
}
btnUpdate.addEventListener('click', function()
{
    var firstElement = list.firstElementChild;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement)
})
btnRemove.addEventListener('click', function(){
    var firstElement =list.firstElementChild;
    list.removeChild(firstElement)
})