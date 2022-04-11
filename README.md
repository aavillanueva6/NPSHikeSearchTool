# National Park Service Hike Search Tool

## Purpose and Functionality

This application allows a user to search for a US National Park, and returns a list of hikes or activities involving hikes at the requested park. It also displays the current day's weather forecast to help the user plan for a trip to the park

The application uses the National Park Service API to return the list of hiking related activities as well as the coordinates of the searched park. It then uses the Open Weather Map One Call API to pull in the weather data for the park.

---

## Key Learnings

- Use of the W3.CSS framework
  - Styling buttons, sections, forms and other HTML elements within this framework
  - Use of this framework to build and interactively display modals
- Use of Third Party APIs to return datasets
  - National Park Service API
    - Filtering the results from this API call to only display relevant information
    - Identify key parameters to pass in to the API call
  - Open Weather Map API
    - Identifying correct data in the returned object to display it to the user
- Working in a team setting to add critical site funcitonality, including event listeners and DOM manipulation
  - Identify what user interaction is expected and how it will be handled
  - Identify way to pass required data between different parts of the application
    - Some methods used include data-attributes and function parameters
- Git flow in a team setting
  - Resolving merge conflicts
  - Reverting changes caused by multiple individuals working within the same file, and inadvertently overwriting each other's code

---

## Deployed Site

The deployed site is hosted on github pages at the following link:

https://aavillanueva6.github.io/NPSHikeSearchTool/

---

## Screenshots

Below is a .gif demo of the core site functionality.

On the home page, the user is presented with two hikes as potential recommendations for them, clicking the "See More Info" button reveals a modal with additional details.

When the user searches for a park, the site provides form control to ensure that they enter an acceptable USNP. After the user presses search, the application takes the user to the second page, where the results are displayed. Along with the hike search results, an overview of the day's weather forecast is displayed.

The user is then able to view more info on a selected hike. When the "See More Info" button is clicked the user is presented with a modal with additional details. When they click the link in the modal, a new tab is opened with further details provided by nps.gov.

The user is also able to save a hike that they want to keep.

The user is then able to return to the home page and see their saved hike on the search page.

![A gif demo of the site functionality](./assets/images/NPSHikeSearchToolDemo.gif)

---

## Known Bugs

No known bugs

---

## Future Improvements

- Additional data that the team considered implementing in the project includes:
  - Map the user from their current location to the trailhead
  - Provide estimated calorie burn for the hike
  - Provide the user with a list of nearby campgrounds for the selected hike

---
