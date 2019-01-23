// JavaScript Document

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};
window.onresize = function() {updateBarLoc()};
// Get the header

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
// Get the offset position of the navbar


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

  	if (window.pageYOffset > sticky) {
    	header.classList.add("sticky");
  	} else {
    	header.classList.remove("sticky");
  }
}

function updateBarLoc(){
	header = document.getElementById("myHeader");
	sticky = header.offsetTop;
}
