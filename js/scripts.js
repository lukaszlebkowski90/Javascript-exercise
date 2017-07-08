var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
  var order = list.getElementsByTagName('li');
  element.getElementsByTagName('li');
  element.innerHTML = 'item '+ order.length;
  list.appendChild(element);
});


