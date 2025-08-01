let timeLeft = 24 * 60 * 60;

function updateCountdown() {
  let hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor((timeLeft % 3600) / 60);
  let seconds = timeLeft % 60;

  document.getElementById("countdown").textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();
