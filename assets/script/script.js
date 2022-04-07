//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

// var searchButton = document.getElementsById("searchTxt");
// searchButton.addEventListener("click");

var searchTxt = queryString.split("=")[1];

savedHike1.addEventListener("click", function () {
  localStorage.getItem();
});

savedHike2.addEventListener("click", function () {
  localStorage.getItem();
});

savedHike3.addEventListener("click", function () {
  localStorage.getItem();
});

savedHike4.addEventListener("click", function () {
  localStorage.getItem();
});

$("#clearFieldsBtn").click(function (event) {
  event.preventDefault;
  $("savedHikes").val("");
  localStorage.clear();
});

$("savedHikes").on("click", function () {
  typing = $(this).siblings(".typing").val();
  console.log(typing);
  localStorage.setItem(typing);
});

<<<<<<< HEAD
$("searchBar").val(localStorage.getItem("searchBar"));

// API  tormenta
function fetchWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=a8aa38cdd3dd713a7207c383fb08def8`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.daily);
    });
}
function fetchThingsToDo(parkCode, start = 0) {
  fetch(
    `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=47.6&lon=-122.3&appid=a8aa38cdd3dd713a7207c383fb08def8`
  );
}

fetchWeather(47.6, -122.3);
=======
$("searchBar").val(localStorage.getItem("savedHike1"));
$("searchBar").val(localStorage.getItem("savedHike2"));
$("searchBar").val(localStorage.getItem("savedHike3"));
$("searchBar").val(localStorage.getItem("savedHike4"));
>>>>>>> 6ad5b8f8891dd457f9654ab35d9d939f51b841f7
