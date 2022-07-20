function newElement(){
    
    var item = document.getElementById("myInput").value
    var text = document.createTextNode(item)
    
    var newItem = document.createElement("li")
    
    newItem.appendChild(text)
    
    document.getElementById("myUL").appendChild(newItem)
 
  }


var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        clear(ev.target);
        }
    }, false);

function clear(element) {
    var div = element;
    div.style.display = "none";
};

