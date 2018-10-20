// Variables
const randomAPI ="https://randomuser.me/api/?results=12";

const randomOptions = {
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
};

const usersClass =  document.querySelector(".users");
const modalClass= document.querySelector('.modal');

// Fetch Request

fetch(randomAPI)
  .then(response => response.json())
  .then(data => {
    users = data.results;
    displayUsers(users);
});

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

    // Hidden Modal Interface
    var modalHTML = '<ul class="modal"';
    data.forEach(function(results) {
      modalHTML += `<li class="modal-box">`;
      modalHTML += '<img src="' + results.picture.large + '"></li>';
      modalHTML += `<p>${results.name.first} ${results.name.last}</p>`;
      modalHTML += `<p>${results.email}</p>`;
      modalHTML += `<p>${results.cell}</p>`;
      modalHTML += `<p>${results.location.street}, ${results.location.city}, ${results.location.state}, ${results.location.postcode}</p>`;
      modalHTML += `<p>${results.dob.date.substring(0.10)}</p>`;
    }) // end each
    modalHTML += '</ul>';
    modalClass.innerHTML = modalHTML;
  }; // end each


  // Open modal on Click
