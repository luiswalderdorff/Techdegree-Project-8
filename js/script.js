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
    userHTML += `<div class="user-info"><p>${capitalize(results.name.first)} ${capitalize(results.name.last)}</p>`;
    userHTML += `<p>${capitalize(results.location.city)}</p>`;
    userHTML += `<p>${results.email}</p></div></li>`;
  })
  userHTML += '</ul>';
  usersClass.innerHTML = userHTML;

  // Hidden Modal Interface: Try to create it when clicked. The one that is needed
  var modalHTML = '<ul class="modal" id="mod">';
  data.forEach(function(results) {
    modalHTML += `<li class="modal-box">`;
    modalHTML += '<div class="modal-first"> <p class="x-close">X</p> <img class="modal-pic" src="' + results.picture.large + '">';
    modalHTML += `<p>${capitalize(results.name.first)} ${capitalize(results.name.last)}</p>`;
    modalHTML += `<p>${capitalize(results.location.city)}</p></div>`;
    modalHTML += `<div class="modal-second" <p>${results.email}</p>`;
    modalHTML += `<p>${results.cell}</p>`;
    modalHTML += `<p>${capitalize(results.location.street)}, ${capitalize(results.location.state)}, ${results.location.postcode}</p>`;
    modalHTML += `<p>Birthday: ${results.dob.date.substring(0,10)}</p><div class="arrows"<span class="left-arrow">&#8592</span><span class="right-arrow">&#8594</span></div></div></li>`;
  }) // end each
  modalHTML += '</ul>';
  modalClass.innerHTML = modalHTML;


  }; // end each













  $(document).ready(
    $(".user-box").click( function () {
      console.log("clicked");
    })
  )

// if (.modal-pic.src === .user-pic.src) then show. Loop through the different modal boxes. is the first modal-box = modal[0]?
// .modal.children[i]

  // Open modal on Click
  //write of for loop with an if statement to only show the right modal window

// usersClass.addEventListener('click',function(e){
//   for(let i = 0; i >= usersClass.length; i++) {
//     if
//      document.getElementById("mod").style.display = "block";
//    }
// });
// $(document).on("click", ".user-box", function(e) {
//   if ()
//   $(".modal").show();
// })
