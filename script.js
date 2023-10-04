document.getElementById("startButton").addEventListener("click", startRace);

function startRace() {
  const horses = document.querySelectorAll(".horse");
  const finishLine = document.getElementById("finishLine");
  const winnerText = document.getElementById("winner");

  horses.forEach((horse, index) => {
    horse.style.left = "0px";
    horse.style.top = index * 70 + "px";
  });

  const raceInterval = setInterval(() => {
    horses.forEach((horse) => {
      const randomDistance = Math.floor(Math.random() * 10);
      horse.style.left = parseInt(horse.style.left) + randomDistance + "px";

      if (parseInt(horse.style.left) >= finishLine.offsetLeft) {
        clearInterval(raceInterval);
        winnerText.textContent = horse.id + " kazandı 🎉";
      }
    });
  }, 100);
}
