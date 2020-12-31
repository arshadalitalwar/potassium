/// start progress page js by: Arshad Ali
forGraph();

document.getElementById("weightlifted").addEventListener("click", weightlifted);
document.getElementById("maximumwork").addEventListener("click", maximumwork);
document.getElementById("popular").addEventListener("click", popular);
document
  .getElementById("weightsection")
  .addEventListener("click", weightsection);
weightlifted();

function popular() {
  document.getElementById("weightlifted").style.backgroundColor = "white";
  document.getElementById("weightlifted").style.color = "#25a9e0";
  document.getElementById("maximumwork").style.backgroundColor = "white";
  document.getElementById("maximumwork").style.color = "#25a9e0";
  document.getElementById("weightsection").style.backgroundColor = "white";
  document.getElementById("weightsection").style.color = "#25a9e0";
  document.getElementById("popular").style.backgroundColor = "#25a9e0";
  document.getElementById("popular").style.color = "white";

  var html = "";
  html += `<h1> Popular Exercises</h1>
      <hr />
      
       
            <h1 id="nodata">No Data Found</h1>
      <h1 class="explaination">Explanation</h1>
      <p id="des">
      This graph shows the 10 exercises you have used the most, with the total weight for each exercise.
  
      </p>`;

  document.getElementById("progress_right").innerHTML = html;
}

function weightsection() {
  document.getElementById("weightlifted").style.backgroundColor = "white";
  document.getElementById("weightlifted").style.color = "#25a9e0";
  document.getElementById("maximumwork").style.backgroundColor = "white";
  document.getElementById("maximumwork").style.color = "#25a9e0";
  document.getElementById("weightsection").style.backgroundColor = "#25a9e0";
  document.getElementById("weightsection").style.color = "white";
  document.getElementById("popular").style.backgroundColor = "white";
  document.getElementById("popular").style.color = "#25a9e0";
  var html = "";
  html += `<h1> Reps in diffrent weight section</h1>
    <hr />
    <div>
      <div>
        <h3>Choose exercise:</h3>
        <hr />
        <input class="progress_input" type="text" placeholder="Exercise" />
      </div>
      <div>
        <h3>Choose date:</h3>
        <hr />
        <select name="date" id="date">
          <option value="">December 28, 2020 - December 28, 2020</option>
          <option value="">Arshad</option>
          <option value="">Arshad</option>
          <option value="">Arshad</option>
        </select>
      </div>
     
    </div>
    <h1 id="nodata">No Data Found</h1>
    <h1 class="explaination">Explanation</h1>
    <p id="des">
    The graph shows the data for the selected time period and exercise.

    This graph shows the total reps and weight lifted in different weight sections based on your maximum weight for this exercise. Your calculated maximum weight for this exercise is . Based on this, all sets have been divided into different groups: 0%-50%, 51%-60%, 61%-70%, 71%-80%, 81%-90% and 91%-100% of the maximum weight. In the ideal case the graph should be shaped like a pyramid - the middle column (71%-80%) should be the highest and the ones on the side the lowest.
    </p>`;

  document.getElementById("progress_right").innerHTML = html;
}
function maximumwork() {
  document.getElementById("maximumwork").style.backgroundColor = "#25a9e0";
  document.getElementById("weightlifted").style.backgroundColor = "white";
  document.getElementById("weightlifted").style.color = "#25a9e0";
  document.getElementById("maximumwork").style.color = "white";
  document.getElementById("weightsection").style.backgroundColor = "white";
  document.getElementById("weightsection").style.color = "25a9e0";
  document.getElementById("popular").style.backgroundColor = "white";
  document.getElementById("popular").style.color = "#25a9e0";
  var html = "";
  html += `<h1 class="right_head">Gymwolf Pro</h1>
  <hr />
  <h2>Access all the features of Gymwolf, upgrade to Gymwolf PRO now.</h2>
  <div class="weight_max">
    <div class="max_cloud">
      <img src="./cloud.png" alt="cloud" />
      <p>
        Export your<br />
        workouts
      </p>
      <div class="max_cloud1">
        <div id="triangle-up"></div>
        <div id="rectangle">
          <div>
            <p>
              Export your<br />
              workouts
            </p>
          </div>
          <p>
            Download a single workout or all of your workouts as an Excel
            spreadsheet.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="max_chart" id="max_advance">
        <img src="./state.png" alt="cloud" />
        <p>Advance Charts</p>
        <div class="max_chart1">
          <div id="triangle-up"></div>
          <div id="rectangle">
            <div><p>Advance Charts</p></div>
            <p>
              Get advanced progress charts for Body Mass Index, Maximum
              Weight and more.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max_chart" id="max_calender">
        <img src="./calender.png" alt="cloud" />
        <p>
          Flexible workout<br />
          plans
        </p>
        <div class="max_chart1">
          <div id="triangle-up"></div>
          <div id="rectangle">
            <div><p>Flexible workout plans</p></div>
            <p>
              Create new workout plans from any gym workout - choose your
              own, or someone else's workout.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max_chart">
        <img src="./bulb.png" alt="cloud" />
        <p>
          Compare<br />
          workouts
        </p>
        <div class="max_chart1">
          <div id="triangle-up"></div>
          <div id="rectangle">
            <div>
              <p>
                Compare<br />
                workouts
              </p>
            </div>
            <p>
              Get weekly/monthly summary and compare the results of single
              workouts, weeks or months.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max_chart">
        <img src="./disc.png" alt="cloud" />
        <p>Calculators</p>
        <div class="max_chart1">
          <div id="triangle-up"></div>
          <div id="rectangle">
            <div><p>Calculators</p></div>
            <p>
              New calculators for Body Fat, Body Mass Index, Basal
              Metabolic Rate and more.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="max_chart">
        <img src="./people.png" alt="cloud" />
        <p>
          Enjoy the PRO<br />
          status
        </p>
        <div class="max_chart1">
          <div id="triangle-up"></div>
          <div id="rectangle">
            <div>
              <p>
                Enjoy the PRO<br />
                status
              </p>
            </div>
            <p>
              Get advanced progress charts for Body Mass Index, Maximum
              Weight and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max_gym">
    <button>Get Gymwolf Pro</button>
  </div>
  <div class="max_des">
    <p>
      When subscribing to our online personal trainer service,<br />
      you get Gymwolf PRO for free!
    </p>
  </div>
  <div class="max_more">
    <button>Learn More</button>
  </div>
`;

  document.getElementById("progress_right").innerHTML = html;
}

