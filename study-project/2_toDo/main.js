/**
 * 1. 유저가 값을 입력한다
 * 2. +버튼을 클릭하면 아이템이 추가된다
 * 3. delete버튼을 누르면 아이템이 삭제된다
 * 4. check버튼을 누르면 할일이 끝나면서 밑줄그어진다
 * 5. 각 탭들별로 누르면 바가 이동한다
 * 6. 각 탭별로 해당 아이템만 보인다
 */

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  console.log(taskList);
  render();
}

function render() {
  let resultHtml = "";

  for (let i = 0; i < taskList.length; i++) {
    resultHtml += `<div class="task">
            <div>${taskList[i]}</div>
            <div>
              <button>Check</button>
              <button>Delete</button>
            </div>
          </div>`;
  }

  document.getElementById("task-board").innerHTML = resultHtml;
}
