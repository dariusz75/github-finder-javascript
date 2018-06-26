//Initialise new object from Github class in github.js file
const github = new Github();

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
        console.log('User not found');
      } else {
        console.log(data);
      }
      
    })
  } else {
    //clear profile
    
  }
});