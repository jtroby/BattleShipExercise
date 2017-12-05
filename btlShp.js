(function () {
  generateShips();

}());

var attempPositions = [];
var hits =0;

var fireShot = function () {

  var landingX = document.getElementById("xCoord");
  var landingY = document.getElementById("yCoord");
  var xError = document.getElementById("xCoordError");
  var yError = document.getElementById("yCoordError");
  if ((!(landingX.value == "") && !(landingY.value == ""))
    && (landingX.value <= 7 && landingX.value >= 0)
    && (landingY.value <= 7 && landingY.value >= 0)) {
    landingX.style.borderColor = '';
    landingY.style.borderColor = '';
    xError.innerHTML = "";
    yError.innerHTML = "";
    console.log([Number(landingX.value), Number(landingY.value)]);
    shotAttempt = [Number(landingX.value), Number(landingY.value)];
    hitShip(shotAttempt.toString(), ship.toString());
    attempPositions.push([Number(landingX.value), Number(landingY.value)]);
  } else {
    if (landingX.value == "" || landingX.value >= 7 || landingX.value < 0) {
      landingX.style.borderColor = 'red';
      xError.innerHTML = "Must enter a number between 0-6";
    }
    if (landingY.value == "" || landingY.value >= 7 || landingY.value < 0) {
      landingY.style.borderColor = 'red';
      yError.innerHTML = "Must enter a number between 0-6";
    }
  }

  // let attempt = prompt('Where would you like fire commander? (enter two number from 0-6. EX. 2,5)');
}

function generateShips() {
  var centerX = Math.floor(Math.random() * (6 - 1) + 1);
  var centerY = Math.floor(Math.random() * (8 - 1) + 1);
  console.log(centerX, centerY);
  var shipStart = [centerX - 1, centerY];
  var shipCenter = [centerX, centerY];
  var shipEnd = [centerX + 1, centerY];
  ship = [shipStart, shipCenter, shipEnd];
}

function hitShip(shot, ship) {
  var commandMessage = document.getElementById("commandMessage");
  var sunkShip = document.getElementById("sunkShip");
  console.log(ship);
  console.log(shot);
  console.log(ship.includes(shot));
  if (ship.includes(shot) && !attempPositions.toString().includes(shot)) {
    commandMessage.innerHTML = "Hit, nice work commander!";
    console.log("Hit, nice work commander!");
    console.log(`attempPositions ${attempPositions}`)
    hits++;
    if (hits == 3) {
      sunkShip.innerHTML = `Congradulations commander we have sunk the enemy ship!`;
      console.log(`Congradulations commander we have sunk the enemy ship!`);
      hits = 0;
    }
  } else if (attempPositions.toString().includes(shot)) {
    commandMessage.innerHTML = "We have already fired on that position commader try again.";
    console.log("We have already fired on that position commader try again.")
  } else {
    commandMessage.innerHTML = "We have missed commander. Lets try again!";
    console.log("We have missed commander. Lets try again!");
  }

}