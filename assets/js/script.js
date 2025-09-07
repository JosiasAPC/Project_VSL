/*---------------------- SCRIPT RANDOM NUMBER AND ELAPSED TIME*/
// Initial values
let currentNumber = 7.238;
let minutesElapsed = 15;
let currentDirection = Math.random() > 0.5 ? 1 : -1;

// Function to update the random number
function updateNumber() {
  const step = Math.random() * 0.2 + 0.1; // Small random step
  currentNumber += step * currentDirection;

  if (currentNumber >= 8.891 || currentNumber <= 7.123) {
    currentDirection *= -1; // Reverse direction when hitting bounds
  }

  document.getElementById("randomNumber").textContent =
    currentNumber.toFixed(3);
}

function updateTime() {
  minutesElapsed++;

  let timeString;
  if (minutesElapsed < 60) {
    timeString = `${minutesElapsed} minutes ago`;
  } else {
    const hours = Math.floor(minutesElapsed / 60);
    timeString = hours === 1 ? `1 hour ago` : `${hours} hours ago`;
  }

  document.getElementById(
    "timeElapsed"
  ).textContent = `Started streaming ${timeString}`;
}

function startUpdating() {
  setInterval(updateNumber, 3000); // Update number every 3 seconds
  setInterval(updateTime, 60000); // Update time every minute
}

window.onload = startUpdating;
/*---------------------- END SCRIPT RANDOM NUMBER AND ELAPSED TIME*/

/*---------------------- SCRIPT BACK TO TOP BUTTON*/

// Get button
const btnTop = document.getElementById("btnTop");

// Show button when scrolling
window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// Function to return to top
btnTop.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*---------------------- END SCRIPT BACK TO TOP BUTTON*/
