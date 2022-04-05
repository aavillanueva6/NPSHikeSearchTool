//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

var searchButton = document.getElementsById("searchTxt");
searchButton.addEventListener("click");

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

$("searchBar").val(localStorage.getItem("savedHike1"));
$("searchBar").val(localStorage.getItem("savedHike2"));
$("searchBar").val(localStorage.getItem("savedHike3"));
$("searchBar").val(localStorage.getItem("savedHike4"));
