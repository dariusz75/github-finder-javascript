//Initialise github object from Github class in github.js file
const githubData = new Github();


$(document).ready(function() {
  $('#example').DataTable( {
      "ajax": githubData.repos,
      "columns": [
          { repos: name }
      ]
  } );
  console.log('dupe');
} );