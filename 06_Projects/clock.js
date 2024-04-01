//const clock = document.getElementById('clock');
const clock = document.querySelector('#clock'); //both will run same

// here we use setInterval to run continiously out time in which two parameter are passed
setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); // as it is likhna hai
