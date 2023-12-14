/*var isLoggedIn = localStorage.getItem('isLoggedIn');
if (isLoggedIn != 'true'){
  alert('Please log in.');
  window.location.href = "index.html"
}
*/
if(window.sessionStorage.isLoggedIn != "yes"){
  alert('Please log in.');
  window.location.href = "/index.html";
}
