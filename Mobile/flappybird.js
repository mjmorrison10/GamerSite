const bird = document.querySelector(".bird");
const gameDisplay = document.querySelector(".game-container");
const ground = document.querySelector(".ground");
const playBtn = document.querySelector(".play");
const jumpBtn = document.querySelector(".jump");

let birdLeft = 220;
let birdBottom = 100;
let gravity = 2;
let isGameOver = false;
let gap = 450;

playBtn.addEventListener("click", startGame);

function startGame() {
  birdBottom -= gravity;
  bird.style.bottom = birdBottom + "px";
  bird.style.left = birdLeft + "px";
}

let gameTimerID = setInterval(startGame, 20);

function control(e) {
  if (e.keyCode === 87 || e.keyCode === 38) {
    jump();
  }
}
function jump() {
  if (birdBottom < 500) {
    birdBottom += 50;
  }
  bird.style.bottom = birdBottom + "px";
  console.log(birdBottom);
}

document.addEventListener("keyup", control);
jumpBtn.addEventListener("click", control);

function generateObstacle() {
  let obstacleLeft = 500;
  let randomHeight = Math.random() * 150;
  let obstacleBottom = randomHeight;
  const obstacle = document.createElement("div");
  const topObstacle = document.createElement("div");
  if (!isGameOver) {
    obstacle.classList.add(
      "obstacle",
      "w-x60",
      "h-x300",
      "absolute",
      "bg-flappybird-pipe"
    );
    topObstacle.classList.add(
      "obstacle",
      "w-x60",
      "h-x300",
      "absolute",
      "transform",
      "rotate-180",
      "bg-flappybird-pipe"
    );
  }
  gameDisplay.appendChild(obstacle);
  gameDisplay.appendChild(topObstacle);
  obstacle.style.left = obstacleLeft + "px";
  topObstacle.style.left = obstacleLeft + "px";
  obstacle.style.bottom = obstacleBottom + "px";
  topObstacle.style.bottom = obstacleBottom + gap + "px";

  function moveObstacle() {
    obstacleLeft -= 2;
    obstacle.style.left = obstacleLeft + "px";
    topObstacle.style.left = obstacleLeft + "px";

    if (obstacleLeft === -60) {
      clearInterval(timerID);
      gameDisplay.removeChild(obstacle);
      gameDisplay.removeChild(topObstacle);
    }
    if (
      (obstacleLeft > 200 &&
        obstacleLeft < 280 &&
        birdLeft === 220 &&
        (birdBottom < obstacleBottom + 152 ||
          birdBottom > obstacleBottom + gap - 200)) ||
      birdBottom === 0
    ) {
      gameOver();
      clearInterval(timerID);
    }
  }
  let timerID = setInterval(moveObstacle, 20);
  if (!isGameOver) setTimeout(generateObstacle, 3000);
}

generateObstacle();

function gameOver() {
  clearInterval(gameTimerID);
  console.log("game over");
  isGameOver = true;
  document.removeEventListener("keyup", control);
  ground.classList.add("ground");
  ground.classList.remove("ground-moving");
}
