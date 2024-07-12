// let citySelect = document.querySelector("#city-select");
// citySelect.addEventListener("change", (event) => {
//   if (event.target.value.length > 0) {
//     let currentTime = moment().tz(event.target.value).format("HH:MM:SS A");
//     let timeElement = document.querySelector("#current-time");
//     let cityElement = document.querySelector("#city-name");
//     cityElement.innerHTML = event.target.value;
//     timeElement.innerHTML = currentTime;
//   }
// });

//London
// setInterval(() => {
//   let londonElement = document.querySelector("#London");
//   let londonDateElement = londonElement.querySelector(".date");
//   let londonTimeElement = londonElement.querySelector(".time");

//   let londonTime = moment().tz("Europe/London").format("H:MM:SS ");

//   let londonDate = moment().tz("Europe/London").format("MMMM Do, YYYY");
//   londonDateElement.innerHTML = `${londonDate}`;
//   londonTimeElement.innerHTML = `${londonTime} <span class="time-of-day">${moment()
//     .tz("Europe/London")
//     .format("A")}</span>`;
// }, 1000);

// //NewYork

// setInterval(function () {
//   let newYorkElement = document.querySelector("#New-York");
//   let newYorkDateElement = newYorkElement.querySelector(".date");
//   let newYorkTimeElement = newYorkElement.querySelector(".time");

//   let newYorkTime = moment().tz("America/New_York").format("H:MM:SS ");

//   let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
//   newYorkDateElement.innerHTML = `${newYorkDate}`;
//   newYorkTimeElement.innerHTML = `${newYorkTime} <span class="time-of-day">${moment()
//     .tz("America/New_York")
//     .format("A")}</span>`;
// }, 1000);

function updateTime() {
  let londonElement = document.querySelector("#London");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");

  let londonTime = moment().tz("Europe/London").format("h:mm:ss ");

  let londonDate = moment().tz("Europe/London").format("MMMM Do, YYYY");
  londonDateElement.innerHTML = `${londonDate}`;
  londonTimeElement.innerHTML = `${londonTime} <span class="time-of-day">${moment()
    .tz("Europe/London")
    .format("A")}</span>`;

  let newYorkElement = document.querySelector("#New-York");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");

  let newYorkTime = moment().tz("America/New_York").format("h:mm:ss ");

  let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
  newYorkDateElement.innerHTML = `${newYorkDate}`;
  newYorkTimeElement.innerHTML = `${newYorkTime} <span class="time-of-day">${moment()
    .tz("America/New_York")
    .format("A")}</span>`;
}

updateTime();
setInterval(updateTime, 1000);
