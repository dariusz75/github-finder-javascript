//Initialise github object from Github class in github.js file
const github = new Github();
//Initialise ui object from Github class in ui.js file
const ui = new UI();

//#### UI elements
//Search input
const searchUser = document.getElementById('search-user');


//Search input Event listener
searchUser.addEventListener('keyup', function(e) {
  const userText = e.target.value;

  if(userText !== '') {
    // Make http request
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        //show alert
        ui.showAlert();
      } else {
        //show profile
        ui.showProfile(data.profile);
      }
      
    })
  } else {
    //clear profile
    ui.clearProfile();
  }
});