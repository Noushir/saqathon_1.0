var list = document.getElementById('list');
var list1 = document.getElementById('list1');
var text = document.getElementById('text');
var push = document.getElementById('push');
var stack = document.getElementById('stack');
var click = 0;
list1.innerHTML = '';
class Stack extends Array {
	constructor(...elem) {
		super(...elem);
	}
	unshift_element(ele) {
		super.unshift(ele);
	}
	shift_element() {
		if (this.length === 0) {
			stack.innerHTML = 'Empty Stack Brooo :(';
		} else {
			var ele = list.childNodes[0];
			super.shift();
			list.removeChild(ele);
			return ele;
		}
	}
	display_elements(stack_2) {
		for (let i = 0; i < stack_2.length; i++) {
			var x = document.createElement('li');
			var t = document.createTextNode(stack_2[i]);
			x.appendChild(t);
			list.appendChild(x);
		}
	}
}
const s1 = new Stack();
s1.display_elements(s1);
function Push() {
	var info = text.value;
	if (info == '') {
		console.log('Invalid Input');
	} else {
		s1.unshift_element(info);
		var y = document.createElement('li');
		var u = document.createTextNode(info);
		y.appendChild(u);
		list.appendChild(y);
		list.insertBefore(y, list.childNodes[0]);
	}
}
function Pop() {
	var value = s1.shift_element().textContent;
	var k = document.createElement('li');
	var l = document.createTextNode(value);
	k.appendChild(l);
	list1.appendChild(k);
}