function weightlifted() {
  document.getElementById("weightlifted").style.backgroundColor = "#25a9e0";
  document.getElementById("weightlifted").style.color = "white";
  document.getElementById("maximumwork").style.backgroundColor = "white";
  document.getElementById("maximumwork").style.color = "#25a9e0";
  document.getElementById("weightsection").style.backgroundColor = "white";
  document.getElementById("weightsection").style.color = "25a9e0";
  document.getElementById("popular").style.backgroundColor = "white";
  document.getElementById("popular").style.color = "#25a9e0";
  var html = "";
  html += `<h1>Weigth lifted in recent workouts</h1>
    <hr />
    <div>
      <div>
        <h3>Choose exercise:</h3>
        <hr />
        <input class="progress_input" type="text" placeholder="Exercise" />
      </div>
      <div>
        <h3>Choose date:</h3>
        <hr />
        <select name="date" id="date">
          <option value="">December 28, 2020 - December 28, 2020</option>
          <option value="">Arshad</option>
          <option value="">Arshad</option>
          <option value="">Arshad</option>
        </select>
      </div>
      <div>
        <h3>Grouping:</h3>
        <hr />
        <select name="group" id="group">
          <option value="">Single workouts</option>
          <option value="">Group By Week</option>
          <option value="">Group By Month</option>
        </select>
      </div>
    </div>
    <div id="graph_container">
      <select name="Select" id="select">
        <option value="All Exercise">All Exercises</option>
        <option value="pushup">Pushup</option>
      </select>
      <div id="para_graph"><p>Wieght Lifted in recent workout</p></div>
      
      <div class="graph_line">
        <div></div>
        <hr />
        <div></div>
        <hr />
        <div></div>
        <hr />
        <div></div>
        <hr />
        <div></div>
        <hr />
        <div></div>
        <hr />
      </div>
      <div class="graph_Y">
        <p>10k</p>
        <p>8k</p>
        <p>6k</p>
        <p>4k</p>
        <p>2k</p>
        <p>0k</p>
      </div>
      <div class="graph_detail">
        <div>
          <div id="weight_icon"></div>
          <p>Total Wieght</p>
        </div>
        <div>
          <div id="reps_icon"></div>
          <p>Total Reps</p>
        </div>
      </div>
      <div class="graph_bars">
        <ul class="bars">
          <li>
            <div class="bar" id="bar1" data-percentage="20"></div>
          </li>
          <li>
            <div class="bar" id="bar2" data-percentage="50"></div>
          </li>
        </ul>
      </div>
    `;

  document.getElementById("progress_right").innerHTML = html;
  forGraph();
}
var array = [10, 10];
/// start progress page js by: Arshad Ali
function forGraph() {
  $(function () {
    $(".bars li .bar").each(function (key) {
      var percentage = array[key];
      $(this).animate(
        {
          height: percentage + "%",
        },
        1000
      );
    });
  });
}
