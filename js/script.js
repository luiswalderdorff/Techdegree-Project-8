// Variables
const randomAPI ="https://randomuser.me/api/?results=12&nat=us,gb";

const randomOptions = {
  url: 'https://randomuser.me/api/?results=12?nat=us,gb',
  dataType: 'json',
};

const usersClass =  document.querySelector(".users");
const modalClass = document.querySelector('.modal');
const userBox = document.querySelector(".user-box");

// Fetch Request

let userData;

fetch(randomAPI)
  .then(response => response.json())
  .then(data => {
    users = data.results;
    displayUsers(users);
    // Functions for dynamically created elements
    $(document).ready(
      //open the equivalent modal window
      $(".user-box").click( function (e) {
        const click = e.target;
        for(let i = 0; i <= $(".modal-box").length-1; i++) {
          if(click.parentNode.children[0].src === $(".modal-box")[i].children[0].children[1].src || click.parentNode.parentNode.children[0].src === $(".modal-box")[i].children[0].children[1].src || click.parentNode.parentNode.parentNode.children[0].src === $(".modal-box")[i].children[0].children[1].src) {
          $(".modal-box").eq(i).show();
          $("#mod").show();

        }
      }
    }

  ));


    //Close modal window with the x
    $(".x-close").click(function(e) {
      e.target.parentNode.parentNode.style.display = "none";
      $("#mod").hide();
    })
    // Arrows to move between modal windows
    $(".left-arrow").click(function (e) {
      if (e.target.parentNode.parentNode.parentNode.previousSibling !== null) {
      e.target.parentNode.parentNode.parentNode.style.display = "none";
      e.target.parentNode.parentNode.parentNode.previousSibling.style.display = "block";
    }

    })

    $(".right-arrow").click(function (e) {
      if (e.target.parentNode.parentNode.parentNode.nextSibling !== null) {
      e.target.parentNode.parentNode.parentNode.style.display = "none";
      e.target.parentNode.parentNode.parentNode.nextSibling.style.display = "block";
    }
    })
    searchBox();

}).then(data => userData = data);

console.log(userData);

//Capitalize Words

const capitalize = (s) => {
  if (typeof s !== 'string') {
    return '';
  } else {
  return s.replace(/\w\S*/g, function (txt) { //dont quite understand ths function
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });}
}
// Create HTML
function displayUsers(data) {
  //Visible Users
  var userHTML = '<ul>';
  data.forEach(function(results) {
    userHTML += `<li class="user-box">`;
    userHTML += '<img src="' + results.picture.large + '" class="user-pic">';
    userHTML += `<div class="user-info"><p><strong>${capitalize(results.name.first)} ${capitalize(results.name.last)}</strong></p>`;
    userHTML += `<p>${capitalize(results.location.city)}</p>`;
    userHTML += `<p>${results.email}</p></div></li>`;
  })
  userHTML += '</ul>';
  usersClass.innerHTML = userHTML;

  // Hidden Modal Interface: Try to create it when clicked. The one that is needed
  var modalHTML = '<ul class="modal" id="mod">';
  data.forEach(function(results) {
    modalHTML += `<li class="modal-box">`;
    modalHTML += '<div class="modal-first"> <p class="x-close">&times</p> <img class="modal-pic" src="' + results.picture.large + '">';
    modalHTML += `<p><strong>${capitalize(results.name.first)} ${capitalize(results.name.last)}</strong></p>`;
    modalHTML += `<p>${capitalize(results.location.city)}</p></div>`;
    modalHTML += `<div class="modal-second" <p>${results.email}</p>`;
    modalHTML += `<p>${results.cell}</p>`;
    modalHTML += `<p>${capitalize(results.location.street)}, ${capitalize(results.location.state)}, ${results.location.postcode}</p>`;
    modalHTML += `<p>Birthday: ${results.dob.date.substring(0,10)}</p><div class="arrows"><span class="left-arrow">&#8592</span><span class="right-arrow">&#8594</span></div></div></li>`;
  }) // end each
  modalHTML += '</ul>';
  modalClass.innerHTML = modalHTML;


  }; // end each


// Button to Exit the modal window




//searchbox
function searchBox () {
	// Declare variables
	var input, filter, users, user, picture, i;
	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	users = $(".users ul");
	user = $(".user-box");

	// Loop through all user(s) and hide those who dont match the search query
	for (i = 0; i < user.length; i++) {
		boxText = user[i].getElementsByTagName("p")[0];
		if (boxText) {
			if (boxText.innerHTML.toUpperCase().indexOf(filter) > -1) {
				user[i].style.display = "";
			} else {
				user[i].style.display = "none";
			}
		}
	}
}
