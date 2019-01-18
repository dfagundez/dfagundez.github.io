// Action for btnStart
// Get the start modal
var startModal = document.getElementById('startModal');

// Get the button that opens the modal
var btnStart = document.getElementById("btnStart");

// Get the <span> element that closes the modal
var startClose = document.getElementById("startClose");

// When the user clicks the button, open the modal
btnStart.onclick = function() {
  startModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
startClose.onclick = function() {
  startModal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == startModal) {
    startModal.style.display = "none";
  }
}*/
// Pendiente para corregir

// Action for btnMe
// Get the me modal
var meModal = document.getElementById('meModal');

// Get the button that opens the modal
var btnMe = document.getElementById("btnMe");

// Get the <span> element that closes the modal
var meClose = document.getElementById("meClose");

// When the user clicks the button, open the modal
btnMe.onclick = function() {
  meModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
meClose.onclick = function() {
  meModal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == meModal) {
    meModal.style.display = "none";
  }
}
*/
// Pendiente para corregir

// Action for btnIdeas
// Get the me modal
var ideasModal = document.getElementById('ideasModal');

// Get the button that opens the modal
var btnIdeas = document.getElementById("btnIdeas");

// Get the <span> element that closes the modal
var ideasClose = document.getElementById("ideasClose");

// When the user clicks the button, open the modal
btnIdeas.onclick = function() {
  ideasModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ideasClose.onclick = function() {
  ideasModal.style.display = "none";
}


// Action for btnBlog
// Get the me modal
var blogModal = document.getElementById('blogModal');

// Get the button that opens the modal
var btnBlog = document.getElementById("btnBlog");

// Get the <span> element that closes the modal
var blogClose = document.getElementById("blogClose");

// When the user clicks the button, open the modal
btnBlog.onclick = function() {
  blogModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
blogClose.onclick = function() {
  blogModal.style.display = "none";
}

// Action for btnTalk
// Get the me modal
var talkModal = document.getElementById('talkModal');

// Get the button that opens the modal
var btnTalk = document.getElementById("btnTalk");

// Get the <span> element that closes the modal
var talkClose = document.getElementById("talkClose");

// When the user clicks the button, open the modal
btnTalk.onclick = function() {
  talkModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
talkClose.onclick = function() {
  talkModal.style.display = "none";
}
