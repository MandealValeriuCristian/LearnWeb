var list = document.getElementById('todo-list')
var btnAdd = document.getElementById('add-item')




btnAdd.addEventListener('click', function(){
    var newListElement = document.createElement('li')
    var textNode = document.createTextNode('List Item '+ (list.childElementCount + 1));
    newListElement.appendChild(textNode)
    newListElement.id = "item" + (list.childElementCount + 1);
    // console.log(newListElement)
    var firstItem = list.firstElementChild
    // list.appendChild(newListElement, firstItem)
    list.insertBefore(newListElement, firstItem)
})
