function updateTime() {
  let londonElement = document.querySelector("#London");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");

    let londonTime = moment().tz("Europe/London").format("h:mm:ss ");

    let londonDate = moment().tz("Europe/London").format("MMMM Do, YYYY");
    londonDateElement.innerHTML = `${londonDate}`;
    londonTimeElement.innerHTML = `${londonTime} <span class="time-of-day">${moment()
      .tz("Europe/London")
      .format("A")}</span>`;
  }

  let newYorkElement = document.querySelector("#New-York");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");

    let newYorkTime = moment().tz("America/New_York").format("h:mm:ss ");

    let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
    newYorkDateElement.innerHTML = `${newYorkDate}`;
    newYorkTimeElement.innerHTML = `${newYorkTime} <span class="time-of-day">${moment()
      .tz("America/New_York")
      .format("A")}</span>`;
  }

  let dubaiElement = document.querySelector("#Dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");

    let dubaiTime = moment().tz("Asia/Dubai").format("h:mm:ss ");

    let dubaiDate = moment().tz("Asia/Dubai").format("MMMM Do, YYYY");
    dubaiDateElement.innerHTML = `${dubaiDate}`;
    dubaiTimeElement.innerHTML = `${dubaiTime} <span class="time-of-day">${moment()
      .tz("Asia/Dubai")
      .format("A")}</span>`;
  }
}

function updateCityListTime(event) {
  let citiesElement = document.querySelector("#cities-container");
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    //moment().tz.guess() will guess the timezone of the user
    cityTimeZone = moment.tz.guess();
  }
  //the replace function replaces the first parameter with the second parameter
  //the split function takes a parameter and splits a string into seperate elements
  //wherever that parameter shows up and creates an array of the separated elements
  //the square brackets allows you to access the item in the array you created that you
  //want

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let currentTime = moment().tz(cityTimeZone);

  if (cityTimeZone === "current") {
    let nameOfCity = cityTimeZone.replace("_", " ").split("/")[1];
    console.log(nameOfCity);
    nameOfCity = "Charlotte";
    console.log(nameOfCity);
  }

  // These lines of code will change the list of cities and their times
  // to the targeted or selected city time and date
  citiesElement.innerHTML = `
  <div class="cities">
    <div>
        <h2>${cityName}</h2>
            <div class="date">${currentTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${currentTime.format(
            "h:mm:ss"
          )}<span class="time-of-day"> ${currentTime.format("A")}</span></div>
        </div>
        <a href="/" class="homepage">Homepage </a>`;
  // use setInterval and create a function that calls the updateCityListTime function so that it updates
  //every second.
  setInterval(() => {
    updateCityListTime(event);
  }, 1000);
}

updateTime();
setInterval(updateTime, 1000);
let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCityListTime);

// setInterval(updateCityListTime, 1000);

// let homeButton = document.querySelector("button");
// homeButton.addEventListener("click", updateTime);
// setInterval(updateCityListTime, 1000);

//London
