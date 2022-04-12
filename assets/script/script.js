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
});

$("#clearFieldsBtn").click(function (event) {
  event.preventDefault;
  $("savedHikes").val("");
  let savedHikesContainer = document.querySelector("#savedHikesContainer");
  savedHikesContainer.textContent = "";
  localStorage.clear();
});

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

function displaySavedHikes() {
  console.log("i ran the display function");
  let savedHikesArray = JSON.parse(localStorage.getItem("saveData"));
  console.log(savedHikesArray);
  let savedHikesContainer = document.querySelector("#savedHikesContainer");
  savedHikesContainer.textContent = "";
  for (let i = 0; i < 2 && i < savedHikesArray.length; i++) {
    buildSavedHikeCard(savedHikesArray[i], i);
  }
}

function buildSavedHikeCard(element, num) {
  let savedHikesContainer = document.querySelector("#savedHikesContainer");
  let resultCard = document.createElement("div");
  resultCard.classList.add("w3-col", "13", "m6", "w3-margin-bottom", "w3-grayscale");
  let resultImg = document.createElement("img");
  resultImg.setAttribute("src", element.imgSrc);
  resultImg.setAttribute("alt", element.imgAlt);
  resultImg.setAttribute("width", "100%");
  let hikeName = document.createElement("h3");
  hikeName.textContent = element.title;
  let natParkName = document.createElement("p");
  natParkName.classList.add("w3-opacity");
  let shortDescr = document.createElement("p");
  shortDescr.textContent = element.shortDescription;
  let buttonContainer = document.createElement("p");
  let infoButton = document.createElement("button");
  infoButton.classList.add(
    "w3-button",
    "w3-light-grey",
    "w3-block",
    "moreInfoBtnNPS"
  );
  infoButton.textContent = "See More Info";

  //append elements to DOM
  savedHikesContainer.append(resultCard);
  resultCard.append(
    resultImg,
    hikeName,
    natParkName,
    shortDescr,
    buttonContainer
  );
  buttonContainer.append(infoButton);
  // build Modal

  let modal = document.createElement("div");
  let modalCard = document.createElement("div");
  let modalCardHead = document.createElement("header");
  let modalCardHeadText = document.createElement("h2");
  let modalCardCloseButton = document.createElement("span");
  let modalCardBody = document.createElement("section");
  modal.classList.add("w3-modal");
  modal.setAttribute("id", `modal-${num}`);
  modalCard.classList.add("w3-modal-content", "w3-card-4");
  modalCardHead.classList.add("w3-container", "w3-light-gray");
  modalCardCloseButton.classList.add("w3-button", "w3-display-topright");
  modalCardCloseButton.setAttribute("aria-label", "close");
  modalCardBody.classList.add("w3-container");

  modalCardCloseButton.textContent = "x";
  modalCardHeadText.textContent = element.title;
  let modalBodyString = "";
  if (element.latitude & element.longitude) {
    modalBodyString =
      modalBodyString +
      `This hike is located at <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/@${element.latitude},${element.longitude},15z">(${element.latitude}, ${element.longitude})</a> .<br>`;
  }

  if (element.duration) {
    modalBodyString =
      modalBodyString +
      `<br>This hike is estimated to take ${element.duration}.<br>`;
  }
  if (element.url) {
    modalBodyString =
      modalBodyString +
      `<br>For more info on this activity see the NPS site at the following link:` +
      `<br><a target="_blank" rel="noopener noreferrer" href="${element.url}">${element.url}</a>`;
  }
  modalCardBody.innerHTML = modalBodyString;
  //append Modal to DOM
  savedHikesContainer.append(modal);
  modal.append(modalCard);
  modalCard.append(modalCardHead, modalCardBody);
  modalCardHead.append(modalCardHeadText, modalCardCloseButton);

  //add event listener to more info button
  infoButton.addEventListener("click", function (event) {
    let targetModal = document.querySelector(`#modal-${num}`);
    targetModal.style.display = "block";
  });
  // add event listener to the close modal button
  modalCardCloseButton.addEventListener("click", function (event) {
    let targetModal = document.querySelector(`#modal-${num}`);
    targetModal.style.display = "none";
  });
}

// add click listeners for top hikes info and modal close buttons
let delicateArchInfoButton = document.querySelector("#delicateArchInfo");
delicateArchInfoButton.addEventListener("click", function (event) {
  let targetModal = document.querySelector("#delicateArchModal");
  targetModal.style.display = "block";
});
let graniteCanyonInfoButton = document.querySelector("#graniteCanyonInfo");
graniteCanyonInfoButton.addEventListener("click", function (event) {
  let targetModal = document.querySelector("#graniteCanyonModal");
  targetModal.style.display = "block";
});
let delicateArchModalClose = document.querySelector("#delicateArchModalClose");
delicateArchModalClose.addEventListener("click", function () {
  let targetModal = document.querySelector("#delicateArchModal");
  targetModal.style.display = "none";
});
let graniteCanyonModalClose = document.querySelector(
  "#graniteCanyonModalClose"
);
graniteCanyonModalClose.addEventListener("click", function () {
  let targetModal = document.querySelector("#graniteCanyonModal");
  targetModal.style.display = "none";
});

if (JSON.parse(localStorage.getItem("saveData")) == null) {
} else {
  displaySavedHikes();
}
