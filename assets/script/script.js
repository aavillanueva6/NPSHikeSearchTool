//display current date/time using moment.js
var today = moment();
$("#currentDay").text(today.format("llll"));

var searchButton = document.getElementById("searchBtn");
searchButton.addEventListener("click", function (event) {
  const buttonEl = event.target;
  const textInput = buttonEl.previousElementSibling.value;
  let natParkSearchCode = natParkListObj[textInput];
  if (natParkSearchCode) {
    console.log(natParkSearchCode);
    let apiCallString = `./resultspage.html?parkCode=${natParkSearchCode}`;
    location.assign(apiCallString);
  }
  // var searchTxt = queryString.split("=")[1];
});

// savedHike1.addEventListener("click", function () {
//   localStorage.getItem();
// });

// savedHike2.addEventListener("click", function () {
//   localStorage.getItem();
// });

// savedHike3.addEventListener("click", function () {
//   localStorage.getItem();
// });

// savedHike4.addEventListener("click", function () {
//   localStorage.getItem();
// });

// $("#clearFieldsBtn").click(function (event) {
//   event.preventDefault;
//   $("savedHikes").val("");
//   localStorage.clear();
// });

// $("savedHikes").on("click", function () {
//   typing = $(this).siblings(".typing").val();
//   console.log(typing);
//   localStorage.setItem(typing);
// });

// $("searchBar").val(localStorage.getItem("searchBar"));

// Autocomplete search form widget

$(function () {
  //commented out parks that did not return any results.
  var natParkList = [
    // "Acadia NP",
    "Arches NP",
    // "Badlands NP",
    "Big Bend NP",
    // "Biscayne NP",
    // "Black Canyon of the Gunnison NP",
    // "Bryce Canyon NP",
    "Canyonlands NP",
    "Capitol Reef NP",
    "Carlsbad Caverns NP",
    // "Channel Islands NP",
    // "Congaree NP",
    // "Crater Lake NP",
    "Cuyahoga NP",
    "Death Valley NP",
    "Denali NP",
    // "Dry Tortugas NP",
    // "Everglades NP",
    // "Gates of the Arctic NP",
    // "Gateway Arch NP",
    "Glacier Bay NP",
    "Glacier NP",
    // "Grand Canyon NP",
    "Grand Teton NP",
    // "Great Basin NP",
    // "Great Sand Dunes NP",
    // "Great Smoky Mountains NP",
    "Guadalupe Mountains NP",
    "Haleakala NP",
    // "Hawai'i Volcanoes NP",
    "Hot Springs NP",
    "Indiana Dunes NP",
    // "Isle Royale NP",
    "Joshua Tree NP",
    "Katmai NP",
    "Kenai Fjords NP",
    // "Kings Canyon NP",
    // "Kobuk Valley NP",
    "Lake Clark NP",
    "Lassen Volcanic NP",
    // "Mammoth Cave NP",
    // "Mesa Verde NP",
    "Mount Rainier NP",
    // "NP of American Samoa",
    "New River Gorge NP",
    // "North Cascades NP",
    // "Olympic NP",
    // "Petrified Forest NP",
    // "Pinnacles NP",
    "Redwood NP",
    "Rocky Mountain NP",
    // "Saguaro NP",
    // "Sequoia NP",
    "Shenandoah NP",
    "Theodore Roosevelt NP",
    "Virgin Islands NP",
    "Voyageurs NP",
    // "White Sands NP",
    "Wind Cave NP",
    "Wrangell-St. Elias NP",
    "Yellowstone NP",
    // "Yosemite NP",
    // "Zion NP",
  ];
  $("#searchTxt").autocomplete({
    source: natParkList,
  });
});
const natParkListObj = {
  "Acadia NP": "acan",
  "Arches NP": "arch",
  "Badlands NP": "badl",
  "Big Bend NP": "bibe",
  "Biscayne NP": "bisc",
  "Black Canyon of the Gunnison NP": "blca",
  "Bryce Canyon NP": "brca",
  "Canyonlands NP": "cany",
  "Capitol Reef NP": "care",
  "Carlsbad Caverns NP": "cave",
  "Channel Islands NP": "chis",
  "Congaree NP": "cong",
  "Crater Lake NP": "crla",
  "Cuyahoga NP": "cuva",
  "Death Valley NP": "deva",
  "Denali NP": "dena",
  "Dry Tortugas NP": "drto",
  "Everglades NP": "ever",
  "Gates of the Arctic NP": "gaar",
  "Gateway Arch NP": "jeff",
  "Glacier Bay NP": "glba",
  "Glacier NP": "glac",
  "Grand Canyon NP": "grca",
  "Grand Teton NP": "grte",
  "Great Basin NP": "grba",
  "Great Sand Dunes NP": "grsa",
  "Great Smoky Mountains NP": "grsm",
  "Guadalupe Mountains NP": "gumo",
  "Haleakala NP": "hale",
  "Hawai'i Volcanoes NP": "havo",
  "Hot Springs NP": "hosp",
  "Indiana Dunes NP": "indu",
  "Isle Royale NP": "isro",
  "Joshua Tree NP": "jotr",
  "Katmai NP": "katm",
  "Kenai Fjords NP": "kefj",
  "Kings Canyon NP": "seki",
  "Kobuk Valley NP": "kova",
  "Lake Clark NP": "lacl",
  "Lassen Volcanic NP": "lavo",
  "Mammoth Cave NP": "maca",
  "Mesa Verde NP": "meve",
  "Mount Rainier NP": "mora",
  "NP of American Samoa": "npsa",
  "New River Gorge NP": "neri",
  "North Cascades NP": "noca",
  "Olympic NP": "olym",
  "Petrified Forest NP": "pefo",
  "Pinnacles NP": "pinn",
  "Redwood NP": "redw",
  "Rocky Mountain NP": "romo",
  "Saguaro NP": "sagu",
  "Sequoia NP": "seki",
  "Shenandoah NP": "shen",
  "Theodore Roosevelt NP": "thro",
  "Virgin Islands NP": "viis",
  "Voyageurs NP": "voya",
  "White Sands NP": "whsa",
  "Wind Cave NP": "wica",
  "Wrangell-St. Elias NP": "wrst",
  "Yellowstone NP": "yell",
  "Yosemite NP": "yose",
  "Zion NP": "zion",
};
