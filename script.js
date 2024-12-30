let body = document.querySelector('body');
let container = document.querySelector('.container');
let hadding = document.querySelector('h1');

setInterval(() => {
  let date = new Date(); // Get the current date and time
  let hours = date.getHours().toString().padStart(2, '0'); // Get hours, format as 2 digits
  let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
  let minutes = date.getMinutes().toString().padStart(2, '0'); // Get minutes, format as 2 digits
  let seconds = date.getSeconds().toString().padStart(2, '0'); // Get seconds, format as 2 digits

  // Update the clock display elements
  document.querySelector(".hour").innerHTML = hours;
  document.querySelector(".minute").innerHTML = minutes;
  document.querySelector(".second").innerHTML = seconds;
  document.querySelector('.ampm').innerHTML = ampm;
}, 0);


function switchToggle(event) {
  if (event.target.role === 'switch') {
    body.classList.toggle('dark-mode'); // Toggle dark mode
    container.classList.toggle('glow'); // Toggle glow effect
    hadding.classList.toggle('hadding-color'); // Toggle additional heading color class
  }
}


