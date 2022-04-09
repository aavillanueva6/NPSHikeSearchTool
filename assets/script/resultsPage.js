/**
 * function that takes in string for parkCode and number for start.  Start defaults to 0 and would be used to display additional pages of results (not in original project scope, but could possibly be added without too much difficulty.)
 * @param {string} parkCode code for the national park.  Need to pull these from the NPS site.  Might need to build out an object or have some other way to get this value from a typed input from the user
 * @param {number} start defaults to 0, used to display additional pages of results (first ten, then next ten, and so on.)
 */
function fetchThingsToDo(parkCode, start = 0) {
  fetch(
    `https://developer.nps.gov/api/v1/thingstodo?api_key=ZnVoqox7ej7CCeeL6tFZ8QqrBBrqctfS84deCO52&parkCode=${parkCode}&q=Hike&limit=10&start=${start}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let confirmedHikes = data.data.filter((element) => {
        let { tags } = element;
        console.log(tags);
        return tags.includes("hiking");
      });
      resetResults();
      displaySearchText(confirmedHikes[0].relatedParks[0]);
      confirmedHikes.forEach((element) => {
        displaySearchResults(element); // call in function to display elements to DOM
      });
    });
}

/**
 * function to clear previous results from results container.
 */
function resetResults() {
  let resultsContainer = document.querySelector("#resultsCardContainer");
  resultsContainer.textContent = "";
  let searchSpan = document.querySelector("#searchTxt");
  searchSpan.textContent = "";
}

/**
 * function to print the name of the national park to the DOM.
 * @param {object} element Object containing details on the national park that was searched
 */
function displaySearchText(element) {
  let searchSpan = document.querySelector("#searchTxt");
  searchSpan.textContent = element.fullName;
}

/**
 * Function takes object from NPS API call and prints results to the DOM by building out cards with relevant information for each one.
 * ** TODO: add a way to save relevant data from the object into the card.  I think a data-attribute can be used for this, but I haven't put too much thought into what data we want to capture at this point.
 * @param {object} element object with activity data from the NPS API call
 */
function displaySearchResults(element) {
  // this is my first attempt at building out the results page.  I took the classes from the HTML that Avi made and created elements with them.  Please don't take this as a finished product.

  // build out elements
  let resultsContainer = document.querySelector("#resultsCardContainer");
  let resultCard = document.createElement("div");
  resultCard.classList.add("w3-col", "13", "m6", "w3-margin-bottom");
  let resultImg = document.createElement("img");
  resultImg.setAttribute("src", element.images[0].url);
  resultImg.setAttribute("alt", element.images[0].title);
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

  let saveButton = document.createElement("button");
  saveButton.classList.add(
    "w3-button",
    "w3-light-grey",
    "w3-block",
    "saveBtnNPS"
  );
  saveButton.textContent = "Save";
  saveButton.setAttribute("data-lat", element.latitude);
  saveButton.setAttribute("data-lon", element.longitude);
  saveButton.setAttribute("data-url", element.url);
  saveButton.setAttribute("data-title", element.title);
  saveButton.setAttribute("data-duration", element.duration);
  saveButton.setAttribute("data-imgSrc", element.images[0].url);
  saveButton.setAttribute("data-imgAlt", element.images[0].title);

  // append elements to DOM
  resultsContainer.append(resultCard);
  resultCard.append(
    resultImg,
    hikeName,
    natParkName,
    shortDescr,
    buttonContainer
  );
  buttonContainer.append(infoButton, saveButton);

  // build Modal
  let modalContainer = document.querySelector("#modalsContainer");
  let modal = document.createElement("div");
  let modalBackgroud = document.createElement("div");
  let modalCard = document.createElement("div");
  let modalCardHead = document.createElement("header");
  let modalCardP = document.createElement("p");
  let modalCardCloseButton = document.createElement("button");
  let modalCardBody = document.createElement("section");
  modal.classList.add("modal");
  modal.setAttribute("id", `modal-${element.id}`);
  modalBackgroud.classList.add("modal-background");
  modalCard.classList.add("modal-card");
  modalCardHead.classList.add("modal-card-head");
  modalCardP.classList.add("modal-card-title");
  modalCardCloseButton.classList.add("delete");
  modalCardCloseButton.setAttribute("aria-label", "close");
  modalCardBody.classList.add("modal-card-body");

  modalCardHead.textContent = element.title;
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
  modalContainer.append(modal);
  modal.append(modalBackgroud, modalCard);
  modalCard.append(modalCardHead, modalCardBody);
  modalCardHead.append(modalCardP, modalCardCloseButton);

  //add event listener to more info button
  infoButton.addEventListener("click", function (event) {
    let targetModal = document.querySelector(`#modal-${element.id}`);
    targetModal.classList.add("is-active");
  });

  // add event listener to the close modal button
  modalCardCloseButton.addEventListener("click", function (event) {
    let targetModal = document.querySelector(`#modal-${element.id}`);
    targetModal.classList.remove("is-active");
  });
}

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
      let forecastContainer = document.querySelector("#forecastContainer");
      forecastContainer.textContent = "";
      for (let i = 0; i < 1; i++) {
        displayWeather(data.daily[i]);
      }
    });
}

function displayWeather(day) {
  console.log(day);
  let forecastContainer = document.querySelector("#forecastContainer");
  let forecastP = document.createElement("p");
  forecastP.classList.add("w3-large", "w3-serif");
  forecastP.innerHTML =
    '<i class="fa fa-quote-right w3-xxlarge w3-text-red"></i><br>';
  let forecastNav = document.createElement("nav");
  let forecastUl = document.createElement("ul");
  let forecastIconLi = document.createElement("li");
  forecastIconLi.textContent = "icon";
  let forecastIconDiv = document.createElement("div");
  forecastIconDiv.classList.add("box");
  forecastIconDiv.innerHTML = `<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">`;

  let forecastTempLi = document.createElement("li");
  forecastTempLi.textContent = "temp";
  let forecastTempDiv = document.createElement("div");
  forecastTempDiv.classList.add("box");
  forecastTempDiv.textContent = day.temp.day;

  let forecastDescLi = document.createElement("li");
  forecastDescLi.textContent = "Description";
  let forecastDescDiv = document.createElement("div");
  forecastDescDiv.classList.add("box");

  forecastContainer.append(forecastP, forecastNav);
  forecastNav.append(forecastUl);
  forecastUl.append(
    forecastIconLi,
    forecastIconDiv,
    forecastTempLi,
    forecastTempDiv,
    forecastDescLi,
    forecastDescDiv
  );
}

/**
 * function that gets the lat and lon based on the NP that was searched.
 * @param {string} parkCode code to identify the searched NP. Is pulled from the URL in the getParams function
 */
function getLocation(parkCode) {
  fetch(
    `https://developer.nps.gov/api/v1/parks?api_key=ZnVoqox7ej7CCeeL6tFZ8QqrBBrqctfS84deCO52&parkCode=${parkCode}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fetchWeather(data.data[0].latitude, data.data[0].longitude);
    });
}

/**
 * function to get the search parameters from the URL
 */
function getParams() {
  let searchParamsArr = document.location.search.split("&");
  let parkCode = searchParamsArr[0].split("=").pop();
  getLocation(parkCode);
  fetchThingsToDo(parkCode);
}

// call the getParams function on page load
getParams();
