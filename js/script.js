// Variables
const randomAPI ="https://randomuser.me/api/?results=12";

const randomOptions = {
  url: 'https://randomuser.me/api/?results=12',
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
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
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


  }; // end each

  // Hidden Modal Interface: Try to create it when clicked. The one that is needed
  // var modalHTML = '<ul class="modal" id="mod">';
  // data.forEach(function(results) {
  //   modalHTML += `<li class="modal-box">`;
  //   modalHTML += '<img class="modal-pic" src="' + results.picture.large + '">';
  //   modalHTML += `<p>${results.name.first} ${results.name.last}</p>`;
  //   modalHTML += `<p>${results.email}</p>`;
  //   modalHTML += `<p>${results.cell}</p>`;
  //   modalHTML += `<p>${results.location.street}, ${results.location.city}, ${results.location.state}, ${results.location.postcode}</p>`;
  //   modalHTML += `<p>${results.dob.date.substring(0.10)}</p></li>`;
  // }) // end each
  // modalHTML += '</ul>';
  // modalClass.innerHTML = modalHTML;

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

$(document).ready(
  $(".user-box").click( function () {
    console.log("clicked");
  })
)
