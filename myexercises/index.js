/// start my Exercise page js by: Arshad Ali

document.getElementById("more").addEventListener("click", More);
showTask();

var addTaskButton = document.getElementById("addbutton");
addTaskButton.addEventListener("click", add1);
function add1() {
  var addTaskInput = document.getElementById("exercise_name");
  console.log("arshad");
  var addTaskInputValue = addTaskInput.value;
  var muscle = document.getElementById("musclegroup").value;
  var description = "No description";
  var Weight = "0";
  if (addTaskInputValue.trim()) {
    var task = localStorage.getItem("localtask");
    if (task == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(task);
    }
    taskObj.push({
      task_name: addTaskInputValue,
      task_musle: muscle,
      task_description: description,
      task_weight: Weight,
    });
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addTaskInput.value = "";
  }
  showTask();
}
function add() {
  var addTaskInput = document.getElementById("exercise_name");
  console.log("arshad");
  var addTaskInputValue = addTaskInput.value;
  var muscle = document.getElementById("musclegroup").value;
  var description = document.getElementById("description").value;
  var Weight = document.getElementById("weightkg").value;
  if (!Weight.trim()) {
    Weight = 0;
  }
  if (!description.trim()) {
    description = "No Description";
  }
  if (addTaskInputValue.trim()) {
    var task = localStorage.getItem("localtask");
    if (task == null) {
      taskObj = [];
    } else {
      taskObj = JSON.parse(task);
    }
    taskObj.push({
      task_name: addTaskInputValue,
      task_musle: muscle,
      task_description: description,
      task_weight: Weight,
    });
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    addTaskInput.value = "";
    description.value = "";
    Weight.value = "";
  }
  showTask();
}
function showTask() {
  var task = localStorage.getItem("localtask");
  if (task == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(task);
  }
  var html = "";
  taskObj.forEach(function (item, index) {
    html += `<div id="content_heading"><p>${item.task_musle}</p></div>
  <div id="container_description">
    <div id="des_image">
      <div class="image_box1">
        <div><p>No Image</p></div>
      </div>
    </div>
    <div id="des_des">
      <h2>${item.task_name}</h2>
      <p>${item.task_description}</p>
      <p>${Number(item.task_weight)} KG</p>

    </div>
    <div id="des_delete">
      <button onclick="deleteItem(${index})">
        <img
          src="https://image.flaticon.com/icons/png/512/61/61848.png"
          alt="Delete"
        />
      </button>
    </div>
  </div>`;
  });

  document.getElementById("container_right_content").innerHTML = html;
}
function deleteItem(index) {
  var task = localStorage.getItem("localtask");
  var taskObj = JSON.parse(task);
  taskObj.splice(index, 1);
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  showTask();
}

function More() {
  var html = "";

  html += `<div class="container_left_top">
  <p>Add new exercise</p>
</div><div class="left_mid">
  <div class="image_box">
    <div><p>No image</p></div>
    <input type="text" placeholder="Url" />
  </div>
  <div class="container_left_bootom" id="container_left_bootom">
    <div>
      <h6>Exercise name *</h6>
      <input type="text" id="exercise_name" />
      <h6>Muscle group *</h6>
      <select name="musclegroup" id="musclegroup">
        <option value="Chest">Chest</option>
        <option value="Tricep">Tricep</option>
        <option value="Back">Back</option>
        <option value="Shoulder">Shoulder</option>
        <option value="Legs">Legs</option>
        <option value="Abdominal">Abdominal</option>
        <option value="Combined">Combined</option>
      </select>
      <h6>Description</h6>
      <input type="text"  id="description"/>
      <h6>Weight / Kg</h6>
      <input type="text"  id="weightkg"/>
      <h6>Tips</h6>
      <input type="text" />
      <h6>Warning</h6>
      <input type="text" />
      <div class="div_addbutton">
        <button id="addbutton" onclick="add()">Add Exercises</button>
      </div>
    </div>
  </div>
</div>`;

  document.getElementById("container_left").innerHTML = html;
  document.getElementById("container_left").style.width = "50%";
}

/// end my exercisepage js by: Arshad Ali
