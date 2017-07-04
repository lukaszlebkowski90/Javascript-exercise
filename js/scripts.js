var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
  element.innerHTML = 'item '+ order.length;
  element.getElementsByTagName('li');
  list.appendChild(element);
});
var order = list.getElementsByTagName('li');

