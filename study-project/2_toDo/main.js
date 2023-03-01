/**
 * 1. 유저가 값을 입력한다
 * 2. +버튼을 클릭하면 아이템이 추가된다
 * 3. delete버튼을 누르면 아이템이 삭제된다
 * 4. check버튼을 누르면 할일이 끝나면서 밑줄그어진다
 *
 * 5. check버튼을 누르면 true -> false로
 *    true면 끝난거로 간주하고 밑줄 보여주기
 *    false이면 안끝난거로 간주하고 그대로
 *
 * 6. 각 탭들별로 누르면 바가 이동한다
 * 7. 각 탭별로 해당 아이템만 보인다
 */

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  //   let taskContent = taskInput.value;
  let task = {
    id: randomIdGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  //   taskList.push(taskContent);    --> 객체로 대신할꺼기 때문에 필요가 없어짐.
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let resultHtml = "";

  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHtml += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
              <button onclick="deleteTask()">Delete</button>
            </div>
          </div>`;
    } else {
      resultHtml += `<div class="task">
        <div>${taskList[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
          <button onclick="deleteTask()">Delete</button>
        </div>
      </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHtml;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      //   taskList[i].isComplete = true;     // 이거일때는 밑줄한번 그이면 영원히 였자나
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask() {
  console.log("test delete");
}

function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
