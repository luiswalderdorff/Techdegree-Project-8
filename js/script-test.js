
// Button to Exit the modal window
exitButton.addEventListener("click", function(e) {
  event.target.parentNode.style.display = "none";
})

// Click outside the modal window to close it
window.addEventListener("click", function (e) {
  if(.modalBox.style.display = "block" && event.target !== .modalBox) {
    .modalBox.style.display = "none";
  }
})

//searchbox
function searchBox () {
	// Declare variables
	var input, filter, slides, slide, picture, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	slides = document.getElementsByClassName('slides');
	slide = document.getElementsByClassName('slide');

	// Loop through all slide(s) and hide those who dont match the search query
	for (i = 0; i < slide.length; i++) {
		boxText = slide[i].getElementsByTagName("p")[0];
		if (boxText) {
			if (boxText.innerHTML.toUpperCase().indexOf(filter) > -1) {
				slide[i].style.display = "";
			} else {
				slide[i].style.display = "none";
			}
		}
	}
}

// Arrows to move between modal windows
arrowRight.addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
  e.target.parentNode.nextSibling.display = "block";
})

arrowLeft.addEventListener("click", function (e) {
  e.target.parentNode.style.display = "none";
  e.target.parentNode.previousSibling.display = "block";
})
