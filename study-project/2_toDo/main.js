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
let tabs = document.querySelectorAll(".task-tabs div");
let mode = "all";
let filterList = [];
let taskList = [];

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

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
  render();
  console.log("addTask : ", taskList);
}

function render() {
  let list = [];

  if (mode == "all") {
    list = taskList;
  } else if (mode == "onGoing" || mode == "done") {
    list = filterList;
  }

  let resultHtml = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHtml += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${list[i].id}')">Check</button>
              <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
          </div>`;
    } else {
      resultHtml += `<div class="task">
        <div>${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
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
  console.log("toggleComplete : ", taskList);
}

function deleteTask(id) {
  //   console.log("test delete", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  //   console.log(taskList);
  render();
}

function filter(event) {
  mode = event.target.id;
  console.log("필터테스트", event.target);
  filterList = [];

  document.getElementById("under-line").style.width =
    event.target.offsetWidth + "px";
  document.getElementById("under-line").style.top =
    event.target.offsetHeight + "px";
  document.getElementById("under-line").style.left =
    event.target.offsetLeft + "px";

  if (mode == "all") {
    render();
  } else if (mode == "onGoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    // taskList = filterList;   // --> 이렇게 하면 덮어쓰기 되서 안돼.
    render();
  } else if (mode == "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

function randomIdGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
