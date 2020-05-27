/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  const time = timeString.split(':');
  const hour = parseInt(time[0], 10);

  if (hour < 12) {
    displayMessage('Good Morning');
  } else if (hour >= 12 && hour <= 17) {
    displayMessage('Good Afternoon');
  } else {
    displayMessage('Good Evening');
  }
}
/* Write your implementation of displayMessage() */
// When the function runs it should update the text inside the #greeting node with the content of the argument.
// It does not return anything.
// <h1 id="greeting"></h1>
function displayMessage(greeting) {
  document.getElementById('greeting').innerText = greeting;
}
