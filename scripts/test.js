
document.querySelector('h1').onclick=function(){
	var heading=document.querySelector('h1');
	heading.innerHTML = "Gardens";
}
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/flowers.jpg'){
		myImage.setAttribute('src', 'images/Herbst.jpg');
	}
	else{
		myImage.setAttribute('src','images/flowers.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading= document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = " Your garden is cool , "+myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML = " Your garden is cool , "+storedName;
}
myButton.onclick = function(){
	setUserName();
} 