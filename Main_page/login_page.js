document
  .getElementById("new_workout_plan")
  .addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
    // console.log("New Workout plan start")
  });

document.getElementById("close_button").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
  // console.log("New Workout plan start")
});

let date_day = [
  {
    month_name: "Jan",
    month_number: 01,
  },
  {
    month_name: "Feb",
    month_number: 02,
  },
  {
    month_name: "Mar",
    month_number: 03,
  },
  {
    month_name: "Apr",
    month_number: 04,
  },
  {
    month_name: "May",
    month_number: 05,
  },
  {
    month_name: "Jun",
    month_number: 06,
  },
  {
    month_name: "Jul",
    month_number: 07,
  },
  {
    month_name: "Aug",
    month_number: 08,
  },
  {
    month_name: "Sep",
    month_number: 09,
  },
  {
    month_name: "Oct",
    month_number: 10,
  },
  {
    month_name: "Nov",
    month_number: 11,
  },
  {
    month_name: "Dec",
    month_number: 12,
  },
];

let storage = [];

let workout_detail = document.getElementById("my_workout");
let first_right_box1 = document.getElementById("first_right_box");

let save_workout = document
  .getElementById("save_workout")
  .addEventListener("click", function () {
    let exercise_name = document.getElementById("exercise_name").value;
    let reps = document.getElementById("another_sets_number").value;
    let weight =
      Number(document.getElementById("sets_number").value) *
      Number(document.getElementById("another_sets_number").value);
    let body_weight = document.getElementById("bodyweight").value;
    let notes = document.getElementById("notes").value;
    let comments = document.getElementById("comments").value;
    let date = document.getElementById("date").value;

    console.log("Exercise name " + exercise_name);
    console.log("Reps " + reps);
    console.log("Weight " + weight);
    console.log("Body Weight " + body_weight);
    console.log("Notes " + notes);
    console.log("Comments " + comments);

    let spliting_date = date.split("-").map(Number);

    for (let i = 0; i < date_day.length; i++) {
      if (date_day[i].month_number === spliting_date[1]) {
        var workout_month_name = date_day[i].month_name;
      }
    }

    let daily_workout_details = {};

    daily_workout_details["Exercise"] = exercise_name;
    daily_workout_details["Exercise_date"] = date;
    storage.push(daily_workout_details);

    let h5 = document.createElement("h5");
    h5.textContent = exercise_name;
    h5.style.float = "left";
    workout_detail.appendChild(h5);

    let workout_date = document.createElement("h5");
    workout_date.textContent = workout_month_name + " " + spliting_date[2];
    workout_date.style.float = "left";
    workout_date.style.marginLeft = "78%";
    workout_detail.appendChild(workout_date);

    //After Adding the value
    document.getElementById("exercise_name").value = "";
    document.getElementById("date").value = "";

    if (storage.length === 1) {
      // console.log("Workout Start")
      let browser_details = document.createElement("div");
      let html = "";
      html += `<i class="fa fa-list" id="browse_list"></i>
                <p id="browse_workouts">Browser all workouts</p>`;
      browser_details.innerHTML = html;
      first_right_box1.appendChild(browser_details);
    }

    //Storing the Value in localStorage;
    localStorage.setItem("my_workout_storage", JSON.stringify(storage));
  });

let click_gym = document.getElementById("second_left_box");
let my_gym_div = document.createElement("div");
let my_gym = document
  .getElementById("my_gym")
  .addEventListener("click", function () {
    user_div.remove();
    let html = "";
    html += `<p class="my_gym">Select your gym and find other people who go there:</p>
            <input type="text" id="gym_text" class="gym_text" style="float: left" /><div style="float: left" class="ok_button">ok</div>
            <div style="clear: left"></div>
            <p style="margin-top: 3%">No workouts found</p>`;
    my_gym_div.innerHTML = html;
    click_gym.appendChild(my_gym_div);
  });

let user_div = document.createElement("div");
let click_followed_users = document
  .getElementById("all_user")
  .addEventListener("click", function () {
    my_gym_div.remove();

    for (let i = 0; i < 6; i++) {
      let all_user_div = document.createElement("div");
      all_user_div.style.width = "97.5%";
      all_user_div.style.borderTop = "1px solid grey";
      all_user_div.style.marginTop = "2%";
      all_user_div.style.display = "flex";

      let user_image_div = document.createElement("div");
      user_image_div.style.width = "20%";
      user_image_div.style.marginTop = "2%";
      // user_image_div.style.border = "thick solid black"
      user_image_div.style.borderRadius = "50%";
      user_image_div.style.marginRight = "20px";
      let img = document.createElement("img");
      img.src =
        "https://www.gymwolf.com/user_images/1f403368a68c64b8d18b2837b4d9b2f7_1605459293.jpg";
      img.style.width = "100%";
      img.style.borderRadius = "50%";
      user_image_div.appendChild(img);
      all_user_div.appendChild(user_image_div);

      let user_description_div = document.createElement("div");
      user_description_div.style.width = "80%";

      all_user_div.appendChild(user_description_div);

      let user_name = document.createElement("h5");
      user_name.textContent = "Kevin Tammekan";
      user_name.style.color = "blue";
      user_name.style.fontWeight = "bolder";
      user_name.style.fontSize = "1em";
      user_name.style.marginLeft = "1%";
      user_name.style.marginTop = "2%";

      let user_details = document.createElement("p");
      user_details.textContent = "added a new cardio workout";
      user_details.style.float = "left";
      user_details.style.marginTop = "4%";
      user_details.style.marginLeft = "1%";

      let user_date = document.createElement("p");
      user_date.textContent = "December 31, 2020: Back, Biceps";
      user_date.style.color = "blue";
      user_date.style.textDecoration = "underline";
      user_date.style.marginTop = "4%";
      user_date.style.marginLeft = "1%";
      user_date.style.float = "left";

      let extra_div = document.createElement("div");
      extra_div.style.clear = "left";

      let send_message = document.createElement("p");
      send_message.textContent = "Send message";
      send_message.style.color = "blue";
      send_message.style.float = "left";
      send_message.style.marginLeft = "1%";
      send_message.style.marginTop = "6%";

      let add_comments = document.createElement("p");
      add_comments.textContent = "Add comment";
      add_comments.style.color = "blue";
      add_comments.style.float = "left";
      add_comments.style.marginTop = "6%";
      add_comments.style.marginLeft = "5%";

      user_description_div.appendChild(user_name);
      user_description_div.append(
        user_details,
        user_date,
        extra_div,
        send_message,
        add_comments
      );

      user_div.appendChild(all_user_div);
      click_gym.appendChild(user_div);
    }
  });
