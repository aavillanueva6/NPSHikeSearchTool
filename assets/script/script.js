//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

var searchButton = document.getElementsById("searchTxt");
searchButton.addEventListener("click");

var searchBarTwo = document.get;

$("savedHikes").on("click", function () {
  typing = $(this).siblings(".typing").val();
  console.log(typing);
  localStorage.setItem(typing);
});

$("searchBar").val(localStorage.getItem("searchBar"));
