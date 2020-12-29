/// start calculator page js by: Arshad Ali

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
  </div>`;

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
  </div>`;

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
  </div>`;

  document.getElementById("progress_right").innerHTML = html;
}
/// start calculator page js by: Arshad Ali
