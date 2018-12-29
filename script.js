/*var button = document.getElementsByTagName("button")[0];

button.addEventListener("mouseenter", function() {
	console.log("CLIIIIICCCKKKK!!!");
}
)

*/

/*var button = document.getElementById("enter");
var input = document.getElementById("userinput");

button.addEventListener("click", function() {
	console.log("Click is working");

})*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListElement(){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}

function addAfterClick(){
	if (inputLength() > 0){
		createListElement();
	}
}
function AddAfterKeyPress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}
/*
button.addEventListener("click", function() {
	if (input.value.length > 0){
	console.log(input.value);
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	console.log(event);
	if (input.value.length > 0 && event.keyCode === 13){
		console.log(input.value);
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})*/

button.addEventListener("click" , addAfterClick);
input.addEventListener("keypress" , AddAfterKeyPress);