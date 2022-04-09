//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

var searchButton = document.getElementById("searchTxt");
searchButton.addEventListener("click", function (event) {});

//var searchTxt = queryString.split("=")[1];
var savedHike1 = document.querySelector("#savedHike1");
var savedHike2 = document.querySelector("#savedHike2");
//var savedHike3 = document.querySelector("#savedHike3");
//var savedHike4 = document.querySelector("#savedHike4");

savedHike1.addEventListener("click", function (event) {
  localStorage.getItem();
  console.log(event);
});

savedHike2.addEventListener("click", function (event) {
  localStorage.getItem();
});

// savedHike3.addEventListener("click", function (event) {
//localStorage.getItem();
//});

//savedHike4.addEventListener("click", function (event) {
// localStorage.getItem();
//});

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

$("savedHike1").val(localStorage.getItem("savedHike1"));
$("savedHike2").val(localStorage.getItem("savedHike2"));
$("savedHike3").val(localStorage.getItem("savedHike3"));
$("savedHike4").val(localStorage.getItem("savedHike4"));
