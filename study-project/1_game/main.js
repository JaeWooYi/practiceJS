/**
 * 0. 업다운게임 만들기
 */

/**
 * 1. 첫번째로 할거 -> 1~100중 숫자 지정(랜덤)
 */
let randomNum = 0;
function pickRandomNumber() {
  randomNum = Math.floor(Math.random() * 100) + 1; // random() -> 랜덤한 함수를 뽑을수 있게 도와준다. // floor() -> 버림 // 마지막 +1을 하는 이유 : 0~99까지를 1~100으로 바꾸기 위해
  console.log("정답 : ", randomNum);
}
pickRandomNumber();

/**
 * 2. 유저가 번호를 입력한다. && go 버튼클릭
 * 3. 유저가 숫자를 맞춘다면 -> 정답입니다
 * 4. 맞추지 못했다면 -> up || down 판별하기
 * 5. 5번의 기회를 다쓰면 게임이 끝
 * 6. 1~100 범위 숫자는 못쓰게 알려준다.(기회 안 깎기) -> 유저가 이미 입력한 숫자는 다시 알려준다.(기회 안 깎기)
 * 7. 이미 입력한 숫자는 알려주고 기회를 깎지 않는다.
 */
let playButton = document.getElementById("playButton");
// console.log(playButton);
let userNum = document.getElementById("userNum");
let result = document.getElementById("resultArea");
let chance = 5;
let over = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);

function play() {
  let userValue = userNum.value;
  if (userValue < 1 || userValue > 100) {
    result.textContent = "1과 100사이의 숫자를 입력해주세요";
    return false;
  }

  if (history.includes(userValue)) {
    result.textContent = "이미 입력한 값입니다.";
    return false;
  }

  chance--;
  //   chanceArea.textContent = "남은기회 : " + chance;
  chanceArea.textContent = `남은기회 : ${chance}`;
  if (userValue < randomNum) {
    result.textContent = "Up please!";
  } else if (userValue > randomNum) {
    result.textContent = "Down please!";
  } else if (userValue == randomNum) {
    result.textContent = "You Win!!";
    playButton.disabled = true;
  }

  history.push(userValue);
  console.log(`유저 입력값 : ${history}`);

  if (chance < 1) {
    over = true;
  }
  if (over == true) {
    playButton.disabled = true;
    result.textContent = "You Lose!";
  }
}

/**
 * 7. reset버튼을 누르면 게임이 초기화
 */
let reset = document.getElementById("reset");
reset.addEventListener("click", resetButton);
function resetButton() {
  userNum.value = "";
  pickRandomNumber();
  result.textContent = "RESULT";
  over = false;
  chance = 5;
  chanceArea.textContent = "남은기회 : " + chance;
  playButton.disabled = false;
  history = [];
}
