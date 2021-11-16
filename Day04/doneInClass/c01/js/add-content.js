//convert to class demo method, eliminating the bad practice of document.write
'use strict';

let today = new Date();
let hourNow = today.getHours();
let greeting; 

if(hourNow > 18){
	greeting = 'Good Evening!';
}else if(hourNow > 12){
	greeting = 'Good Afternoon!';
}else if(hourNow > 0){
	greeting = 'Good Morning!';
}else{
	greeting = 'Welcome!';
}

//document.write('<h3>'+greeting+'</h3>') //from book

let newEl = document.createElement('h3');
newEl.appendChild(document.createTextNode(greeting));

let ref = document.querySelector('h1');


function insertAfter(el, referenceNode){
	referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);

}

insertAfter(newEl, ref)