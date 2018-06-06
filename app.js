const github = new Github();

//UI elements
const searchUser = document.getElementById('search-user');


// Event listener
searchUser.addEventListener('keyup', function(e) {
  const userText = e.target.value;
  
  if(userText !== '') {
    // Make http request
    github.getUser(userText)
    .then(data => {
      console.log(data);
    })
  }
});