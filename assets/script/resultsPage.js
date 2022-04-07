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
      let hikesWithCoords = data.data.filter((element) => {
        return element.latitude;
      });
      let confirmedHikes = hikesWithCoords.filter((element) => {
        let { tags } = element;
        return tags.includes("hiking");
      });
      console.log(confirmedHikes);
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
  console.log(element);
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
  infoButton.setAttribute("data-lat", element.latitude);
  infoButton.setAttribute("data-lon", element.longitude);
  infoButton.setAttribute("data-url", element.url);

  let saveButton = document.createElement("button");
  saveButton.classList.add(
    "w3-button",
    "w3-light-grey",
    "w3-block",
    "saveBtnNPS"
  );
  saveButton.textContent = "Save Activity";

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
}

fetchThingsToDo("mora"); // calls the function in with Mount Rainier as the searched park.  Starting with this in order to provide a simple test case on page loads.
